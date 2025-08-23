import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { FaBookOpen, FaUsers, FaCog } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";

export default function Dashboard() {
  const [active, setActive] = useState("Overview");

  const menuItems = [
    { name: "Overview", icon: <MdOutlineDashboardCustomize size={20} /> },
    { name: "Students", icon: <FaUsers size={20} /> },
    { name: "Courses", icon: <FaBookOpen size={20} /> },
    { name: "Settings", icon: <FaCog size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-b from-[#050d1a] to-[#0a1629] text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-[#031d48] to-[#0a1629] shadow-lg flex flex-col">
        <div className="p-6 text-2xl font-bold text-indigo-600">
          KTH Dashboard
        </div>
        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full px-4 py-2 text-left rounded-lg transition ${
                active === item.name
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-indigo-100 hover:text-slate-800"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
        <button className="flex items-center px-4 py-3 text-red-600 hover:bg-red-100">
          Logout <FiLogOut size={20} className="ml-3" />
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-y-auto text-slate-900">
        <h1 className="text-3xl font-semibold mb-6 text-slate-200">{active}</h1>

        {/* Dummy Content */}
        {active === "Overview" && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">Total Students</h2>
              <p className="text-3xl font-bold text-indigo-600 mt-2">320</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">Active Courses</h2>
              <p className="text-3xl font-bold text-indigo-600 mt-2">12</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-3xl font-bold text-indigo-600 mt-2">$5,200</p>
            </div>
          </div>
        )}

        {active === "Students" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Student List</h2>
            <ul className="space-y-2">
              <li className="p-3 border rounded-lg hover:bg-gray-50">
                John Doe - Grade 10
              </li>
              <li className="p-3 border rounded-lg hover:bg-gray-50">
                Jane Smith - Grade 9
              </li>
            </ul>
          </div>
        )}

        {active === "Courses" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Courses</h2>
            <ul className="space-y-2">
              <li className="p-3 border rounded-lg hover:bg-gray-50">
                English Grammar
              </li>
              <li className="p-3 border rounded-lg hover:bg-gray-50">
                Creative Writing
              </li>
            </ul>
          </div>
        )}

        {active === "Settings" && (
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Settings</h2>
            <p>Profile settings, change password, etc.</p>
          </div>
        )}
      </main>
    </div>
  );
}
