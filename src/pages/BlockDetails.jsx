import { Box, Center, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { alchemy, formatEther, timeAgo } from "../utils";

function BlockDetails() {

  let { id } = useParams();
  const [blockDetails, setBlockDetails] = useState();
  async function getBlockDetails() {
    const isHex = /^0x/i.test(id);
    const parsedId = isHex ? id : parseInt(id);
    setBlockDetails(await alchemy.core.getBlock(parsedId));
    console.log(blockDetails);
  }
  useEffect(() => {
    async function getBlockDetails() {
      const isHex = /^0x/i.test(id);
      const parsedId = isHex ? id : parseInt(id);
      setBlockDetails(await alchemy.core.getBlock(parsedId));
      console.log(blockDetails);
    }
    getBlockDetails();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
    <Box px="2rem " display="flex" >
    <Heading mr="10px" size="md">Block: </Heading>  <Text color="blackAlpha.700">{id}</Text>

    </Box>


      <Box boxShadow="xl" py="6px" m={["1rem", "3rem"]} px="2rem" pb="4rem">

        {blockDetails ? (
          <>
            <dl className="property-list">
              <dt className="property-list__key">Block Number</dt>

              <dd className="property-list__value">{blockDetails.number}</dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Timestamp</dt>

              <dd className="property-list__value">
                {timeAgo(blockDetails.timestamp)}
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Transactions</dt>

              <dd className="property-list__value">
                <Link to={`/txns/block/${blockDetails.number}`}>{blockDetails.transactions.length} transactions</Link>
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Miner</dt>

              <dd className="property-list__value">{blockDetails.miner}</dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Gas Used</dt>

              <dd className="property-list__value">
                {formatEther(blockDetails.gasUsed._hex)} ETH
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Gas Limit</dt>

              <dd className="property-list__value">
                {formatEther(blockDetails.gasLimit._hex)} ETH
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Base Fee Per Gas</dt>

              <dd className="property-list__value">
                {formatEther(blockDetails.baseFeePerGas._hex)} ETH
              </dd>
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

              <dd className="property-list__value">
                <Link to={`/blocks/${blockDetails.parentHash}`}>
                  {blockDetails.parentHash}
                </Link>
              </dd>
            </dl>
          </>
        ) : (
          <Center className="spinner"></Center>
        )}
      </Box>
    </>
  );
}

export default BlockDetails;
