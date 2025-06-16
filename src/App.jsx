import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import AppSidebar from './Components/Sidebar'
import RSidebar from './Components/RSidebar'
import Income from './Pages/Income'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {

  return (
       <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 pl-[251px] overflow-y-auto">
          <Routes>
          <Route path="/" element={<Dashboard />} />  
          <Route path="/income" element={<Income/>} />  

          </Routes>
<RSidebar></RSidebar>
        </main>

    </div>

  )
}

export default App
