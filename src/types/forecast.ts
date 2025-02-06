export interface ForecastDataPoint {
  timestamp: string;
  carbon_intensity: number;
}

export interface ForecastResponse {
  generated_at: string;
  forecast: ForecastDataPoint[];
}