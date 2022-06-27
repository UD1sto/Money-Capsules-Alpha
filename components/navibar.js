import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Money Capsules
      </a>
      <ul>
        <a href="/shop">Shop</a>
        <a href="/capsuleInventory">Inventory</a>
        <a href="/capsuleInventory">P2P Exchange</a>
        <a href="/capsuleInventory">Liquid Loans</a>
        <a href="/capsuleInventory">Pool</a>
      </ul>
    </nav>
  )
}

