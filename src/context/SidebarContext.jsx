import { createContext, useEffect, useState } from "react";

// create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  //sidebar state
  const [isOpen, setIsOpen] = useState(false); // isOpen = false

  // function that triggers the state changer (setIsOpen)
  const handleClose = () => {
    setIsOpen(false);
  };

  // to handle the scroll of the page when the sidebar is open or close
  useEffect(() => {
    const handleBodyScroll = () => {
      if (isOpen) {
        //if the sidebar is open, disable body scroll
        document.body.style.overflow = "hidden";
      } else {
        //if the sidebar is close, enable body scroll
        document.body.style.overflow = "auto";
      }
    };

    handleBodyScroll();

    //clean up the event when the component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
