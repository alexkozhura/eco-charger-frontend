import CarbonIntensityChart from './components/CarbonIntensityChart';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <h1 className="my-8 text-2xl font-bold text-center max-w-4xl w-full">Carbon Intensity Dashboard</h1>
      <CarbonIntensityChart />
    </div>
  );
}

export default App;