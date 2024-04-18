import { Stack, Text } from "@chakra-ui/react";
import React from "react";

function Footer() {
  return (
    <Stack as="footer">
      <Text fontSize="xs" textAlign="center" color="#707070" pt="10px">
        Powered By 収支管理アプリ
      </Text>
    </Stack>
  );
}

export default Footer;
