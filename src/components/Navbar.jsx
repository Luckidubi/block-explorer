import { Box } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <>
      <Box
        display="flex"
        fontWeight="500"
        fontSize="18px"
        gap="1rem"
        justifyContent="flex-end"
        px="2rem"
        alignItems="center"
        mb="2rem"
      >
        <p> Home </p>

        <p>Account</p>
      </Box>
    </>
  );
}

export default Navbar;
