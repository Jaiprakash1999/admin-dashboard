import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Profile from "../profile/Profile";
import Notifications from "../ntofications/Notifications";

const TopNavbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  return (
    <div className="fixed z-50 border-b w-full bg-white p-4">
      <div className="flex justify-between gap-6  mx-4 items-center">
        <div>Admin Dashboard</div>
        <div className="flex relative gap-6 items-center">
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
          <button
            className=" cursor-pointer"
            onClick={() => setOpenProfile((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faUser} />
          </button>
        </div>
      </div>
      {openProfile ? (
        <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} />
      ) : null}
      {notification ? (
        <Notifications
          notification={notification}
          setNotification={setNotification}
        />
      ) : null}
    </div>
  );
};

export default TopNavbar;
