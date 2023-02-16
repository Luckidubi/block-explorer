import { Box, Text } from "@chakra-ui/react";
import React from "react";


function Header() {
  return (
    <>
      <Box
        color="darkgray"
        bg="#fff"
        display="flex"
        px="2rem"
        py="2rem"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <Text fontSize="26px" fontWeight="700">
          Block Explorer
        </Text>
      </Box>

    </>
  );
}

export default Header;
