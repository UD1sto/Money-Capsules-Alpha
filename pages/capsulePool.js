import { useRouter } from "next/router";
import { useEffect } from "react";
import Moralis from "moralis";
import { useMoralis } from "react-moralis";
function Index() {
  const { isAuthenticated, logout } = useMoralis();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) router.replace("/");
  }, [isAuthenticated]);

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center">
      
      <button
        className="px-7 py-4 mb-5 text-xl rounded-xl bg-yellow-300"
      >
        Send 0.1 ETH to owner
      </button>
      <button
        className="px-7 py-4 text-xl rounded-xl bg-yellow-300"
      >
        Logout
      </button>
    </div>
  );
}
export default Index;