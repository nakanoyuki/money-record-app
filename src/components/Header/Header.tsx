import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useAuthContext } from "../../hooks/AuthProvider";
import Logout from "../Logout/Logout";

export default function Header() {
  const { user } = useAuthContext();
  return (
    <Stack as="header" position="fixed" backgroundColor="white" width="100%">
      <Text fontSize="xs" color="#707070" pl="16px">
        収支管理アプリ
      </Text>
      <Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        p="0 16px 16px"
        borderBottom="1px solid rgb(217, 217, 217)"
        color="#4169e1"
        fontWeight="bold"
      >
        {user ? (
          <>
            <Link href="/home">Money Record</Link>
            <Flex alignItems="center" justifyContent="space-between" w="340px">
              <Link href="/home">ホーム</Link>
              <Link href="/input-form">収支登録</Link>
              <Link href="/record-list">収支一覧</Link>
              <Logout />
            </Flex>
          </>
        ) : (
          <>
            <Link href="/">Money Record</Link>
            <Flex
              alignItems="center"
              width="320px"
              justifyContent="space-between"
            >
              <Link href="/login">ログイン</Link>
              <Button
                as="a"
                href="/register"
                color="#4169e1"
                border="solid 2px #4169e1"
                borderRadius="20px"
                width="fit-content"
                backgroundColor="white"
              >
                新規アカウントを作成する
              </Button>
            </Flex>
          </>
        )}
      </Flex>
    </Stack>
  );
}
