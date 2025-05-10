import React, { useEffect, useRef } from "react";

interface NotificationsProps {
  notification?: boolean;
  setNotification?: (value: boolean) => void;
}

// Simple notifications panel with example content
const Notifications = ({
  notification = false,
  setNotification = () => {},
}: NotificationsProps) => {
  const notificationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Auto-close notification dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        setTimeout(() => {
          setNotification(false);
        }, 50); // slight delay to allow other click events to finish
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [notification, setNotification]);

  return (
    <div
      ref={notificationRef}
      style={{ boxShadow: "0 0 8px rgb(44 62 80 / 20%)" }}
      className="text-[#374151] bg-white text-sm right-5 top-10 rounded-md absolute"
    >
      {/* Header */}
      <div className="bg-[#F9FAFB] text-[#111928] py-2 flex justify-center">
        Notifications
      </div>

      {/* Sample message */}
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
