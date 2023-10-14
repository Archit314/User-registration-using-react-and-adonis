import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// const AuthContext = createContext();

export const UserAuthentication = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  console.log(`in authrntication`);
  useEffect(() => {
    let accessToken = localStorage.getItem("access-token");
    console.log(accessToken);
    if (!accessToken) {
      console.log(`user is not loged in`);
      navigate("/sign-in");
    } else {
      console.log(`got token`);
    }
  }, []);

  return (
    <>
      <div>
        <Component />
      </div>
    </>
  );
};

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
