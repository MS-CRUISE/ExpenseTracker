import { useFinance } from "../Components/Contextapi";

function TrackSavings() {
  const { savingsList } = useFinance();

  // Handle case when savingsList is undefined or empty
  if (!Array.isArray(savingsList) || savingsList.length === 0) {
    return (
      <div className="bg-white shadow-md p-4 mt-[20px] rounded-lg">
        <h2 className="text-lg font-bold mb-4 fixed">Track Your Savings</h2>
        <p className="text-gray-600 mt-10">No savings data available.</p>
      </div>
    );
  }

  const savingsByGoal = savingsList.reduce((acc, curr) => {
    const goal = curr.goalname;
    const amount = parseFloat(curr.amount);
    const target = parseFloat(curr.targetamount);

    if (!acc[goal]) {
      acc[goal] = { amount: 0, targetamount: target };
    }
    acc[goal].amount += amount;
    return acc;
  }, {});

  return (
    <div className="bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-4 mt-10">Track Your Savings</h2>
      {Object.entries(savingsByGoal).map(([goal, { amount, targetamount }]) => (
        <div key={goal} className="mb-4">
          <div className="flex justify-between text-sm font-medium text-gray-700">
            <span className="capitalize">{goal}</span>
            <span>{`₹${amount.toLocaleString("en-IN")} / ₹${targetamount.toLocaleString("en-IN")}`}</span>
          </div>
          <div className="w-full bg-gray-300 h-3 rounded-lg overflow-hidden mt-1">
            <div
              className="h-full bg-blue-600 transition-all duration-500"
              style={{
                width: `${Math.min(100, (amount / targetamount) * 100)}%`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TrackSavings;
