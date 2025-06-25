import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import AppSidebar from './Components/Sidebar'
import RSidebar from './Components/RSidebar'
import Income from './Pages/Income'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Expenses from './Pages/Expenses'
import Savings from './Pages/Savings'
function App() {

  return (
       <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 pl-[300px] overflow-y-auto">
          <Routes>
          <Route path="/" element={<Dashboard />} />  
          <Route path="/income" element={<Income/>} /> 
          <Route path="/Expenses" element={<Expenses/>} />  
          <Route path="/savings" element={<Savings/>} />  

 

          </Routes>

        </main>

    </div>

  )
}

export default App
