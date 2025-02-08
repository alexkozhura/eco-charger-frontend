# App.tsx Styling Issues

## Text Alignment Issues

### Dashboard Title Alignment Problem

**Issue**: App's header text remains left-aligned despite:
- Parent div having `text-center` class
- Flexbox centering with `items-center`

### Investigation

1. **CSS Class Structure Review**
   ```tsx
   <div className="flex flex-col items-center min-h-screen bg-gray-50">
     <div className="w-full max-w-4xl text-center">
       <h1>Carbon Intensity Dashboard</h1>
     </div>
   </div>
   ```

2. **Initial Hypothesis**
   - Flexbox layout might override text alignment
   - Same issue observed in CarbonIntensityChart.tsx

### Solution Applied

1. **Inline Style Addition**
   ```tsx
   <h1 style={{textAlign: 'center'}} className="my-8 text-2xl font-bold">
   ```

2. **Why It Worked**
   - Inline styles have higher CSS specificity
   - Overrides any conflicting Tailwind classes
   - Consistent with solution in CarbonIntensityChart

### Best Practices Identified
1. Use inline styles when Tailwind classes are unexpectedly overridden
2. Document CSS specificity issues for future reference
3. Consider centralizing text alignment solutions for consistency