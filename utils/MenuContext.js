import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = (props) => {
  const [menuState, setMenuState] = useState({
    shouldOpenMenu: true,
    canAnimate: true,
  });

  return (
    <MenuContext.Provider value={[menuState, setMenuState]}>
      {props.children}
    </MenuContext.Provider>
  );
};
