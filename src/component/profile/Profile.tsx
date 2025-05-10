import React, { useCallback, useEffect, useRef } from "react";

const Profile = ({ openProfile = false, setOpenProfile = () => {} }) => {
  const dropDownRef = useRef(null);

  const onLogout = () => {
    setOpenProfile(false);
  };

  const handleClickOutside = useCallback(
    (event) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target) &&
        event.target.tagName !== "IMG"
      ) {
        setOpenProfile(false);
      }
    },
    [setOpenProfile]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProfile, handleClickOutside]);

  return (
    openProfile && (
      <div
        ref={dropDownRef}
        style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
        className="text-[#374151] bg-white text-sm right-5 top-10 rounded-md absolute"
      >
        <div className="py-2 px-3 flex flex-col">
          <span className="text-[#1F2A37] font-semibold">Jaiprakash</span>
          <span className="cursor-pointer font-normal">Admin</span>
        </div>

        <div className="grid px-3 mb-2 grid-cols-2">
          <div className="text-secondary">Username :</div>
          <div>jaiprakash12345</div>
        </div>
        <div className="grid px-3 mb-2 grid-cols-2">
          <div className="text-secondary">Mobile No. :</div>
          <div>9876543210</div>
        </div>
        <div className="grid px-3 mb-2 grid-cols-2">
          <div className="text-secondary">Email ID :</div>
          <div>jai@gmail.com</div>
        </div>

        <div className="border-t py-2 hover:underline text-center text-[#F05252] cursor-pointer px-3">
          <button onClick={() => onLogout()}> Log Out</button>
        </div>
      </div>
    )
  );
};

export default Profile;
