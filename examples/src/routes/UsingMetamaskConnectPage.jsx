import React, { useEffect } from 'react'

import { useMetamaskConnect } from '../../../index.js'

export default function UsingMetamaskConnectPage() {
  const [accounts,connect] = useMetamaskConnect({ log: true });

  return (
    <div>
      <h2>Accounts</h2>
      { accounts.map((account,iKey) => (
        <p key={iKey}>{account}</p>
      )) }
    </div>
  )
}

