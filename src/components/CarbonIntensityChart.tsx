"use client"

import { useState, useMemo } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
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
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>24-Hour Carbon Intensity</CardTitle>
        <CardDescription>Carbon intensity (gCO2/kWh) over the next 24 hours</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis label={{ value: "gCO2/kWh", angle: -90, position: "insideLeft" }} />
              <Bar
                dataKey="intensity"
                shape={(props: CustomBarProps) => (
                  <CustomBar {...props} minIntensity={minIntensity} maxIntensity={maxIntensity} />
                )}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

const CustomBar = (props: CustomBarProps) => {
  const { x = 0, y = 0, width = 0, height = 0, intensity, minIntensity, maxIntensity } = props
  const fill = getColor(intensity, minIntensity, maxIntensity)
  return <rect x={x} y={y} width={width} height={height} fill={fill} />
}
