import CarbonIntensityChart from './components/CarbonIntensityChart';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-4xl text-center">
        <h1 style={{textAlign: 'center'}} className="my-8 text-2xl font-bold">Carbon Intensity Dashboard</h1>
      </div>
      <CarbonIntensityChart />
    </div>
  );
}

export default App;