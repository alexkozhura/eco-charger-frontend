interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

export const CarbonIntensityTooltip = ({ active, payload }: TooltipProps) => {
  if (!active || !payload?.length) return null

  return (
    <div 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        padding: '8px 12px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        minWidth: '100px',
        animation: 'tooltipFadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        textAlign: 'center'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '3px' }}>
        <span style={{ 
          fontSize: '20px',
          fontWeight: 500,
          color: 'rgba(17, 24, 39, 0.9)'
        }}>
          {payload[0].value}
        </span>
        <span style={{ 
          fontSize: '11px',
          color: 'rgba(107, 114, 128, 0.8)',
          fontWeight: 400
        }}>
          gCO2/kWh
        </span>
      </div>
    </div>
  )
}

const styles = `
@keyframes tooltipFadeIn {
  from { 
    opacity: 0;
    transform: translateY(6px);
    backdrop-filter: blur(0);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
    backdrop-filter: blur(8px);
  }
}
`

const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)