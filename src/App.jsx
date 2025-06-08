import { useState } from 'react'
import Dashboard from './Pages/Dashboard'
import AppSidebar from './Components/Sidebar'
function App() {

  return (
       <div className="flex h-screen">
        <AppSidebar />
        <main className="flex-1 pl-[251px] overflow-y-auto">
         <Dashboard></Dashboard>

        </main>

    </div>
  )
}

export default App
