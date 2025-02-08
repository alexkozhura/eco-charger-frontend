interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number; payload: { time: string; intensity: number } }>
  label?: string
}

export const CarbonIntensityTooltip = ({ active, payload, label }: TooltipProps) => {
  if (!active || !payload?.length) return null

  const currentValue = payload[0].value
  const previousValue = payload[0].payload.intensity
  const diff = currentValue - previousValue
  const color = payload[0].color

  const arrow = diff > 0 ? '↑' : diff < 0 ? '↓' : '−'
  const trendClass = diff > 0 ? 'text-red-400' : diff < 0 ? 'text-green-400' : 'text-gray-400'

  return (
    <div 
      className="bg-gray-800 border border-gray-700 p-3 shadow-lg rounded-lg transform transition-transform duration-200 hover:scale-105"
      style={{ 
        maxWidth: "200px",
        animation: "fadeIn 0.2s ease-in-out"
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div 
          className="w-3 h-3 rounded-full" 
          style={{ backgroundColor: color }}
        />
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
      
      <p className="text-white text-lg font-semibold mb-1">
        {currentValue} gCO2/kWh
      </p>

      <div className="flex items-center gap-1 text-sm">
        <span className={trendClass}>{arrow}</span>
        <span className={trendClass}>
          {Math.abs(diff)} from previous hour
        </span>
      </div>
    </div>
  )
}

// Add keyframes for fadeIn animation
const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
`

// Add styles to document
const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)