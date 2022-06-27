
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralisWeb3ApiCall, useWeb3ExecuteFunction } from "react-moralis";
import { Card, Illustration, Input, Button } from "web3uikit";
import Moralis from "moralis";
import {useState} from 'react';

export default function TransferSegment1()  {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const handleChange = event => {
    setMessage(event.target.value);
  
   
  };

  const handleChange2 = event => {
    setMessage2(event.target.value);
  
   
  };
  const handleClick = event => {
    event.preventDefault();
  
    
  };

    const seg1 = async () => {

    const ABI = [{
      "inputs": [
        {
          "internalType": "address",
          "name": "coOwner",
          "type": "address"
        }
      ],
      "name": "transSeg1",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }]; // Add ABI of 0xdAC17F958D2ee523a2206206994597C13D831ec7
  
    // 0xdAC17F958D2ee523a2206206994597C13D831ec7 = contract address of USDT
    
      const options = {
    abi: ABI,
    contractAddress: message,
    functionName: "transSeg1",
    params: {coOwner: message2
    },
  }

   await Moralis.authenticate();
   let result = await Moralis.executeFunction(options);

}
  
    
  
return (
  // Use your custom error component to show errors
  
    <div id="segment-1">
    <form>
      <Input
      label="Target Capsule Address"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />

<Input
      label="Address of new segment 1 Owner"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange2}
        value={message2}
        autoComplete="off"
      />
      
      <Button Button text="Transfer Segment 1"
        onClick={() => seg1()}
      >
        Transfer Segment 1
      </Button>
      </form>
      
    </div>
 
);
  };



  