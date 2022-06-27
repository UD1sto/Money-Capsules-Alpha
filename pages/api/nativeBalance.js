import { useNativeBalance } from "react-moralis";
import { MoralisProvider } from "react-moralis";
import { useMoralis } from "react-moralis";
//import Login from "./changeCapsuleAdd";



export default function NativeBalance() {
  
  const { authenticate, isAuthenticated, user } = useMoralis();
  const { getBalances, data: balance, nativeToken, isLoading } = useNativeBalance({ chain : "0x13881" });
  
 

  return (<div>{balance.formatted}</div>
  
  
  )
}