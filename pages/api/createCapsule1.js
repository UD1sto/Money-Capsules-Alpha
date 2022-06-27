
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralisWeb3ApiCall, useWeb3ExecuteFunction } from "react-moralis";
import { Card, Illustration } from "web3uikit";
import Moralis from "moralis";

export default function GetContract1()  {

    const getcap1 = async () => {

    const ABI = [{
        "inputs": [],
        "name": "createWalletContract",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }]; // Add ABI of 0xdAC17F958D2ee523a2206206994597C13D831ec7
  
    // 0xdAC17F958D2ee523a2206206994597C13D831ec7 = contract address of USDT
    
      const options = {
    abi: ABI,
    contractAddress: "0x0E0C345dC6A663aA8AC0484080a4178497d4CBB1",
    functionName: "createWalletContract",
    params: {
    },
  }

   await Moralis.authenticate();
   let result = await Moralis.executeFunction(options);

}
  
    
  
    return (
      // Use your custom error component to show errors
      <div>
        <div>
        <Card
          style={{
            width: '250px'
          }}
          description="Enter the world of Crypto"
          onClick={() => getcap1()}
          setIsSelected={function noRefCheck() { }}
          title="ERC20 Capsule"
          tooltipText="A capsule that can receive any ERC20 token"
        >
          <div>
            <Illustration
              height="180px"
              logo="token"
              width="100%"
            />
          </div>
        </Card>
          
          
          
        </div>
      </div>
    )
  };

  
