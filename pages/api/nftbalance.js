import { useNFTBalances } from "react-moralis";

import { Button } from "web3uikit";


export default function NFTBalance(){

const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances();

const NFTBalances = () => {
  
};
return (
    <div>
      {error && <>{JSON.stringify(error)}</>}
      <Button Button text="Get NFT Balance" onClick={() => getNFTBalances({ params: { chain: "0x13881" } })}>Refetch NFTBalances</Button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}