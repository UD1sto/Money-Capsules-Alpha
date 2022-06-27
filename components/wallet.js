import { useMoralisWeb3Api } from "react-moralis"



export default async function fetchBlock() {
  const result = await useMoralisWeb3Api.native.getBlock({
    block_number_or_hash: '100000'
  })
  console.log(result)
  alert("yatt")
  return (<button onClick={fetchBlock}/>)
};
