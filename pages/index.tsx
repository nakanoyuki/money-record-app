import type { NextPage } from "next";
import { FirstView } from "../src/components/Firstview";
import { useAuthContext } from "../src/hooks/AuthProvider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/home");
      return;
    }
    setLoading(false);
  }, [user, router]);
  return loading ? <div>Loading!!</div> : <FirstView />;
};

export default Home;
