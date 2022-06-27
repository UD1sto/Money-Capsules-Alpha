
import { useMoralisWeb3Api } from "react-moralis";
import { useMoralisWeb3ApiCall, useWeb3ExecuteFunction } from "react-moralis";
import { Card, Illustration, Input, Button } from "web3uikit";
import Moralis from "moralis";
import {useState} from 'react';

export default function SingleTransfer()  {
  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');
  const [message3, setMessage3] = useState('');
  const [message4, setMessage4] = useState('');
  
  const handleChange = event => {
    setMessage(event.target.value);
  
   
  };

  const handleChange2 = event => {
    setMessage2(event.target.value);
  
   
  };

  const handleChange3 = event => {
    setMessage3(event.target.value);
  
   
  };

  const handleChange4 = event => {
    setMessage4(event.target.value);
  
   
  };
  const handleClick = event => {
    event.preventDefault();
  
    
  };

    const singleton = async () => {

    const ABI = [{
        "inputs": [
            {
                "internalType": "address",
                "name": "erc20Adress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferAny",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }]; // Add ABI of 0xdAC17F958D2ee523a2206206994597C13D831ec7
  
    // 0xdAC17F958D2ee523a2206206994597C13D831ec7 = contract address of USDT
    
      const options = {
    abi: ABI,
    contractAddress: message,
    functionName: "transferAny",
    params: { erc20Adress: message2, recipient: message3, amount: message4
    },
  }

   await Moralis.authenticate();
   let result = await Moralis.executeFunction(options);

}
  
    
  
return (
  // Use your custom error component to show errors
  
    <div>
    <form>
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
      label="ERC20 Token Address"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange2}
        value={message2}
        autoComplete="off"
      />

<Input
      label="Recipient"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange3}
        value={message3}
        autoComplete="off"
      />

<Input
      label="Amount"
      labelBgColor="#67ae4f"
        type="text"
        id="message"
        name="message"
        onChange={handleChange4}
        value={message4}
        autoComplete="off"
      />


      
      <Button Button text="Single ERC20 Transfer"
        onClick={() => singleton()}
      >
        
      </Button>
      </form>
      
    </div>
  
);
  };


  
