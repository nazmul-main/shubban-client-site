'use client';

import { createContext, useContext, useState } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
};

export const PopupProvider = ({ children }) => {
  const [donationPopupOpen, setDonationPopupOpen] = useState(false);
  const [userLoginPopupOpen, setUserLoginPopupOpen] = useState(false);

  const openDonationPopup = () => setDonationPopupOpen(true);
  const closeDonationPopup = () => setDonationPopupOpen(false);
  
  const openUserLoginPopup = () => setUserLoginPopupOpen(true);
  const closeUserLoginPopup = () => setUserLoginPopupOpen(false);

  const value = {
    donationPopupOpen,
    userLoginPopupOpen,
    openDonationPopup,
    closeDonationPopup,
    openUserLoginPopup,
    closeUserLoginPopup,
  };

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
};
