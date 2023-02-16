import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Badge,
} from "@chakra-ui/react";
import { formatEther, shortenAddress } from "../utils/index";
import { useBlock } from "../context/BlockContext";

function Transactions() {
 const {txns} = useBlock()

  return (
    <>
      <Box boxShadow="xl">
        <TableContainer >
          <Table
            overflowX="hidden"
            size={{ sm: "sm", md: "md", xl: "md" }}
            variant="simple"

          >
            <Thead>
              <Tr>
                <Th>Latest Transactions</Th>
                <Th></Th>
                <Th isNumeric></Th>
              </Tr>
            </Thead>
            <Tbody>
              {txns?.map((txn, index) => (
                <Tr key={index}>
                  <Td>{txn.hash.slice(0, 14)}...</Td>
                  <Td>
                    from: {shortenAddress(txn.from)}
                    <br />
                    to: {shortenAddress(txn.to)}
                  </Td>
                  <Td isNumeric>
                    <Badge borderRadius={3} color="black" title="Amount" variant="outline">
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

export default Transactions;
