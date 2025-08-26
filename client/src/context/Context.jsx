import React, { createContext, useState } from "react";

export const MyContext = createContext();

const Context = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(false);

  const tools = { showSidebar, setshowSidebar };
  return <MyContext.Provider value={tools}>{children}</MyContext.Provider>;
};

export default Context;
