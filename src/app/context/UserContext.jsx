"use client";
import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [name, setName] = useState();
  const [intention, setIntention] = useState();

  return (
    <UserContext.Provider value={{ name, setName, intention, setIntention }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
