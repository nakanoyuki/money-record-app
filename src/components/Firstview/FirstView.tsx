import { Box, Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

export const FirstView = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="1200px"
      maxW="100%"
      m="auto"
    >
      <Box width="50%">
        <Heading fontSize="50px" fontWeight="400">
          日々の収支を
          <br />
          Money Recordで管理
        </Heading>
        <Text mt="20px">Money Recordは日々の収支を記録できるアプリです。</Text>

        <Button
          as="a"
          href="/register"
          color="#4169e1"
          border="solid 2px #4169e1"
          borderRadius="24px"
          width="fit-content"
          backgroundColor="white"
          fontSize="20px"
          p="24px 50px"
          mt="40px"
        >
          新規アカウントを作成する
        </Button>
      </Box>

      <Box width="50%">
        <Image src="kvImage.png" alt="" />
      </Box>
    </Flex>
  );
};
