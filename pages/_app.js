import { MoralisProvider } from "react-moralis";
import { NotificationProvider} from "web3uikit";
import "../styles/globals.css";
//import "./identicon.css";
import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Navbar from "../components/navibar";






function MyApp({ Component, pageProps }) {
  
  return ( 
    <><Navbar/>
    
    <MoralisProvider 
    
    
    appId={process.env.NEXT_PUBLIC_APP_ID}
    serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
      <NotificationProvider>
        <Component {...pageProps} />
      </NotificationProvider>

      
    </MoralisProvider>
    </>
  );
  
}




//cconst  Header, Footer  = Layout;







export default MyApp;