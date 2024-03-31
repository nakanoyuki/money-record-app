import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Prop = {
  children: React.ReactNode;
};

export default function Layout(props: Prop) {
  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
