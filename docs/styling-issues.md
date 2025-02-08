# Styling Issues Log

## Text Centering in CarbonIntensityChart

**Issue**: Text headings ("24-Hour Carbon Intensity" and description) remain left-aligned while chart is centered.

### Attempted Solutions

1. **Added text-center to elements**
   - Added `text-center` to h2 and p elements
   - Result: Still left-aligned

2. **Moved text inside CardContent**
   - Moved text div inside CardContent which has `text-center` class
   - Result: No change, still left-aligned

3. **Modified flex container**
   - Changed from `flex flex-col items-center` to `text-center w-full`
   - Result: Still left-aligned

4. **Added explicit width and center classes**
   - Added `w-full text-center` to both text elements
   - Result: Still left-aligned

### Next Steps to Try
1. Check if any parent styles are overriding the text alignment
2. Investigate if Tailwind classes are being properly loaded
3. Consider using inline styles temporarily to isolate the issue
4. Check browser dev tools for any competing styles