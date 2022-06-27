import { ConnectButton } from "web3uikit"

export default function Button() {
    return (
        <nav className="p-5 border-b-2 flex flex-row">
            
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
    )
}