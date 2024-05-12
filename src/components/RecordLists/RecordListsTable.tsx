import React, { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Flex } from "@chakra-ui/react";
import {
  CollectionReference,
  Timestamp,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../../lib/firebaseConfig";

export type FormType = {
  id: string;
  date: Timestamp;
  amount: string;
  type: string;
  category: string;
  paymentType: string;
  description: string;
  uid: string | undefined;
};

const RecordListsTable = () => {
  const [payments, setPayments] = useState<FormType[]>([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const listsRef = collection(
          db,
          "recordlist"
        ) as CollectionReference<FormType>;
        const data = await getDocs(
          query(
            listsRef,
            where("uid", "==", auth.currentUser?.uid),
            orderBy("date", "desc")
          )
        );
        setPayments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (error) {
        console.error("Error fetching Payments:", error);
      }
    };

    fetchPayments();
  }, []);

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
