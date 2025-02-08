interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

export const CarbonIntensityTooltip = ({ active, payload }: TooltipProps) => {
  if (!active || !payload?.length) return null

  return (
    <div 
      className="bg-white/95 backdrop-blur-sm p-2 shadow-lg rounded-md border border-gray-200"
      style={{ 
        minWidth: "120px",
        animation: "fadeIn 0.15s ease-out",
        textAlign: "center"
      }}
    >
      <p className="text-gray-900 text-lg font-medium">
        {payload[0].value} gCO2/kWh
      </p>
    </div>
  )
}

const styles = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
`

const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)