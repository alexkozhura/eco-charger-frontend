import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { format, parseISO } from 'date-fns';
import { ForecastDataPoint } from '../types/forecast';

interface Props {
  data: ForecastDataPoint[];
}

export const CarbonTimeline = ({ data }: Props) => {
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
          tickFormatter={(str) => format(parseISO(str), 'HH:00')}
          interval={6}
          tickCount={8}
        />
        <YAxis 
          domain={['dataMin', 'dataMax']} 
          tickFormatter={(value) => `${Math.round(value)}`}
          width={50}
        />
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