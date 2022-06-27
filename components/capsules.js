import { CryptoCards, Button, Card, Illustration, TabList, Tab, Icon } from 'web3uikit';

export default function Capsules() {
    return (
        <div id = "wrapper1">
      <div id="card-1">
        <Card
          style={{
            width: '250px'
          }}
          description="Enter the world of crypto"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="500$ Crypto Starter Pack"
          tooltipText="50% Stablecoins and 50% volatile assets"
        >
          <div>
            <Illustration
              height="180px"
              logo="chest"
              width="100%"
            />
          </div>
        </Card>
      </div>
      <div id="card-2">
        <Card
          style={{
            width: '250px'
          }}
          description="Enjoy security with crypto pegged to USD"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="Crypto Stable Pack"
          tooltipText="Split in DAI, USDT, and USDC"
        >
          <div>
            <Illustration
              height="180px"
              logo="chest"
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
          description="A crypto pack for risk takers"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="Crypto Pack OG"
          tooltipText="BTC and ETH"
        >
          <div>
            <Illustration
              height="180px"
              logo="chest"
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
          description="A crypto pack for risk takers"
          onClick={function noRefCheck() { }}
          setIsSelected={function noRefCheck() { }}
          title="Axie Infinity Asset Pack"
          tooltipText="BTC and ETH"
        >
          <div>
            <Illustration
              height="180px"
              logo="bundle"
              width="100%"
            />
          </div>
          
        </Card>
      </div>
    </div>
     
    )
}