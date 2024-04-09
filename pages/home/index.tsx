import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../src/hooks/AuthProvider";
import Login from "../login";
import InputRecordForm from "../../src/components/InputRecordForm/InputRecordForm";

function Home() {
  const { user } = useAuthContext();

  return <>{user ? <InputRecordForm /> : <Login />}</>;
}

export default Home;
