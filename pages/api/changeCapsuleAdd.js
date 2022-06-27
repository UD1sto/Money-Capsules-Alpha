
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralisWeb3ApiCall, useWeb3ExecuteFunction } from "react-moralis";
import { Card, Illustration, Input, Button } from "web3uikit";
import Moralis from "moralis";
import {useState} from 'react';

export default function TransferCapsule()  {
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

    const transfercap = async () => {

    const ABI = [{
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }]; // Add ABI of 0xdAC17F958D2ee523a2206206994597C13D831ec7
  
    // 0xdAC17F958D2ee523a2206206994597C13D831ec7 = contract address of USDT
    
      const options = {
    abi: ABI,
    contractAddress: message,
    functionName: "transferOwnership",
    params: { newOwner: message2
    },
  }

   await Moralis.authenticate();
   let result = await Moralis.executeFunction(options);

}
  
    
  
return (
  // Use your custom error component to show errors
  
    <div id ="transfer-capsule">
    <form>
      <Input
      label="Address of new capsule Owner"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />

<Input
      label="Capsule Target Address"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />

<Input
      label="Address of new capsule Owner"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
      />
      
      <Button Button text="Transfer Capsule"
        onClick={() => transfercap()}
      >
        Transfer Segment 1
      </Button>
      </form>
      
    </div>

);
  };

  
