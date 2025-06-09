// Components/AreaChart.jsx
import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const AreaChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        boundaryGap: false,
      },
      yAxis: { type: 'value' },
      series: [
        {
          name: 'Spending',
          type: 'line',
          smooth: true,
          data: [1200, 1600, 900, 1400, 1800, 1500],
          areaStyle: {},
          lineStyle: { width: 2 },
          itemStyle: { color: '#4CAF50' },
        },
      ],
    };

    chart.setOption(option);
    window.addEventListener('resize', chart.resize);
    return () => {
      chart.dispose();
      window.removeEventListener('resize', chart.resize);
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }} />;
};

export default AreaChart;
