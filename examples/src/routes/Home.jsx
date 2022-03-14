import React from 'react'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Diverse Metamask Examples</h1>
      <Link to="/usingHaveMetamask">useHaveMetamask Example</Link><br/>
      <Link to="/usingMetamaskConnect">useMetamaskConnect Example</Link>
    </div>
  )
}

