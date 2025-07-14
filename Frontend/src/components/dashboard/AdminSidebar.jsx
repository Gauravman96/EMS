import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaBuilding, FaCalendar,  FaCog, FaMoneyBill, FaTachometerAlt,FaUsers} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className="w-60 min-h-screen bg-[#1e293b] text-white flex flex-col">
     <div className="p-6 border-b border-gray-700">
         <h3 className="text-2xl font-bold text-teal-400">Employee MS</h3>
     </div >
      <div className="flex flex-col gap-2 p-4">
        <NavLink to="/admin-dashboard"   className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? 'bg-teal-500' : 'hover:bg-gray-700'
            }`
          }>
        <FaTachometerAlt />
        <span>Dashboard</span>
      </NavLink>
       <NavLink to="/admin-dashboard" className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? 'bg-teal-500' : 'hover:bg-gray-700'
            }`
          }>
        <FaUsers />
        <span>Employee</span>
      </NavLink>
       <NavLink to="/admin-dashboard"  
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? 'bg-teal-500' : 'hover:bg-gray-700'
            }`
          }>
        <FaBuilding />
        <span>Department</span>
      </NavLink>
       <NavLink to="/admin-dashboard"   className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? 'bg-teal-500' : 'hover:bg-gray-700'
            }`
          }>
        <FaCalendar />
        <span>Leave</span>
      </NavLink>
       <NavLink to="/admin-dashboard"  className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? 'bg-teal-500' : 'hover:bg-gray-700'
            }`
          }>
        <FaMoneyBill />
        <span>Salary</span>
      </NavLink>
       <NavLink to="/admin-dashboard" className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
              isActive ? 'bg-teal-500' : 'hover:bg-gray-700'
            }`
          }>
        <FaCog />
        <span>Setting</span>
      </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar
