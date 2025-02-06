import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { format, parseISO } from 'date-fns';
import { ForecastDataPoint } from '../types/forecast';

interface Props {
  data: ForecastDataPoint[];
}

export const CarbonTimeline = ({ data }: Props) => {
  const getGradientColor = (value: number) => {
    const max = 1000; // Adjust based on your data
    const ratio = value / max;
    return `rgb(${255 * ratio}, ${255 * (1 - ratio)}, 0)`;
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#e57373" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis 
          dataKey="timestamp"
          tickFormatter={(str) => format(parseISO(str), 'HH:mm')}
          interval="preserveStartEnd"
        />
        <YAxis domain={['dataMin', 'dataMax']} />
        <Tooltip
          labelFormatter={(label) => format(parseISO(label), 'MMM dd, HH:mm')}
          formatter={(value: number) => [`${Math.round(value)} g/kWh`, 'Carbon Intensity']}
        />
        <Area
          type="monotone"
          dataKey="carbon_intensity"
          stroke="#82ca9d"
          fill="url(#colorIntensity)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};