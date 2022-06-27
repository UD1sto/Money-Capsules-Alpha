import { useMoralisQuery } from "react-moralis";
import React, { useEffect, useState } from "react";

import { Card, Illustration } from "web3uikit";

import Moralis from "moralis";



















const final = [];

//const getaddress = getBlockchainInformation();




let addressval;


export default function CapsuleQuery(props) {
    
    
    
    
    const { fetch } = useMoralisQuery(

        "capsulePolygonnn",
        (query) => query.equalTo("ownedBy", {addressval}),
        [],
        { autoFetch: false }
    );

    const basicQuery = async () => {

        await Moralis.authenticate();
        let result =  Moralis.User.current().get("ethAddress");
        addressval = result;

        console.log(addressval);

       
        
        const results = await fetch();
        //alert("Successfully retrieved " + results.length + " Capsules.");
        // Do something with the returned Moralis.Object values
        for (let i = 0; i < results.length; i++) {
            const object = results[i];
            
          

            final.push(object.get("cloneAddress"));
        
        
        



        }
        


    
};

const refinal = final.map((item) => <Card style={{
    width: '450px'
}} title={item} description="Capsule Type" onClick={""}><div>
<Illustration
  height="180px"
  logo="servers"
  width="100%"
  
/>
</div></Card>);

useEffect(() => {
    let ignore = false;
    
    if (!ignore)  basicQuery()
    return () => { ignore = true; }
    },[]);


    return (
        <>
           <div><h1 className="heading">My capsules</h1>
           </div>
           <div>
            
           {refinal}
           </div>
           <button onClick={""}/>
           </>
       );
    




}



