import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from "@chakra-ui/react";
import useFetchPaymentsData from "../../hooks/useFetchPaymentsData";

const RecordListsTable = () => {
  const { payments, loading, error } = useFetchPaymentsData();

  if (error) {
    return <div>{error}</div>;
  }

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
              <Th>購入日時</Th>
              <Th>金額</Th>
              <Th>収支タイプ</Th>
              <Th>カテゴリー</Th>
              <Th>支払い方法</Th>
              <Th>説明</Th>
            </Tr>
          </Thead>
          <Tbody>
            {payments.map((payment) => (
              <Tr key={payment.id}>
                <Td>{payment.date.toDate().toLocaleString()}</Td>
                <Td>{payment.amount}円</Td>
                <Td>{payment.type}</Td>
                <Td>{payment.category}</Td>
                <Td>{payment.paymentType}</Td>
                <Td>{payment.description}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
};

export default RecordListsTable;
