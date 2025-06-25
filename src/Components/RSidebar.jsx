import React from 'react'
import HorizontalBar from './HorizontalBar'
import InvestmentRadarChart from './Investment'

const RSidebar = () => {
  return (
    <div>

  <nav className="bg-white shadow-md border-r border-gray-200 h-screen fixed top-0 right-0 w-[400px] py-6 px-1 overflow-hidden z-10">
     <div className='flex-1 '>
        <div
    className="mb-2 p-1 rounded-lg shadow-sm bg-white "
    style={{ height: '420px' }}
>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Track your Investments</h2>
<InvestmentRadarChart/>
     </div>
      <div
    className="mb-4 p-3 rounded-lg shadow-sm bg-gray-50"
        style={{ height: '320px' }}

  ><HorizontalBar/>
     </div>
     </div>
     </nav>
  </div>


  )
}

export default RSidebar
