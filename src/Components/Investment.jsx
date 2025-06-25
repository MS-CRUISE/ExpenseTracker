import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

//dummy data
const data = [
  { category: 'Stocks', investment: 450000, max: 500000 },
  { category: 'Real Estate', investment: 300000, max: 500000 },
  { category: 'Bonds', investment: 150000, max: 500000 },
  { category: 'Mutual Funds', investment: 280000, max: 500000 },
  { category: 'Gold', investment: 100000, max: 500000 },
  { category: 'Crypto', investment: 50000, max: 500000 },
];

const InvestmentRadarChart = () => {
  return (
    <div className="w-full h-[22rem]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" />
          <PolarRadiusAxis angle={30} domain={[0, 5000]} />
          <Radar
            name="Your Investment"
            dataKey="investment"
            stroke="#38bdf8"
            fill="#38bdf8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentRadarChart;
