import { Box, Center } from "@chakra-ui/react";
import React from "react";
import Blocks from "../components/Blocks";
import Transactions from "../components/Transactions";
import { useBlock } from "../context/BlockContext";

function Home() {
  const {error} = useBlock()



  if (error) return <Center>No Data, try again </Center>
  return (
    <>
      <Box
        display="flex"
        gap="1rem"
        flexDirection={{ base: "column", lg: "row" }}
        px="2rem"
        py="2rem"
        alignItems="flex-start"
        justifyContent="center"
        mb={4}
        overflowX="scroll"
      >

    <Blocks />
        <Transactions />
      </Box>
    </>
  );
}

export default Home;
