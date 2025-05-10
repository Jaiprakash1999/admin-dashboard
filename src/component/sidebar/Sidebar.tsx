import {
  faNoteSticky,
  faTableColumns,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className=" shadow h-[92.5vh]">
      <ul>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `m-3 py-2 px-4 flex items-center  rounded-lg ${
                isActive ? "bg-[#E1EFFE] text-[#4C6AF7]" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faTableColumns} />
            <span className="ms-5"> Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `m-3 py-2 px-4 flex items-center rounded-lg ${
                isActive ? "bg-[#E1EFFE] text-[#4C6AF7]" : ""
              }`
            }
          >
            <FontAwesomeIcon icon={faUsers} />
            <span className="ms-4"> Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink
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
