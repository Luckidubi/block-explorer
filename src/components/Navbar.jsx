import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

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
        <p><Link to="/">Home </Link> </p>

        <p><Link to="/account">Account</Link></p>
      </Box>
    </>
  );
}

export default Navbar;
