import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between items-center text-3xl p-7 bg-gray-400 text-white">
      
      {/* Left side (Logo / App name) */}
      <div className="font-bold text-white">
        empApp
      </div>

      {/* Right side (Nav links) */}
      <div className="flex gap-6">
        <NavLink 
          to="" 
          className={({ isActive }) => 
            isActive ? "text-black bg-white rounded-2xl px-3 py-1" : ""
          }
        >
          Home
        </NavLink>

        <NavLink 
          to="create-emp" 
          className={({ isActive }) => 
            isActive ? "text-black bg-white rounded-2xl px-3 py-1" : ""
          }
        >
          CreateEmp
        </NavLink>

        <NavLink 
          to="list" 
          className={({ isActive }) => 
            isActive ? "text-black bg-white rounded-2xl px-3 py-1" : ""
          }
        >
          Employees
        </NavLink>
      </div>

    </nav>
  );
}

export default Header;
