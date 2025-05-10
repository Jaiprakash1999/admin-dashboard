import { useCallback, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";

const MobileHeader = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const handleNavigation = useCallback((value) => {
    setShowNavigation(value);
  }, []);

  return (
    <div>
      <button
        className="flex w-full relative"
        onClick={() => setShowNavigation((prev) => !prev)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {showNavigation ? (
        <div className="bg-white absolute">
          <Sidebar
            showNavigation={showNavigation}
            handleNavigation={handleNavigation}
          />
        </div>
      ) : null}
    </div>
  );
};

export default MobileHeader;
