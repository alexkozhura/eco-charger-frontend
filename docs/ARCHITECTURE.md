# Eco-Charger Frontend Architecture

## Overview
React-based frontend for the Eco-Charger application, designed to help users optimize their electricity usage based on carbon intensity forecasts.

## Key Principles
- Mobile-first design
- Cross-platform ready architecture
- Extensible for future features
- Clean separation of concerns

## Project Structure
```
src/
├── components/    # Reusable UI components
├── hooks/        # Shared business logic
├── services/     # API layer
├── utils/        # Helper functions
└── context/      # State management
```

## Tech Stack
- React 19 + TypeScript
- Chakra UI for components
- Tanstack Query for data fetching
- Recharts for visualizations
- Axios for API calls

## API Integration

### Development
Mock data structure (src/mocks/forecast.json):
```json
{
  "generated_at": "2025-02-08T07:53:04.961093+00:00",
  "forecast": [
    {
      "timestamp": "2025-02-08T00:00:00+0000",
      "carbon_intensity": 631.4999389648438
    }
  ]
}
```

### Production
- Endpoint: https://eco-charger-api-731507267492.europe-west9.run.app/forecast
- Returns 168-hour carbon intensity forecast with hourly granularity
- Carbon intensity values in gCO2/kWh

### Future Extensions
- Price data integration
- Smart scheduling recommendations

## Component Generation
- Using v0.dev for initial component prototypes
- Customizing and integrating with project structure
- Ensuring mobile-first and cross-platform compatibility