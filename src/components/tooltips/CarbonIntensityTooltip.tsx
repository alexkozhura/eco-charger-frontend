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
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        padding: '12px 16px',
        borderRadius: '12px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.7)',
        minWidth: '140px',
        animation: 'tooltipFadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        textAlign: 'center'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
        <span style={{ 
          fontSize: '28px',
          fontWeight: 500,
          color: 'rgba(17, 24, 39, 0.9)'
        }}>
          {payload[0].value}
        </span>
        <span style={{ 
          fontSize: '14px',
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
    transform: translateY(8px);
    backdrop-filter: blur(0);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
    backdrop-filter: blur(12px);
  }
}
`

const styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)