# Development Guide

## Getting Started
```bash
git clone https://github.com/alexkozhura/eco-charger-frontend.git
cd eco-charger-frontend
npm install
npm run dev
```

## Development Workflow
1. Use v0.dev to generate component prototypes
2. Clean up and integrate generated components
3. Connect with mock data during development (src/mocks/forecast.json)
4. Switch to API integration when ready

## Project Goals
1. Create intuitive UI for viewing carbon intensity
2. Enable smart scheduling of energy-intensive tasks
3. Prepare architecture for future React Native port

## Implementation Phases

### Phase 1: Web MVP
- Today View with 24h forecast
- Basic recommendations
- Current intensity display

### Phase 2: Enhanced Features
- Week view
- Task scheduling
- Price integration (future)

### Phase 3: Mobile App
- React Native implementation
- Reuse business logic
- Platform-specific optimizations

## Design Principles
- Use Tailwind CSS for styling
- Flexbox-based layouts
- Separate business logic from UI
- Modular component structure
- Consistent data patterns

## Styling
- Tailwind CSS for utility-first styling
- Component-level styles in ui/ directory
- PostCSS for processing Tailwind directives