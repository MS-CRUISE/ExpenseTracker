import React, { useState } from "react";
import { X } from "lucide-react";
import { useFinance } from "../Components/Contextapi";

function Savings() {
  const { savingsList, setSavingsList } = useFinance();

  const [isModalOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    date: '',
    selectedGoalname: '',
    goalname: '',
    amount: '',
    targetamount: '',
  });

  const handleInputChange = (identifier, value) => {
    const validAmountPattern = /^(\d+(\.\d{0,2})?)k?$/i;

    if ((identifier === 'amount' || identifier === 'targetamount') && value !== '') {
      if (!validAmountPattern.test(value)) return;
    }

function isMatchingGoal(goal) {
  return goal.goalname === value;
}

if (identifier === 'selectedGoalname') {
  const updatedForm = { ...formData, selectedGoalname: value };
  const existingGoal = savingsList.find(isMatchingGoal);

  if (value !== "__custom" && existingGoal) {
    updatedForm.goalname = value;
    updatedForm.targetamount = existingGoal.targetamount.toString();
  } else {
    updatedForm.goalname = '';
    updatedForm.targetamount = '';
  }

  setFormData(updatedForm);
  return;
}

    setFormData((prev) => ({
      ...prev,
      [identifier]: value,
    }));
  };

  const parseAmountInput = (value) => {
    const trimmed = value.toString().trim().toLowerCase();
    if (trimmed.endsWith('k')) {
      const numPart = parseFloat(trimmed.slice(0, -1));
      return isNaN(numPart) ? 0 : numPart * 1000;
    }

    const parsed = parseFloat(trimmed.replace(/,/g, ''));
    return isNaN(parsed) ? 0 : parsed;
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      date: '',
      selectedGoalname: '',
      goalname: '',
      amount: '',
      targetamount: '',
    });
  };

  const handleSubmit = () => {
    const parsedAmount = parseAmountInput(formData.amount);
    const parsedTargetAmount = parseAmountInput(formData.targetamount);

    const finalGoalname =
      formData.selectedGoalname === '__custom'
        ? formData.goalname.trim()
        : formData.selectedGoalname;

    if (!formData.date || !finalGoalname || !formData.amount || !formData.targetamount) {
      alert('Please fill all required fields');
      return;
    }

    const newTransaction = {
      ...formData,
      goalname: finalGoalname,
      amount: parsedAmount,
      targetamount: parsedTargetAmount,
      recordedDate: new Date().toLocaleDateString('en-GB'),
      id: Date.now(),
    };

    setSavingsList([...savingsList, newTransaction]);
    closeModal();
  };

  return (
    <>
      <div className="min-h-screen bg-slate-200 p-6">
        <h2 className="text-3xl font-bold mb-6 ml-5 mt-5">Savings</h2>

        {savingsList.length === 0 ? (
          <div className="text-black p-6">
            <h1 className="text-xl">No transactions yet. Click "Add Transaction" to get started.</h1>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-800 table-fixed mt-2">
              <colgroup>
                <col className="w-[110px]" />
                <col className="w-[200px]" />
                <col className="w-[120px]" />
                <col className="w-[200px]" />
                <col className="w-[150px]" />
              </colgroup>
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-3">Date</th>
                  <th className="pb-3 text-left pl-2">Goal Name</th>
                  <th className="pb-3 text-left">Amount</th>
                  <th className="pb-3 text-left pl-2">Target Amount</th>
                  <th className="pb-3 text-left">Recorded Date</th>
                </tr>
              </thead>
              <tbody>
                {savingsList.map((t) => (
                  <tr key={t.id} className="border-b">
                    <td className="py-2 break-words whitespace-normal">{t.date}</td>
                    <td className="py-2 pl-2 break-words whitespace-normal">{t.goalname}</td>
                    <td className="py-2 break-words whitespace-normal">{t.amount}</td>
                    <td className="py-2 pl-2 break-words whitespace-normal">{t.targetamount}</td>
                    <td className="py-2 break-words whitespace-normal">{t.recordedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="flex justify-center mt-12 mr-12">
          <button
            onClick={() => setIsOpen(true)}
            className="text-xl bg-blue-500 text-white rounded-sm h-12 w-[200px] hover:bg-blue-600 transition"
          >
            Add Transactions
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-400 rounded-lg p-6 w-full max-w-md mx-4">
              {/* Modal Header */}
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-black">Add Savings</h3>
                <button
                  onClick={closeModal}
                  className="text-black hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <div className="space-y-4 mb-5">
                {/* Date */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={(event) =>
                      handleInputChange('date', event.target.value)
                    }
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                {/* Goal Name Dropdown & Custom */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Goal Name *
                  </label>
                  <select
                    name="selectedGoalname"
                    value={formData.selectedGoalname}
                    onChange={(event) =>
                      handleInputChange('selectedGoalname', event.target.value)
                    }
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    required
                  >
                    {/* for adding values in Dropdown */}
                    <option value="">Select or enter a goal</option>
                    {[...new Set(savingsList.map((t) => t.goalname))].map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                    <option value="__custom">Other (Enter New Goal)</option>
                  </select>
{/* for custom inputs */}
                  {formData.selectedGoalname === '__custom' && (
                    <input
                      type="text"
                      placeholder="Enter custom goal name"
                      className="mt-6 w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white"
                      value={formData.goalname}
                      onChange={(e) => handleInputChange('goalname', e.target.value)}
                      required
                    />
                  )}
                </div>

                {/* Amount */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Amount *
                  </label>
                  <input
                    type="text"
                    name="amount"
                    value={formData.amount}
                    onChange={(event) =>
                      handleInputChange('amount', event.target.value)
                    }
                    placeholder="0"
                    min="0"
                    step="0.01"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>

                {/* Target Amount */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Target Amount *
                  </label>
                  <input
                    type="text"
                    name="targetamount"
                    value={formData.targetamount}
                    disabled={formData.selectedGoalname !== "__custom"}
                    onChange={(event) =>
                      handleInputChange('targetamount', event.target.value)
                    }
                    placeholder="0"
                    min="0"
                    step="0.01"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
                >
                  Add Transaction
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Savings;
