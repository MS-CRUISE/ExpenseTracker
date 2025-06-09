import Cards from "../Components/cards";
import { financialData } from "../Components/data";
import AreaChart from "../Components/AreaChart";

function Dashboard(){
return <>
 
  <h2 className="text-3xl font-bold mb-6 ml-5 mt-5">DASHBOARD</h2>


  <div className="flex flex-wrap gap-5 ml-5 mr-5">

    {financialData.map((item, index) => (
  
    <Cards key={index} 
    title={item.title}
    type={item.type}
    amount={item.amount}
>
</Cards>
))}
</div>

 <div className="flex gap-5 mt-5 ml-5 w-[64%]">
        <div className="flex-1 bg-white rounded-lg shadow-md border border-gray-200 p-2">
           <h2 className="text-lg font-semibold text-gray-800 mb-4">Money flow</h2>
          <div className="h-100 w-[full] rounded-lg flex items-center justify-center">
            <AreaChart />
</div>
        </div>
        </div>


</>
}
export default Dashboard;