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

### Investigation Results

5. **Checked Dev Tools Output**
   - Found nested `text-center` divs with no effect
   - Parent `CardContent` div's `text-center` class is not propagating
   - Issue likely caused by flexbox layout overriding text alignment

### Solution Found

6. **Used inline styles with proper Card structure**
   - Fixed misplaced CardContent tag
   - Applied inline styles: `style={{textAlign: 'center'}}` 
   - Tailwind classes were being overridden, inline styles take precedence
   - Result: Text properly centered

Key learning: When Tailwind classes don't achieve desired effect, inline styles can be used as they have higher specificity.