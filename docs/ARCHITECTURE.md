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
- Development: Using mock data from src/mocks/forecast.json
- Production: https://eco-charger-api-731507267492.europe-west9.run.app/forecast
- Returns 168-hour carbon intensity forecast
- Future extensions: price data, recommendations

## Component Generation
- Using v0.dev for initial component prototypes
- Customizing and integrating with project structure
- Ensuring mobile-first and cross-platform compatibility