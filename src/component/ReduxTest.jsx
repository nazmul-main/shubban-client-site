'use client';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addNotification } from '../store/slices/uiSlice';

export default function ReduxTest() {
  const dispatch = useAppDispatch();
  const { theme, language, notifications } = useAppSelector((state) => state.ui);

  const handleTestNotification = () => {
    dispatch(addNotification({
      type: 'success',
      message: 'Redux is working! 🎉',
      duration: 3000
    }));
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Redux Test Component</h3>
      
      <div className="space-y-2 mb-4">
        <p><strong>Theme:</strong> {theme}</p>
        <p><strong>Language:</strong> {language}</p>
        <p><strong>Notifications:</strong> {notifications.length}</p>
      </div>
      
      <button
        onClick={handleTestNotification}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Test Notification
      </button>
      
      {notifications.length > 0 && (
        <div className="mt-4">
          <h4 className="font-medium mb-2">Active Notifications:</h4>
          <ul className="space-y-1">
            {notifications.map((notification) => (
              <li key={notification.id} className="text-sm text-gray-600">
                {notification.message} ({notification.type})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 