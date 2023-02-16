import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Badge,
  Center,
  TableCaption,
  Heading,
  Text,
} from "@chakra-ui/react";
import { alchemy, formatEther, shortenAddress } from "../utils/index";
import { Link, useParams } from "react-router-dom";

function TransactionsPage() {
  const { id } = useParams();
  const [txns, setTxn] = useState();
  let txnArray = [];
  useEffect(() => {
    async function getTxn() {
      let txn = await alchemy.core.getBlockWithTransactions(parseInt(id));
      for (let trxn of txn.transactions) {
        txnArray.push(trxn);
      }
      setTxn(txnArray);
      console.log(txnArray);
    }

    getTxn();
  }, [id]);

  return (
    <>
      <Box boxShadow="xl" px="2rem">
        <Heading size="md">Transactions</Heading>
        <Text mb="1rem" py=".3rem">
          For Block <Link to={`/blocks/${id}`}>{id}</Link>
        </Text>
        <hr />
        <TableContainer>
          <Table overflowX="hidden" size="md" variant="simple">
            <TableCaption textAlign="left" placement="top">
              A total of {txns?.length} transactions found
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Txn Hash</Th>

                <Th>Block</Th>

                <Th>From</Th>
                <Th>To</Th>
                <Th isNumeric>Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {txns ? (
                txns?.map((txn, index) => (
                  <Tr key={index}>
                    <Td>
                      <Link to={`/txns/${txn.hash}`}>
                        {txn.hash.slice(0, 14)}...
                      </Link>
                    </Td>
                    <Td>
                      <Link to={`/blocks/${txn.blockNumber}`}>
                        {txn.blockNumber}
                      </Link>
                    </Td>

                    <Td>{shortenAddress(txn.from)}</Td>
                    <Td>{shortenAddress(txn.to)}</Td>
                    <Td isNumeric>
                      <Badge
                        borderRadius={3}
                        color="black"
                        title="Amount"
                        variant="outline"
                      >
                        {formatEther(txn.value._hex)} Eth
                      </Badge>
                    </Td>
                  </Tr>
                ))
              ) : (
                <Center className="spinner"></Center>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default TransactionsPage;
