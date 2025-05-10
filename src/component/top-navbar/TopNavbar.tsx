import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Profile from "../profile/Profile";
import Notifications from "../ntofications/Notifications";
import MobileHeader from "../sidebar/MobileNavbar";

const TopNavbar = () => {
  // State for toggling profile dropdown
  const [openProfile, setOpenProfile] = useState(false);

  // State for toggling notifications panel
  const [notification, setNotification] = useState(false);

  return (
    <div className="fixed z-50 border-b w-full bg-white p-4">
      <div className="flex justify-between gap-6 mx-4 items-center">
        {/* Mobile menu toggle icon (hidden on larger screens) */}
        <div className="sm:hidden">
          <MobileHeader />
        </div>

        {/* Title */}
        <div>Admin Dashboard</div>

        {/* Right side icons */}
        <div className="flex relative gap-6 items-center">
          {/* Notification icon with badge */}
          <div className="relative">
            <button
              className="flex justify-center"
              onClick={() => setNotification((prev) => !prev)}
            >
              <FontAwesomeIcon icon={faBell} />
              <span className="absolute bottom-2 left-2 bg-red-500 text-white rounded-full px-1 text-xs">
                5
              </span>
            </button>
          </div>

          {/* Profile icon */}
          <button
            className="cursor-pointer"
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>

      {/* Conditional dropdowns */}
      {openProfile && (
        <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} />
      )}
      {notification && (
        <Notifications
          notification={notification}
          setNotification={setNotification}
        />
      )}
    </div>
  );
};

export default TopNavbar;
