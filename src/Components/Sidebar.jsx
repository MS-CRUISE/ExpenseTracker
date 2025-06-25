import { Link } from "react-router-dom";

function AppSidebar(){
  return <>
    <nav className="bg-white shadow-md border-r border-gray-200 h-screen fixed top-0 left-0 w-[300px] py-6 px-1 overflow-auto z-10">
      <h1 className="px-5 py-5 text-[30px]">FLOW TRACK</h1>
      <hr className="my-6 border-gray-200" />
      
      <ul className="mt-6 space-y-5">
        {/* Dashboard */}
        <li>
          <Link to="/" className="text-slate-800 font-medium hover:text-slate-900 text-[25px] flex items-center hover:bg-gray-100 rounded px-4 py-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] mr-3" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7"/>
              <rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/>
              <rect x="3" y="14" width="7" height="7"/>
            </svg>
            <span>Dashboard</span>
          </Link>
        </li>
        
        {/* Income */}
        <li>
          <Link to="/income" className="text-slate-800 font-medium hover:text-slate-900 text-[25px] flex items-center hover:bg-gray-100 rounded px-4 py-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] mr-3" viewBox="0 0 24 24">
              <line x1="12" y1="1" x2="12" y2="23"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              <polyline points="7,1 12,1 12,1"/>
              <polyline points="7,23 12,23 12,23"/>
            </svg>
            <span>Income</span>
          </Link>
        </li>
        
        {/* Expenses */}
        <li>
          <Link to="/expenses" className="text-slate-800 font-medium hover:text-slate-900 text-[25px] flex items-center hover:bg-gray-100 rounded px-4 py-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] mr-3" viewBox="0 0 24 24">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
              <path d="M9 14l2 2 4-4"/>
            </svg>
            <span>Expenses</span>
          </Link>
        </li>
        
        {/* Savings */}
        <li>
          <Link to="/savings" className="text-slate-800 font-medium hover:text-slate-900 text-[25px] flex items-center hover:bg-gray-100 rounded px-4 py-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" className="w-[20px] h-[20px] mr-3" viewBox="0 0 24 24">
              <path d="M19 7c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v3H3v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10h-2V7z"/>
              <path d="M7 7V5c0-1.1.9-2 2-2h6c0 1.1-.9 2-2 2v2"/>
              <line x1="12" y1="11" x2="12" y2="17"/>
              <line x1="9" y1="14" x2="15" y2="14"/>
            </svg>
            <span>Savings</span>
          </Link>
        </li>
        
     
      </ul>
      
      <hr className="mt-7 border-gray-200" />
    </nav>
  </>
}

export default AppSidebar;