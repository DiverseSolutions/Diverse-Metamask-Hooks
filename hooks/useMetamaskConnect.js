import { useEffect,useState } from 'react'
import { resultFormat,optionsFormat } from '../constants.js'

export default function useMetamaskConnect (options = optionsFormat) {
  const [accounts, setAccounts] = useState([])

  function connect() {
    ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        setAccounts(accounts)
        return { ...resultFormat, succeed: true, data: accounts }
      })
      .catch((error) => {
        if (error.code === 4001) {
          if(options.log) { console.log("diverse metamask: user has rejected metamask connection") }
          return { ...resultFormat, error: "User Has Rejected Metamask Connection" }
        } else {
          if(options.log) { console.log(`diverse metamask: ${error.message}`) }
          return { ...resultFormat, error: error.message }
        }
      });
  }

  useEffect(() => {
    connect();
  },[])

  return [accounts,connect];
}

