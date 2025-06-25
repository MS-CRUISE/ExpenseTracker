import React, { useState } from "react";
import {X} from "lucide-react"
import { categories } from "../data/methods";
import { paymentMethods } from "../data/methods";
import { useFinance } from "../Components/Contextapi";

function Expenses() {
  const {expenseList,setExpenseList}=useFinance();
const[isModalOpen,setIsOpen]=useState(false);

const [formData, setFormData] = useState({
    date: '',
    item: '',
    category: '',
    amount: '',
    paymentMethod: '',
  });
 const closeModal = () => {
    setIsOpen(false);
    setFormData({
      date: '',
      item: '',
      category: '',
      amount: '',
      paymentMethod: '',
    });
  };

  function handleInputChange(identifier,value){
    const validAmountPattern = /^(\d+(\.\d{0,2})?)k?$/i;

//for input amount as K
  if ((identifier === 'amount') && value !== '') {
    if (!validAmountPattern.test(value)) {
      return; 
    }
  }
setFormData({...formData,
    [identifier]:[value],
})
}
//Amount for K parsing
function parseAmountInput(value) {
  const trimmed = value.toString().trim().toLowerCase();

  if (trimmed.endsWith('k')) {
    const numPart = parseFloat(trimmed.slice(0, -1));
    return isNaN(numPart) ? 0 : numPart * 1000;
  }

  const parsed = parseFloat(trimmed.replace(/,/g, ''));
  return isNaN(parsed) ? 0 : parsed;
}

  const handleSubmit = () => {
   const parsedAmount = parseAmountInput(formData.amount);
    // if (
    //   !formData.date ||
    //   !formData.item ||
    //   !formData.category ||
    //   !formData.amount
    // ) {
    //   alert('Please fill all required fields');
    //   return;
    // }

    const newTransaction = {
      ...formData,
      amount:parsedAmount,
      recordedDate:new Date().toLocaleDateString('en-GB'),
      id: Date.now(),
    };

    setExpenseList([...expenseList, newTransaction]);

    // Reset form
    setFormData({
      date: '',
      item: '',
      category: '',
      amount: '',
      paymentMethod: '',
    });

    setIsOpen(false);
  };




  return (
   <>
  <div className="min-h-screen bg-slate-200 p-6">
    <h2 className="text-3xl font-bold mb-6 ml-5 mt-5">Expenses</h2>

    {expenseList.length === 0 ? (
      <div className="text-black p-6">
        <h1 className="text-xl">No transactions yet. Click "Add Transaction" to get started.</h1>
      </div>
    ) : (
          <div className="overflow-x-auto">
  <table className="w-full text-left text-slate-800 table-fixed mt-2">
     <colgroup>
      <col className="w-[110px]" />  {/* Transaction Date */}
      <col className="w-[250px]" />  {/* Item */}
      <col className="w-[120px]" />  {/* Category */}
      <col className="w-[110px]" />  {/* Amount */}
      <col className="w-[140px]" />  {/* Payment Method */}
      <col className="w-[100px]" />  {/* Recorded Date */}
    </colgroup>
    <thead>
      <tr className="border-b border-gray-700">
        <th className="pb-3 ">Transaction Date</th>
        <th className="pb-3 mr-4 text-center">Item</th>
        <th className="pb-3 pl-5">Category</th>
        <th className="pb-3 pl-1">Amount</th>
        <th className="pb-3 px-1 ">Payment Method</th>
        <th className="pb-3 px-2 ">Recorded Date</th>
      </tr>
    </thead>
    <tbody>
      {expenseList.map((t) => (
        <tr key={t.id} className="border-b">
          <td className="py-2  break-words whitespace-normal">{t.date}</td>
          <td className="py-2  break-words whitespace-normal">{t.item}</td>
          <td className="py-2 pl-4 break-words whitespace-normal">{t.category}</td>
          <td className="py-2  pl-2 break-words whitespace-normal">{t.amount}</td>
          <td className="py-2  pl-4 break-words whitespace-normal">{t.paymentMethod}</td>
          <td className="py-2 pl-4 break-words whitespace-normal">{t.recordedDate}</td>
        </tr>
      ))}
    </tbody>
 
            </table>
          </div>
        )}
       
     <div className="flex justify-center mt-12 mr-12">
  <button onClick={()=> setIsOpen(!isModalOpen)} className="text-xl  bg-blue-500 text-white rounded-sm h-12 w-[200px] hover:bg-blue-600 transition">
   Add Transactions
  </button>
</div>
{isModalOpen && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-400 rounded-lg p-6 w-full max-w-md mx-4">
{/* Modal Header Div */}
            <div className="justify-between items-center mb-6">
              <div className="flex space-x-[190px]">
              <h3 className="text-lg font-semibold text-black">Add New Transaction</h3>
              <button
                onClick={closeModal}
                className="text-black hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              </div>
{/* form components */}
                         <div className="space-y-4 mt-5 mb-5">
         
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Transaction Date *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={(event)=>handleInputChange('date',event.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Item */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Item *
                </label>
                <input
                  type="text"
                  name="item"
                  value={formData.item}
                  onChange={(event)=>handleInputChange('item',event.target.value)}
                  placeholder="Enter item name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={(event)=>handleInputChange('category',event.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
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
                  onChange={(event)=>handleInputChange('amount',event.target.value)}
                  placeholder="0"
                  min="0"
                  step="0.01"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Payment Method
                </label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={(event)=>handleInputChange('paymentMethod',event.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select payment method</option>
                  {paymentMethods.map((method) => (
                    <option key={method} value={method}>
                      {method}
                    </option>
                  ))}
                </select>
              </div>

              </div>
             
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
            </div>
)}


  </div>
  
</>


  );
}

export default Expenses;
