import { createContext, useContext, useState } from 'react';

const FinanceContext = createContext();

export const ContextProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);
  const [savingsList, setSavingsList] = useState([]);

  // Derived totals
  const totalIncome = incomeList.reduce((acc, item) => acc + Number(item.amount), 0);
  const totalExpense = expenseList.reduce((acc, item) => acc + Number(item.amount), 0);
  const totalSavings = savingsList.reduce((acc, item) => acc + Number(item.amount), 0);
  const netBalance = totalIncome - totalExpense;

  return (
    <FinanceContext.Provider value={{
      incomeList, setIncomeList,
      expenseList, setExpenseList,
      savingsList, setSavingsList,
      totalIncome, totalExpense, totalSavings, netBalance
    }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
