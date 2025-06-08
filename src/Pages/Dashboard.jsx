import Cards from "../Components/cards";
import { financialData } from "../Components/data";

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
        <div className="flex-1 bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Charts & Analytics</h2>
          <div className="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart content goes here</p>
          </div>
        </div>
        </div>
<div className="flex gap-5 mt-5 ml-5 w-[64%]">         
  <div className="flex-1 bg-white rounded-lg shadow-md border border-gray-200 p-6">           
  </div>
  </div>

</>
}
export default Dashboard;