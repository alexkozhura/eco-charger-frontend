To run the app: 
```bash
npm run dev
```

## Styling Gotchas

### Tailwind Text Alignment
If Tailwind's `text-center` class doesn't work, use inline styles: `style={{textAlign: 'center'}}`. This happens when CSS specificity conflicts occur.

