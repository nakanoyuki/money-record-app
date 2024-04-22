import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { auth } from "../../../lib/firebaseConfig";

const LoginBlock = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      router.push("/home");
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています");
    }
    setIsLoading(false);
  };

  const isError = loginEmail === "" || loginPassword === "";
  return (
    <>
      {isLoading ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          width="1200px"
          maxW="100%"
          m="auto"
          color="#4169e1"
        >
          <Spinner />
        </Flex>
      ) : (
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
              ログイン
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired mt={4} isInvalid={isError}>
                <FormLabel fontSize="sm">メールアドレス</FormLabel>
                <Input
                  placeholder="sample@sample.com"
                  type="email"
                  background="white"
                  focusBorderColor="gray.100"
                  fontSize="sm"
                  errorBorderColor="red.300"
                  padding={2}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                {isError && (
                  <FormErrorMessage>
                    メールアドレスを入力してください
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isRequired mt={4} isInvalid={isError}>
                <FormLabel fontSize="sm">パスワード</FormLabel>
                <Input
                  placeholder="********"
                  focusBorderColor="gray.100"
                  type="password"
                  background="white"
                  fontSize="sm"
                  errorBorderColor="red.300"
                  padding={2}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                {isError && (
                  <FormErrorMessage>
                    パスワードを入力してください
                  </FormErrorMessage>
                )}
              </FormControl>
              <Button
                fontSize="lg"
                mt={4}
                w="100%"
                backgroundColor="#4169e1"
                color="white"
                type="submit"
              >
                ログイン
              </Button>
            </form>
          </Flex>
        </Flex>
      )}
    </>
  );
};

export default LoginBlock;
