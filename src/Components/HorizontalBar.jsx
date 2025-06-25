import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { useFinance } from './Contextapi'; 


const HorizontalBar = () => {
    
  const chartRef = useRef(null);
  const { totalIncome, totalExpense, totalSavings } = useFinance();

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

  const option = {
     title: {
  text: 'Expense Details',
  left: '4px',
  top: 10,
  bottom:'1px',
  textStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
},
  tooltip: {
    trigger: 'item',
    formatter: '{a}: {c}',
  },
  legend: {
    bottom: "30px",
    left: 'center',
    textStyle: {
      fontSize: 12,
      color: '#000', // or '#fff' if you're on a dark background
    },
  },
  xAxis: {
    type: 'value',
    show: false,
  },
  yAxis: {
    type: 'category',
    data: [''],
    show: false,
  },
  series: [
    {
      name: 'Income',
      type: 'bar',
      stack: 'total',
      data:[{
        value:totalIncome
      }],
      itemStyle: {
        color: '#388E3C', // Dark green
      },
      barWidth: 30,
    },
    {
      name: 'Expense',
      type: 'bar',
      stack: 'total',
   data:[{
        value:totalExpense
      }] , 
      itemStyle: {
        color: '#C62828', // Dark red
      },
    },
    {
      name: 'Savings',
      type: 'bar',
      stack: 'total',
   data:[{
        value:totalSavings
      }],
    itemStyle: {
        color: '#1565C0', // Dark blue
      },
    },
  ],
};


    chart.setOption(option);
    window.addEventListener('resize', chart.resize);
    return () => {
      chart.dispose();
      window.removeEventListener('resize', chart.resize);
    };
  }, [totalExpense,totalIncome,totalSavings]);

return (
  <div className="p-1 h-full mb-0.5 overflow-hidden">
    <div ref={chartRef} style={{ width: '100%', height: '100%' , overflow:'hidden'}} />
  </div>
)};

export default HorizontalBar;
