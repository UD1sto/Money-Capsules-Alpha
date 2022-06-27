
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralisWeb3ApiCall } from "react-moralis";
import { Card, Illustration } from "web3uikit";
import Moralis from "moralis";

export default function GetContract2()  {
    // 0xdAC17F958D2ee523a2206206994597C13D831ec7 = contract address of USDT
    const getcap2 = async () => {

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
      contractAddress: "0xF13A54a26b861b05Dc71cB6cCa601a550F2fAd74",
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
          description="Explore NFTs"
          onClick={() => getcap2()}
          setIsSelected={function noRefCheck() { }}
          title="NFT Capsule"
          tooltipText="A capsule that can receive any NFT token and native balance as well"
        >
          <div>
            <Illustration
              height="180px"
              logo="pack"
              width="100%"
            />
          </div>
        </Card>
          
          
          
        </div>
      </div>
    );
  };


  
          
          