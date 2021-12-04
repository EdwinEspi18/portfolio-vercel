import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cla, setCla] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const data = {
    cla,
    setCla,
    openModal,
    closeModal,
    modalIsOpen,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
