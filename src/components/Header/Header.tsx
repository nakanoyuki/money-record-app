import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <Text fontSize="xs" color="#707070" pl="16px">
        収支管理アプリ
      </Text>
      <Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        p="16px"
      >
        <Link href="/">Money Record</Link>
        <Flex alignItems="center" width="300px" justifyContent="space-between">
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
      </Flex>
    </header>
  );
}
