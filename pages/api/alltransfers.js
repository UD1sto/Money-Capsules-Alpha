
import { useWeb3Transfer } from "react-moralis";

import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import { Button } from "web3uikit";





export default function Purchase() {

    const TransferList = async () => {
        
        const options = {
            type: "native",
            amount: "4567876",
            receiver: "0x8326042D87F98E22C2023A903166cB77Bce1245f",
        };
        await Moralis.authenticate();
        let result = await Moralis.transfer(options);
       // console.log(user.attributes.ethAddress);

        

    }
    return (<div>

        <Button Button text="Send Native" onClick={() => TransferList()}></Button>
    </div>)
}



