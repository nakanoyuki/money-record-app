import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAuthContext } from "../../src/hooks/AuthProvider";
import Login from "../login";

function Home() {
  const { user } = useAuthContext();
  return (
    <>
      {user ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          width="1200px"
          maxW="100%"
          m="auto"
        >
          Homeのフォーム
        </Flex>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default Home;
