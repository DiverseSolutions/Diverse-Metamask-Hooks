export default function useMetamaskConnect (log = false) {

  function connect() {
    if (typeof window.ethereum !== 'undefined') {
      return ethereum.isMetaMask;
    }else{
      if(log){
        console.log("diverse-metamask-hooks: browser does not have metamask")
      }
      return false;
    }
  }

  return connect;
}

