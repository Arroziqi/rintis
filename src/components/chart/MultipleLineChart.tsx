import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart';

// 1. Data dari Backend
const rawData = [
  { outcome: 0.0, income: 22000.0, date: '2025-12-01' },
  { outcome: 34000.0, income: 0.0, date: '2025-12-03' },
  { outcome: 120000.0, income: 50000.0, date: '2025-12-04' },
  { outcome: 0.0, income: 17500.0, date: '2025-12-05' },
  { outcome: 140000.0, income: 0.0, date: '2025-12-07' },
  { outcome: 0.0, income: 24500.0, date: '2025-12-08' },
  { outcome: 27000.0, income: 0.0, date: '2025-12-09' },
  { outcome: 0.0, income: 13000.0, date: '2025-12-11' },
  { outcome: 28000.0, income: 0.0, date: '2025-12-12' },
  { outcome: 0.0, income: 15000.0, date: '2025-12-14' },
  { outcome: 35000.0, income: 0.0, date: '2025-12-15' },
  { outcome: 138000.0, income: 0.0, date: '2025-12-16' },
  { outcome: 0.0, income: 20000.0, date: '2025-12-17' },
  { outcome: 38000.0, income: 0.0, date: '2025-12-18' },
];

export function MultipleLineChart() {
  // 2. Format Data (Opsional: Format tanggal agar lebih pendek, misal "01 Dec")
  const chartData = rawData.map((item) => {
    const dateObj = new Date(item.date);
    return {
      date: item.date, // Data asli untuk tooltip/logic
      displayDate: dateObj.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
      }), // Untuk XAxis
      income: item.income,
      outcome: item.outcome,
    };
  });

  const chartConfig = {
    income: {
      label: 'Pemasukan',
      color: '#4A3AFF', // Warna Hijau (misalnya)
    },
    outcome: {
      label: 'Pengeluaran',
      color: '#ef4444', // Warna Merah (misalnya)
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full">
      {' '}
      {/* Container Luar */}
      {/* 3. Wrapper Scrollable 
         Berikan overflow-x-auto agar bisa digeser horizontal.
      */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[800px]">
          {' '}
          {/* 4. Paksa lebar minimum agar chart melebar */}
          <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: -15,
                right: 12,
                top: 20,
              }}
            >
              <CartesianGrid vertical={false} />

              <XAxis
                dataKey="displayDate"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                // Format angka mata uang (IDR)
                tickFormatter={(value) =>
                  new Intl.NumberFormat('id-ID', {
                    notation: 'compact',
                    compactDisplay: 'short',
                  }).format(value)
                }
                style={{
                  fontSize: '12px',
                  fill: 'var(--text-muted)',
                }}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" />}
              />

              <Line
                dataKey="income"
                type="monotone"
                stroke="var(--color-income)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="outcome"
                type="monotone"
                stroke="var(--color-outcome)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
}
