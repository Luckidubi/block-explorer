import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };
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
        <Text
          _hover={{ cursor: "pointer" }}
          onClick={handleClick}
          fontSize="26px"
          fontWeight="700"
        >
          Block Explorer
        </Text>
      </Box>
    </>
  );
}

export default Header;
