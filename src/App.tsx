import { useEffect, useState } from 'react';
import { ForecastResponse } from './types/forecast';
import { getForecast } from './services/forecastService';
import { CarbonTimeline } from './components/CarbonTimeline';

const styles = {
  container: {
    flex: 1,
    padding: 20,
    maxWidth: 1200,
    alignSelf: 'center',
    width: '100%',
  }
};

function App() {
  const [data, setData] = useState<ForecastResponse | null>(null);

  useEffect(() => {
    getForecast().then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <h1>Carbon Intensity Forecast</h1>
      <CarbonTimeline data={data.forecast} />
    </div>
  );
}

export default App;