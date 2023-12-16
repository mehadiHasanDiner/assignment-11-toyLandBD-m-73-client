import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  // const [user, setUser] = useState("Md. Mahadi")
  const createUser = () => {
    console.log("first user")
  }
 
  const authInfo = {
    createUser
  }

  

  // const auth = getAuth(app);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
