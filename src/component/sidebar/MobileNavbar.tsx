import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const MobileHeader = () => {
  // State to control whether the sidebar (navigation) is shown
  const [showNavigation, setShowNavigation] = useState(false);

  // Toggles the sidebar visibility; memoized to avoid unnecessary re-renders
  const handleNavigation = useCallback((value: boolean = false) => {
    setShowNavigation(value);
  }, []);

  return (
    <div>
      {/* Toggle button for opening/closing the sidebar */}
      <button
        className="flex w-full relative"
        onClick={() => setShowNavigation((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>

      {/* Sidebar is shown conditionally based on `showNavigation` */}
      {showNavigation && (
        <div className="bg-white absolute">
          <Sidebar
            showNavigation={showNavigation}
            handleNavigation={handleNavigation}
          />
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
// This component is a mobile-friendly navigation bar that toggles the visibility of a sidebar.
