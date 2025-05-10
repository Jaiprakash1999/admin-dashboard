import React, { useEffect, useRef } from "react";
// const NOTIFICATION_LIST = [{}];

const Notifications = ({ notification, setNotification }) => {
  const notificationRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target)
    ) {
      setTimeout(() => {
        setNotification(false);
      }, 50);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
    // eslint-disable-next-line
  }, [notification]);

  return (
    <div
      ref={notificationRef}
      style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
      className="text-[#374151] bg-white text-sm right-5 top-10 rounded-md absolute"
    >
      <div className="bg-[#F9FAFB] text-[#111928] py-2 flex justify-center">
        Notifications
      </div>
      <div className="px-4 py-2">
        <div className="text-[#6B7280] text-wrap text-sm">
          JP sent you a message
        </div>
        <div className="text-[#1A56DB] text-sm">a few moments ago</div>
      </div>
    </div>
  );
};

export default Notifications;
