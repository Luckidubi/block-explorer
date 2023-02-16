import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Badge,
} from "@chakra-ui/react";
import { formatEther, shortenAddress } from "../utils/index";
import { useBlock } from "../context/BlockContext";
import { Link } from "react-router-dom";

function TransactionsPage() {
  const { txns } = useBlock();

  return (
    <>
      <Box boxShadow="xl" px="2rem">
        <TableContainer>
          <Table overflowX="hidden" size="md" variant="simple">
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
              {txns?.map((txn, index) => (
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
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th>More transactions</Th>
                <Th isNumeric></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default TransactionsPage;
