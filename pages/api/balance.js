import { useERC20Balances, isLoading, isFetching } from "react-moralis";
import {useState} from 'react';
import { Button, Input } from "web3uikit";




export default function erc(){

const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
 
const [message, setMessage] = useState('');
const handleChange = event => {
  setMessage(event.target.value);

 
};
const handleClick = event => {
  event.preventDefault();

  
};

const ERC20Balances = () => {
 
};
return (
  <div>
      {error && <>{JSON.stringify(error)}</>}
      <form>
      <Input
      label="Address to get Balances"
      
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        autoComplete="off"
        labelBgColor="#67ae4f"
      />
        
      </form>
      <Button text="Get ERC20 Balances" onClick={() => fetchERC20Balances({ params: { chain: "0x13881", address: message } })}></Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
);


}
