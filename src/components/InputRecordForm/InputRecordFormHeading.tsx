import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const InputRecordFormHeading = () => {
  const currentDate = new Date();
  const getCurrentMonth = currentDate.getMonth() + 1;
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="1200px"
      maxW="100%"
      m="auto"
    >
      <Text fontSize="md">今月{getCurrentMonth}月の収支</Text>
    </Flex>
  );
};

export default InputRecordFormHeading;
