import { useEffect, useState } from 'react';
import { ForecastResponse } from './types/forecast';
import { getForecast } from './services/forecastService';
import { CarbonTimeline } from './components/CarbonTimeline';
import './App.css';

function App() {
  const [data, setData] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    getForecast().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Carbon Intensity Forecast</h1>
      <CarbonTimeline data={data.forecast} />
    </div>
  );
}

export default App;