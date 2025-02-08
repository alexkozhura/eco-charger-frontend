interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

export const CarbonIntensityTooltip = ({ active, payload, label }: TooltipProps) => {
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