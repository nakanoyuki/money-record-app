import { Button } from "@chakra-ui/react";
import { useAuthContext } from "../../hooks/AuthProvider";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { auth } from "../../../lib/firebaseConfig";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };
  return (
    <>
      <Button
        sx={{
          color: "#4169e1",
          fontSize: "14px",
          fontWeight: "600",
          ml: "4px",
        }}
        onClick={handleLogout}
      >
        ログアウト
      </Button>
    </>
  );
};

export default Logout;
