import React from 'react'

import { useHaveMetamask } from '../../../index.js'

export default function UsingHaveMetamaskPage() {
  const [haveMetamask,checkBrowserHasMetamask] = useHaveMetamask({ log: true });

  return (
    <div>
      <h1>Using useHaveMetamaskHook , check console.log()</h1>
      <p>Have Metamask : { haveMetamask == true ? "true" : "false" }</p>
    </div>
  )
}

