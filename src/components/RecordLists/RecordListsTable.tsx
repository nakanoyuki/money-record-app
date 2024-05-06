import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from "@chakra-ui/react";

const RecordListsTable = () => {
  const expenses = [
    {
      id: 1,
      date: "2024-05-05",
      type: "支出",
      amount: 1000,
      description: "食料品購入",
    },
    {
      id: 2,
      date: "2024-05-06",
      type: "収入",
      amount: 5000,
      description: "アルバイト",
    },
    // 他のデータも追加
  ];

  return (
    <Flex
      direction="column"
      padding={8}
      rounded={6}
      background="gray.100"
      backgroundColor="white"
    >
      <Box maxW="100%" w="100%">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>日付</Th>
              <Th>タイプ</Th>
              <Th>金額</Th>
              <Th>説明</Th>
            </Tr>
          </Thead>
          <Tbody>
            {expenses.map((expense) => (
              <Tr key={expense.id}>
                <Td>{expense.id}</Td>
                <Td>{expense.date}</Td>
                <Td>{expense.type}</Td>
                <Td>{expense.amount}</Td>
                <Td>{expense.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default RecordListsTable;
