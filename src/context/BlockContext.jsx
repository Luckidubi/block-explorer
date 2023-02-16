import { createContext, useState, useEffect, useContext } from "react";
import { alchemy } from "../utils";

const BlockContext = createContext();

export const useBlock = () => useContext(BlockContext);

export default function BlockProvider({ children }) {
  const [block, setBlock] = useState();
  const [blockNumber, setBlockNumber] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [txns, setTxn] = useState();


  let txnArray = [];


  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  }, []);

  async function getBlock() {
    try {
      const blockFetches = [];
      for (let i = blockNumber; i > blockNumber - 10; i--) {
        blockFetches.push(alchemy.core.getBlock(i));
      }
const newBlocks = await Promise.all(blockFetches);
      setBlock(newBlocks)
     ;
    } catch (error) {

      setError(error.message)
    }
  }

  useEffect(() => {

    getBlock();

    if (block) setLoading(false)
      console.log(block);
  }, [blockNumber]);

  useEffect(() => {
    async function getTxn() {
      let txn = await alchemy.core.getBlockWithTransactions(blockNumber);
      for (let trxn of txn.transactions.slice(0, 10)) {
        txnArray.push(trxn);
      }
      setTxn(txnArray);
      console.log(txnArray);
    }

    getTxn();
  }, [blockNumber]);



  //   const searchUsers = (name) => {
  //     setSearchResult(getFullname().filter(user => (user.fullname.toLowerCase()).includes(name.toLowerCase()) ? user : null))
  //   }

  return (
    <BlockContext.Provider value={{error, block, txns, loading }}>
      {children}
    </BlockContext.Provider>
  );
}
