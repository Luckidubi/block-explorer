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
import { formatEther, shortenAddress, timeAgo } from "../utils/index";
import { useBlock } from "../context/BlockContext";
import { Link } from "react-router-dom";

function BlocksPage() {
  const { block, loading, error } = useBlock();

  return (
    <>
      <Box boxShadow="xl" px="2rem">
        <TableContainer>
          <Table

           fontSize={["14px", "16px"]}
            size="md"
            variant="simple"
          >
            <Thead>
              <Tr>
                <Th isNumeric>Blocks</Th>
                <Th isNumeric>Age</Th>
                <Th isNumeric>Txns</Th>
                <Th isNumeric>Miner</Th>
                <Th isNumeric>Gas Used</Th>
                <Th isNumeric>Gas Limit</Th>
                <Th isNumeric>Base Fee</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!loading ? (
                block?.map((item) => (
                  <Tr key={item.number}>
                    <Td>
                      <Link to={`/blocks/${item.number}`}>{item.number}</Link>
                    </Td>

                    <Td isNumeric>{timeAgo(item.timestamp)}</Td>
                    <Td isNumeric>{item.transactions.length}</Td>
                    <Td isNumeric> {shortenAddress(item.miner)}</Td>
                    <Td isNumeric>{formatEther(item.gasUsed._hex)} Eth</Td>
                    <Td isNumeric>{formatEther(item.gasLimit._hex)} Eth</Td>
                    <Td isNumeric>
                      {formatEther(item.baseFeePerGas._hex)} Eth
                    </Td>
                  </Tr>
                ))
              ) : (
                <Tr>
                  <Td>Loading...</Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              )}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th></Th>
                <Th></Th>
                <Th isNumeric></Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default BlocksPage;
