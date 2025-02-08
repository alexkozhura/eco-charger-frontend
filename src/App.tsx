import CarbonIntensityChart from './components/CarbonIntensityChart';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="mx-auto w-full max-w-4xl px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Carbon Intensity Dashboard</h1>
        <CarbonIntensityChart />
      </div>
    </div>
  );
}

export default App;