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

} from "@chakra-ui/react";
import { shortenAddress, timeAgo } from "../utils/index";
import { useBlock } from "../context/BlockContext";
import { Link } from "react-router-dom";

function Blocks() {
  const { block, loading } = useBlock();
  console.log(block);

  return (
    <>

      <Box boxShadow="xl">
        <TableContainer>
          <Table size={{ sm: "sm", md: "md", xl: "md" }} variant="simple">
            <Thead>
              <Tr>
                <Th>Latest Blocks</Th>
                <Th></Th>
                <Th isNumeric></Th>
              </Tr>
            </Thead>
            <Tbody>
              {!loading ? (
                block?.map((item) => (
                  <Tr key={item.number}>
                    <Td>
                      <Link to={`/blocks/${item.number}`}>{item.number}</Link>
                    </Td>
                    <Td>
                      Miner: {shortenAddress(item.miner)}
                      <br />
                      <Link to={`/txns/block/${item.number}`}>{item.transactions.length}</Link> transactions
                      <br />
                    </Td>
                    <Td isNumeric>{timeAgo(item.timestamp)}</Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td ><p className="spinner"></p></Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              )}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th><Link to="/blocks">More Details</Link></Th>
                <Th isNumeric></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default Blocks;
