import Cards from "../Components/cards";
import { financialData } from "../Components/data";

function Dashboard(){
return <>
 
  <div className="">
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


</div>


</>
}
export default Dashboard;