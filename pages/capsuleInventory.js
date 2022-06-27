import { useMoralisWeb3Api, useERC20Balances } from "react-moralis";
import { Widget, Input} from "web3uikit";
import CapsuleQuery from "../components/capsuleQuery";
import erc from "./api/balance";

import NativeBalance from "./api/nativeBalance";
import NFTBalance from "./api/nftbalance";
import Purchase  from "./api/alltransfers";
import SegmentTransfer1 from "./api/segmentTransfers1";
import SegmentTransfer2 from "./api/segmentTransfers2";
import SegmentTransfer3 from "./api/segmentTransfers3";
import SingleTransfer from "./api/singleTransfers";
import CapsuleTransfer from "./api/changeCapsuleAdd";





export default function inventory() {
  
  
const nft = NFTBalance();
const bal = erc();
const nat = NativeBalance();
const nattt = Purchase();
const se1 = SegmentTransfer1();
const se2 = SegmentTransfer2();
const se3 = SegmentTransfer3();
const sig = SingleTransfer();
const caa = CapsuleTransfer();

    return (
        
<>

<div id = "widget">
  <h5>{bal}</h5>
  <h5>{nft}</h5>
  <h5>{nattt}</h5>
  <h5>{se1}</h5>
  <h5>{se2}</h5>
  <h5>{se3}</h5>
  <h5>{sig}</h5>
  <h5>{caa}</h5>
  
  
  
 
            
            <div id = "select">
            
            
              
              
              <h5>{nat}</h5>
              
               
            </div>

           
            
            




            </div>
            
<CapsuleQuery/>
           
            </>
        
    );

}




