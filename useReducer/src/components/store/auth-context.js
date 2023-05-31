import React from "react";

const AuthContext = React.createContext({
  //This may be string or object
  isLoggedIn: false,
});
export default AuthContext;