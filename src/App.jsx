import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import AppSidebar from './Components/Sidebar'
import RSidebar from './Components/RSidebar'
function App() {

  return (
       <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 pl-[251px] overflow-y-auto">
         <Dashboard></Dashboard>
<RSidebar></RSidebar>
        </main>

    </div>
  )
}

export default App
