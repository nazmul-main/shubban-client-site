'use client';

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { removeNotification } from '../store/slices/uiSlice';
import { FiCheck, FiX, FiAlertCircle, FiInfo } from 'react-icons/fi';

export default function NotificationSystem() {
  const dispatch = useAppDispatch();
  const { notifications } = useAppSelector((state) => state.ui);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'success':
        return <FiCheck className="text-green-600" />;
      case 'error':
        return <FiX className="text-red-600" />;
      case 'warning':
        return <FiAlertCircle className="text-yellow-600" />;
      default:
        return <FiInfo className="text-blue-600" />;
    }
  };

  const getNotificationStyles = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  useEffect(() => {
    notifications.forEach((notification) => {
      if (notification.duration) {
        const timer = setTimeout(() => {
          dispatch(removeNotification(notification.id));
        }, notification.duration);

        return () => clearTimeout(timer);
      }
    });
  }, [notifications, dispatch]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-center space-x-3 p-4 rounded-lg border shadow-lg max-w-sm transform transition-all duration-300 ${getNotificationStyles(notification.type)}`}
        >
          <div className="flex-shrink-0">
            {getNotificationIcon(notification.type)}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{notification.message}</p>
          </div>
          <button
            onClick={() => dispatch(removeNotification(notification.id))}
            className="flex-shrink-0 p-1 hover:bg-black/10 rounded transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
} 