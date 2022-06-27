import Head from 'next/head';
import { CryptoCards, Button, Card, Illustration, TabList, Tab, Icon } from 'web3uikit';
import styles from '../styles/Home.module.css';
import {useState} from 'react';

import { useMoralisWeb3Api } from "react-moralis";
import GetContract1 from './api/createCapsule1';
import GetContract2 from './api/createCapsule2';
import GetContract3 from './api/createCapsule3';

//const capsule1 = CreateCapsule1();




export default function Shop() {


  

  
  
  return (

    

    <>

    


    
   





    

<TabList
  style={{
    position: "relative",
    padding: "170px",
    margin: "2px",
    
    
    
    
  }}

    defaultActiveKey={4}
    tabStyle="bulbSeperate"
  >
    <Tab
    
      tabKey={1}
      tabName="Pre-Loaded"
      
    >
      <div>

        
      
        Free of charge Capsules
        <div id = "wrapper1">
      <div id="card-1">
      
        
      </div>
      <div id="card-2">
        <Card
          style={{
            width: '250px'
          }}
          description="50% USDC 50% USDT"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="500$ Stable Capsule"
          tooltipText="A capsule than already includes balances inside"
        >
          <div>
            <Illustration
              height="180px"
              logo="lazyNft"
              width="100%"
              
            />
          </div>
        </Card>
      </div>
      <div id="card-3">
        <Card
          style={{
            width: '250px'
          }}
          description="Equal distribution of the 10 most popular crypto"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="1000$ OG Capsule"
          tooltipText="A capsule that already includes balances inside"
        >
          <div>
            <Illustration
              height="180px"
              logo="lazyNft"
              width="100%"
            />
          </div>
          
        </Card>
      </div>
      <div id="card-10">
        <Card
          style={{
            width: '250px'
          }}
          description="All the assets you need to play Axie Infinity"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="Axie Gaming Capsule"
          tooltipText="A capsule that includes all the assets needed to play your favorite games"
        >
          <div>
            <Illustration
              height="180px"
              logo="lazyNft"
              width="100%"
            />
          </div>
          
        </Card>
      </div>
    </div>
      </div>
    </Tab>
    <Tab
      tabKey={2}
      tabName="Free"
    >
      <div>
        Premium Capsules with a standard Price

        <div id = "wrapper2">
      <div id="card-4">

      <GetContract1/>
        
      </div>
      <div id="card-5">

      <GetContract2/>

      </div>
      
      </div>
      </div>
    </Tab>
    <Tab
      tabKey={3}
      tabName="Premium"
      

      
    >
      <div>
        Preloaded with crypto Capsules 

        <div id = "wrapper3">
      <div id="card-7">
        <GetContract3/>
      </div>

      <div id="card-8">
        <Card
          style={{
            width: '250px'
          }}
          description="Crypto for Buseness"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="Multisig Capsule"
          tooltipText="A capsule that includes more than one owners that manage and where all parties need to agree to move funds"
        >
          <div>
            <Illustration
              height="180px"
              logo="lazyNft"
              width="100%"
            />
          </div>
        </Card>
      </div>
      </div>
      </div>
    </Tab>
    
  </TabList>

   
  
      
    

     
    </>







  );

}
