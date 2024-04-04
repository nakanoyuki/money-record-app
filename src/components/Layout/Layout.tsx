import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Stack } from "@chakra-ui/react";

type Prop = {
  children: React.ReactNode;
};

export default function Layout(props: Prop) {
  const { children } = props;
  return (
    <>
      <Header />
      <Stack as="main" height="94vh" backgroundColor="#ebf6f7">
        {children}
      </Stack>
      <Footer />
    </>
  );
}
