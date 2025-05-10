import {
  faNoteSticky,
  faTableColumns,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  showNavigation?: boolean;
  handleNavigation?: (value?: boolean) => void;
}

// Sidebar component that shows navigation links to different app sections
// It can be toggled open/close and is responsive for mobile view

const Sidebar = ({
  showNavigation = false,
  handleNavigation = () => {},
}: SidebarProps) => {
  return (
    // Conditional styling: when sidebar is open in mobile, add padding to bottom
    <nav className={`pt-3 shadow ${showNavigation ? "pb-4" : " h-[92.5vh]"}`}>
      <ul>
        {/* Dashboard link */}
        <li>
          <NavLink
            onClick={() => handleNavigation(false)} // Close sidebar on navigation
            to="/dashboard"
            className={({ isActive }) =>
              `m-3 py-2 px-4 flex items-center rounded-lg ${
                isActive ? "bg-[#E1EFFE] text-[#4C6AF7]" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faTableColumns} />
            <span className="ms-5">Dashboard</span>
          </NavLink>
        </li>

        {/* Users link */}
        <li>
          <NavLink
            onClick={() => handleNavigation(false)}
            to="/users"
            className={({ isActive }) =>
              `m-3 py-2 px-4 flex items-center rounded-lg ${
                isActive ? "bg-[#E1EFFE] text-[#4C6AF7]" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faUsers} />
            <span className="ms-4">Users</span>
          </NavLink>
        </li>

        {/* Reports link */}
        <li>
          <NavLink
            onClick={() => handleNavigation(false)}
            to="/reports"
            className={({ isActive }) =>
              `m-3 py-2 px-4 flex items-center text-left rounded-lg ${
                isActive ? "bg-[#E1EFFE] text-[#4C6AF7]" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faNoteSticky} />
            <span className="ms-5">Reports</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
