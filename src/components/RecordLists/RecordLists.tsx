import React from "react";
import RecordListsTable from "./RecordListsTable";
import { Flex, Text, Box } from "@chakra-ui/react";

const RecordLists = () => {
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box w="80%">
        <Text fontSize="md">収支一覧</Text>
        <RecordListsTable />
      </Box>
    </Flex>
  );
};

export default RecordLists;
