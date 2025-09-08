'use client';

import { useState, useEffect } from 'react';
import { FiX, FiAlertCircle, FiCheck, FiLogOut } from 'react-icons/fi';

const ConfirmationToast = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title = "নিশ্চিত করুন", 
  message = "আপনি কি এই কাজটি করতে চান?", 
  confirmText = "হ্যাঁ", 
  cancelText = "না",
  type = "warning",
  icon: Icon = FiLogOut
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm();
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'danger':
        return {
          container: 'bg-red-50 border-red-200 shadow-red-100',
          icon: 'text-red-500',
          title: 'text-red-800',
          message: 'text-red-700',
          confirmBtn: 'bg-red-500 hover:bg-red-600 text-white',
          cancelBtn: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border-yellow-200 shadow-yellow-100',
          icon: 'text-yellow-500',
          title: 'text-yellow-800',
          message: 'text-yellow-700',
          confirmBtn: 'bg-red-500 hover:bg-red-600 text-white',
          cancelBtn: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        };
      case 'info':
        return {
          container: 'bg-blue-50 border-blue-200 shadow-blue-100',
          icon: 'text-blue-500',
          title: 'text-blue-800',
          message: 'text-blue-700',
          confirmBtn: 'bg-red-500 hover:bg-red-600 text-white',
          cancelBtn: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        };
      default:
        return {
          container: 'bg-emerald-50 border-emerald-200 shadow-emerald-100',
          icon: 'text-emerald-500',
          title: 'text-emerald-800',
          message: 'text-emerald-700',
          confirmBtn: 'bg-red-500 hover:bg-red-600 text-white',
          cancelBtn: 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        };
    }
  };

  const styles = getTypeStyles();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />
      
      {/* Toast */}
      <div 
        className={`relative max-w-xs w-full mx-3 border rounded-lg shadow-2xl p-3 transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        } ${styles.container}`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <FiX className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="flex items-start space-x-2">
          <div className={`flex-shrink-0 ${styles.icon}`}>
            <Icon className="w-4 h-4" />
          </div>
          
          <div className="flex-1">
            <h3 className={`text-xs font-semibold mb-1 ${styles.title}`}>
              {title}
            </h3>
            <p className={`text-xs mb-2 ${styles.message}`}>
              {message}
            </p>
            
            {/* Action buttons */}
            <div className="flex flex-row gap-2">
              <button
                onClick={handleConfirm}
                className={`px-3 py-2 rounded-md font-medium text-xs transition-all duration-200 hover:scale-105 active:scale-95 flex-1 ${styles.confirmBtn}`}
              >
                <FiCheck className="w-3 h-3 mr-1 inline" />
                {confirmText}
              </button>
              <button
                onClick={handleClose}
                className={`px-3 py-2 rounded-md font-medium text-xs transition-all duration-200 hover:scale-105 active:scale-95 flex-1 ${styles.cancelBtn}`}
              >
                {cancelText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationToast;
