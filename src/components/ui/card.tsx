interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className = '', children }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600">{children}</p>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}