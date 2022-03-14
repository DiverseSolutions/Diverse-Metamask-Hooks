import { useEffect,useState } from 'react'
import { optionsFormat,resultFormat } from '../constants.js'

export default function useHaveMetamask(options = optionsFormat) {
  const [haveMetamask, setHaveMetamask] = useState(false)

  useEffect(() => {
    let result = checkBrowserHasMetamask()
    if(result.succeed){
      setHaveMetamask(true)
    }
  },[])

  function checkBrowserHasMetamask() {
    if (typeof window.ethereum !== 'undefined') {
        if(ethereum.isMetaMask){
          if(options.log){ console.log("diverse-metamask-hooks: browser has metamask") }

          return { ...resultFormat, succeed: true, data: true }
        }else{
          if(options.log){ console.log("diverse-metamask-hooks: browser wallet isn't metamask") } 

          return { ...resultFormat, error: "browser wallet isn't metamask" }
        }
    }else{
      if(options.log){ console.log("diverse-metamask-hooks: browser does not have metamask") }
      return { ...resultFormat, error: "browser does not have metamask" }
    }
  }

  return [haveMetamask,checkBrowserHasMetamask];
}

