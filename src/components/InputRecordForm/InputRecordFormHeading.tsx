import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const InputRecordFormHeading = () => {
  const currentDate = new Date();
  const getCurrentMonth = currentDate.getMonth() + 1;
  return (
    <Flex>
      <Text fontSize="md">今月{getCurrentMonth}月の収支</Text>
    </Flex>
  );
};

export default InputRecordFormHeading;
