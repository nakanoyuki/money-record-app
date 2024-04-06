import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../lib/firebaseConfig";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      router.push("/home");
    } catch (error) {
      alert("正しく入力してください");
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        direction="column"
        background="gray.100"
        padding={8}
        rounded={6}
        w="350px"
        backgroundColor="white"
      >
        <Heading as="h1" fontSize="lg" textAlign="center">
          新規登録
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired mt={4}>
            <FormLabel fontSize="sm">メールアドレス</FormLabel>
            <Input
              placeholder="sample@sample.com"
              type="email"
              background="white"
              focusBorderColor="gray.100"
              fontSize="sm"
              errorBorderColor="red.300"
              padding={2}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <FormErrorMessage>
              メールアドレスを入力してください
            </FormErrorMessage>
          </FormControl>

          <FormControl isRequired mt={4}>
            <FormLabel fontSize="sm">パスワード</FormLabel>
            <Input
              placeholder="********"
              focusBorderColor="gray.100"
              type="password"
              background="white"
              fontSize="sm"
              errorBorderColor="red.300"
              padding={2}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <FormErrorMessage>パスワードを入力してください</FormErrorMessage>
          </FormControl>
          <Button
            fontSize="lg"
            mt={4}
            w="100%"
            backgroundColor="#4169e1"
            color="white"
            type="submit"
          >
            登録
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}
