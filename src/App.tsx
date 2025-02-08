import CarbonIntensityChart from './components/CarbonIntensityChart';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="container mx-auto">
        <h1 className="my-8 text-2xl font-bold text-center">Carbon Intensity Dashboard</h1>
        <CarbonIntensityChart />
      </div>
    </div>
  );
}

export default App;