import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export const DisplayRecord = () => {
  const currentDate = new Date();
  const getCurrentMonth = currentDate.getMonth() + 1;
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Text fontSize="md">{getCurrentMonth}月の収支</Text>
    </Flex>
  );
};
