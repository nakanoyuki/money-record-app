import React from "react";
import InputRecordFormTable from "./InputRecordFormTable";
import { Flex, Text, Box } from "@chakra-ui/react";

const InputRecordForm = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box w="80%">
        <Text fontSize="md">収支登録</Text>
        <InputRecordFormTable />
      </Box>
    </Flex>
  );
};

export default InputRecordForm;
