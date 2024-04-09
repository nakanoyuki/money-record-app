import React from "react";
import Home from "..";
import { useAuthContext } from "../../src/hooks/AuthProvider";
import LoginBlock from "../../src/components/LoginBlock/LoginBlock";

const Login = () => {
  const { user } = useAuthContext();

  return <>{user ? <Home /> : <LoginBlock />}</>;
};

export default Login;
