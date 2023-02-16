import { Badge, Box, Center, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { alchemy, formatEther, timeAgo } from "../utils";

function TransactionsDetails() {
  let { id } = useParams();
  const [txnDetails, setTxnDetails] = useState();
  async function getTxnDetails() {
    setTxnDetails(await alchemy.core.getTransactionReceipt(id));
    console.log(txnDetails);
  }
  useEffect(() => {
    getTxnDetails();
  }, []);

  return (
    <>
      <Box px="2rem" mb="2rem">
        <Heading  mb="2rem" size="md">Transaction Details</Heading>
        <hr />
      </Box>
      <Box boxShadow="xl" py="6px" m={["1rem", "3rem"]} px="2rem" pb="4rem">
        {txnDetails ? (
          <>
            <dl className="property-list">
              <dt className="property-list__key">Transaction Hash</dt>

              <dd className="property-list__value">
                {txnDetails.transactionHash}
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Status</dt>

              <dd className="property-list__value">
                {txnDetails.status === 1 ? "success" : "failed"}
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Block Number</dt>

              <dd className="property-list__value">
                <Link to={`/blocks/${txnDetails.blockNumber}`}>
                  {txnDetails.blockNumber}{" "}
                </Link>{" "}
                <Badge textTransform="capitalize" borderRadius="4px" variant="subtle" p="4px" title="No. of blocks produced since">
                  {txnDetails.confirmations} Block Confirmations
                </Badge>
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">From</dt>

              <dd className="property-list__value">{txnDetails.from}</dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">To</dt>

              <dd className="property-list__value">{txnDetails.to} </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Gas Price</dt>

              <dd className="property-list__value">
                {formatEther(txnDetails.effectiveGasPrice)} ETH
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Gas Used</dt>

              <dd className="property-list__value">
                {formatEther(txnDetails.gasUsed._hex)} ETH
              </dd>
            </dl>
            <dl className="property-list">
              <dt className="property-list__key">Contract Address</dt>

              <dd className="property-list__value">
                {txnDetails.contractAddress}
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

export default TransactionsDetails;
