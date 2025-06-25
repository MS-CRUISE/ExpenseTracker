import Cards from "../Components/cards";
import RSidebar from "../Components/RSidebar";
import { useFinance } from "../Components/Contextapi";
import PieChart from "../Components/PieChart";
import HorizontalBar from "../Components/HorizontalBar";
import TrackSavings from "./TrackSavings";

function Dashboard() {
  const { totalIncome, totalExpense, totalSavings } = useFinance();

  const financialData = [
    { title: "Income", amount: totalIncome, type: "income" },
    { title: "Expense", amount: totalExpense, type: "expense" },
    { title: "Savings", amount: totalSavings, type: "savings" },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 ml-5 mt-5">DASHBOARD</h2>

      <div className="flex flex-wrap gap-5 ml-5 mr-5">
        {financialData.map((item, index) => (
          <Cards
            key={index}
            title={item.title}
            type={item.type}
            amount={item.amount}
          />
        ))}
      </div>

      <div className="flex gap-5 mt-5 ml-5 mr-[400px]">
        <div className="w-1/2 bg-white rounded-lg shadow-md border border-gray-200 p-2">
          <div className="h-[30rem]">
            <PieChart />
          </div>
        </div>

        <div className="w-1/2 bg-white rounded-lg shadow-md border border-gray-200 p-2">
          <div className="h-[26rem]">
<TrackSavings></TrackSavings>
          </div>
        </div>
      </div>

      <RSidebar />
    </>
  );
}

export default Dashboard;
