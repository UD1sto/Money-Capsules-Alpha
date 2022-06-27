
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralisWeb3ApiCall, useWeb3ExecuteFunction } from "react-moralis";
import { Card, Illustration, Input, Button } from "web3uikit";
import Moralis from "moralis";
import { useState } from "react";

export default function TransferSegment2()  {
    const [message, setMessage] = useState('');
    const handleChange = event => {
      setMessage(event.target.value);
    
     
    };
    const handleClick = event => {
      event.preventDefault();
    
      
    };
  
      const seg2 = async () => {
  
      const ABI = [{
        "inputs": [
            {
                "internalType": "address",
                "name": "coOwner",
                "type": "address"
            }
        ],
        "name": "transSeg2",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }]; // Add ABI of 0xdAC17F958D2ee523a2206206994597C13D831ec7
    
      // 0xdAC17F958D2ee523a2206206994597C13D831ec7 = contract address of USDT
      
        const options = {
      abi: ABI,
      contractAddress: message,
      functionName: "transSeg2",
      params: {
      },
    }
  
     await Moralis.authenticate();
     let result = await Moralis.executeFunction(options);
  
  }
    
      
    
  return (
    // Use your custom error component to show errors
    
      <div id="segment-2">
      <form>
      <Input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />
      
      <Button Button text="Transfer Segment 2"
        onClick={() => seg2()}
      >
        Transfer Segment 1
      </Button>
      </form>
        
      </div>
    
  );
    };
  
