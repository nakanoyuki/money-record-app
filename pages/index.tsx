import type { NextPage } from "next";
import { FirstView } from "../src/components/Firstview";
import { useAuthContext } from "../src/hooks/AuthProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/home");
    }
  }, [user, router]);
  return <FirstView />;
};

export default Home;
