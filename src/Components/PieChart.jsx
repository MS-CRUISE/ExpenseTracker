import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const PieChart = () => {
    
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
        title: {
  text: 'Report Overview',
  left: '4px',
  top: 5,
  bottom:'1px',
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
},
      legend: {
        bottom: '2%',
        left: 'center',
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '60%'],
          avoidLabelOverlap:true,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            formatter: '{d}%',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              fontWeight: 'bold',
            },
          },
          data: [
            { value: 104800, name: 'Savings',itemStyle: { color: '#1545b7' }
 },
            { value: 1000000, name: 'Income',itemStyle: { color: '#63bf3c' }},
            { value: 5800, name: 'Expense',itemStyle: { color: '#b92e1c' }},
           
          ],
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

return (
  <div className="p-1 h-[420px] mb-0.5 overflow-hidden">
    <div ref={chartRef} style={{ width: '100%', height: '100%' }} />
  </div>
)};

export default PieChart;
