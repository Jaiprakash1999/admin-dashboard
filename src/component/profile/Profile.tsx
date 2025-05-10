import { useCallback, useEffect, useRef } from "react";

interface ProfileProps {
  openProfile?: boolean;
  setOpenProfile?: (value: boolean) => void;
}

// Profile dropdown for user info and logout
const Profile = ({
  openProfile = false,
  setOpenProfile = () => {},
}: ProfileProps) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  // Handles logout and closes the profile dropdown
  const onLogout = () => {
    setOpenProfile(false);
  };

  useEffect(() => {
    // Auto-close profile dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setOpenProfile(false);
        }, 50); // slight delay to allow other click events to finish
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProfile, setOpenProfile]);
  // useEffect to handle click events outside the dropdown
  // to close it when the user clicks outside of it
  // This is done to improve user experience and prevent the dropdown from staying open unintentionally

  return (
    openProfile && (
      <div
        ref={dropDownRef}
        style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
        className="text-[#374151] bg-white text-sm right-5 top-10 rounded-md absolute"
      >
        {/* User info */}
        <div className="py-2 px-3 flex flex-col">
          <span className="text-[#1F2A37] font-semibold">Jaiprakash</span>
          <span className="cursor-pointer font-normal">Admin</span>
        </div>

        {/* Additional details */}
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

        {/* Logout */}
        <div className="border-t py-2 hover:underline text-center text-[#F05252] cursor-pointer px-3">
          <button onClick={onLogout}>Log Out</button>
        </div>
      </div>
    )
  );
};

export default Profile;
