import { Box, Center } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { alchemy, formatEther, timeAgo } from "../utils";

function BlockDetails() {
  let { id } = useParams();
  const [blockDetails, setBlockDetails, ] = useState();
  async function getBlockDetails() {
    setBlockDetails(await alchemy.core.getBlock(parseInt(id)));
    console.log(blockDetails);
  }
  useEffect(() => {
    getBlockDetails();
  }, []);



  return (
    <>
      <Box boxShadow="xl" py="6px" m={["1rem","3rem"]} px="2rem" pb="4rem">
      {
      blockDetails ?
      <>
        <dl className="property-list">

    <dt className="property-list__key">Block Number</dt>


    <dd className="property-list__value">{blockDetails.number}</dd>
</dl>
    <dl className="property-list">

    <dt className="property-list__key">Timestamp</dt>


    <dd className="property-list__value">{timeAgo(blockDetails.timestamp)}</dd>
    </dl>
<dl className="property-list">

    <dt className="property-list__key">Transactions</dt>


    <dd className="property-list__value">{blockDetails.transactions.length}</dd>
    </dl>
    <dl className="property-list">

    <dt className="property-list__key">Miner</dt>


    <dd className="property-list__value">{blockDetails.miner}</dd>
    </dl>
    <dl className="property-list">

    <dt className="property-list__key">Gas Used</dt>


    <dd className="property-list__value">{formatEther(blockDetails.gasUsed._hex)} ETH</dd>
    </dl>
    <dl className="property-list">

<dt className="property-list__key">Gas Limit</dt>


<dd className="property-list__value">{formatEther(blockDetails.gasLimit._hex)} ETH</dd>
</dl>
<dl className="property-list">

<dt className="property-list__key">Base Fee Per Gas</dt>


<dd className="property-list__value">{formatEther(blockDetails.baseFeePerGas._hex)} ETH</dd>
</dl>
<dl className="property-list">

<dt className="property-list__key">Nonce</dt>


<dd className="property-list__value">{blockDetails.nonce}</dd>
</dl>
<dl className="property-list">

<dt className="property-list__key">Hash</dt>


<dd className="property-list__value">{blockDetails.hash}</dd>
</dl>
<dl className="property-list">

<dt className="property-list__key">Parent Hash</dt>


<dd className="property-list__value">{blockDetails.parentHash}</dd>
</dl>
</>
: <Center className="spinner"></Center>
}

      </Box>
    </>
  );
}

export default BlockDetails;
