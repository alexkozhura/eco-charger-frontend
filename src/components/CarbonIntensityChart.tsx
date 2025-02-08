"use client"

import { useState, useMemo } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent } from "./ui/card"
import { getColor } from "../utils/colorGradient"
import mockForecast from "../mocks/forecast.json"

interface IntensityData {
  timestamp: string
  carbon_intensity: number
}

interface ChartData {
  time: string
  intensity: number
}

interface CustomBarProps {
  x?: number
  y?: number
  width?: number
  height?: number
  intensity: number
  minIntensity: number
  maxIntensity: number
}

interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

const transformData = (rawData: IntensityData[]): ChartData[] => {
  const now = new Date()
  return rawData
    .filter(d => new Date(d.timestamp) >= now)
    .slice(0, 24)
    .map(d => ({
      time: new Date(d.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', hour12: false }),
      intensity: Math.round(d.carbon_intensity)
    }))
}

export default function CarbonIntensityChart() {
  const [data] = useState(() => transformData(mockForecast.forecast))

  const { minIntensity, maxIntensity } = useMemo(() => {
    const intensities = data.map((d) => d.intensity)
    return {
      minIntensity: Math.min(...intensities),
      maxIntensity: Math.max(...intensities),
    }
  }, [data])

  return (
    <Card className="w-full max-w-4xl mx-auto p-4">
      <CardContent>
        <h2 className="text-xl font-semibold mb-2" style={{textAlign: 'center'}}>24-Hour Carbon Intensity</h2>
        <p className="text-gray-600 mb-6" style={{textAlign: 'center'}}>Carbon intensity (gCO2/kWh) over the next 24 hours</p>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              margin={{ top: 20, right: 60, left: 60, bottom: 5 }}
              layout="horizontal"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis label={{ value: "gCO2/kWh", angle: -90, position: "insideLeft" }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="intensity"
                shape={(props: any) => {
                  const customProps = {
                    ...props,
                    minIntensity,
                    maxIntensity,
                    intensity: props.value
                  }
                  return <CustomBar {...customProps} />
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

const CustomTooltip = ({ active, payload, label }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-200 p-2 shadow-sm rounded-md">
        <p className="font-medium">{`Time: ${label}`}</p>
        <p>{`Carbon Intensity: ${payload[0].value} gCO2/kWh`}</p>
      </div>
    )
  }
  return null
}

const CustomBar = (props: CustomBarProps) => {
  const { x = 0, y = 0, width = 0, height = 0, intensity, minIntensity, maxIntensity } = props
  const fill = getColor(intensity, minIntensity, maxIntensity)
  return <rect x={x} y={y} width={width} height={height} fill={fill} />
}
