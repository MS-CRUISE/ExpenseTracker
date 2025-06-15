import React from 'react'
import PieChart from './PieChart'
import HorizontalBar from './HorizontalBar'

const RSidebar = () => {
  return (
    <div>

  <nav className="bg-white shadow-md border-r border-gray-200 h-screen fixed top-0 right-0 w-[420px] py-6 px-1 overflow-hidden z-10">
     <div className='flex-1 '>
        <div
    className="mb-2 p-1 rounded-lg shadow-sm bg-slate-50 "
    style={{ height: '420px' }}
  ><PieChart/>
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
