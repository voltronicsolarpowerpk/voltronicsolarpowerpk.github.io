import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NotificationContext } from "./NotificationContext";

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const showNotification = useCallback((message, isSuccess = true) => {
    const id = Date.now() + Math.random();

    // Add new notification to queue
    setNotifications((prev) => [...prev, { id, message, isSuccess }]);

    // Auto-remove individual notification after 3 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((item) => item.id !== id));
    }, 3000);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}

      {/* Toast Stack Container */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          right: "10px",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          pointerEvents: "none",
        }}
      >
        <AnimatePresence>
          {notifications.map((toast) => (
            <NotificationItem
              key={toast.id}
              toast={toast}
              onClose={() => removeNotification(toast.id)}
            />
          ))}
        </AnimatePresence>
      </div>
    </NotificationContext.Provider>
  );
};

// Animated Toast Item Component
const NotificationItem = ({ toast, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{
        pointerEvents: "auto",
        minWidth: "250px",
        maxWidth: "350px",
        padding: "12px 16px",
        borderRadius: "8px",
        color: "#fff",
        backgroundColor: toast.isSuccess ? "#2e7d32" : "#d32f2f",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
        fontSize: "14px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <span>{toast.message}</span>
      <button
        onClick={onClose}
        style={{
          background: "none",
          border: "none",
          color: "rgba(255, 255, 255, 0.7)",
          cursor: "pointer",
          fontSize: "16px",
          lineHeight: 1,
          padding: 0,
        }}
        aria-label="Close notification"
      >
        &times;
      </button>
    </motion.div>
  );
};
