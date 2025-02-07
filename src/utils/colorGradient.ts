export function getColor(value: number, min: number, max: number): string {
  const ratio = (value - min) / (max - min)
  const hue = ((1 - ratio) * 120).toString(10)
  return `hsl(${hue}, 80%, 45%)`  // Adjusted saturation and lightness for better visibility
}