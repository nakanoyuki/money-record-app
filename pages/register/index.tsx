import React from "react";
import { useAuthContext } from "../../src/hooks/AuthProvider";
import Home from "../home";
import RegisterBlock from "../../src/components/RegisterBlock/RegisterBlock";

export default function Register() {
  const { user } = useAuthContext();

  return <>{user ? <Home /> : <RegisterBlock />}</>;
}
