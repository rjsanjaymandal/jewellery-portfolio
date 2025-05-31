import React from "react";
import { ChakraProvider, Box, Heading, Text, Button } from "@chakra-ui/react";

const ChakraTest = () => {
  return (
    <ChakraProvider>
      <Box 
        minH="100vh" 
        bg="red.500" 
        color="white" 
        p={8} 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center"
      >
        <Heading size="2xl" mb={4}>
          🔴 CHAKRA UI TEST
        </Heading>
        <Text fontSize="xl" mb={6}>
          If you can see this red page with Chakra UI styling, the new dependencies are working!
        </Text>
        <Button colorScheme="blue" size="lg">
          Chakra UI Button Working!
        </Button>
        <Text mt={4} fontSize="lg">
          Time: {new Date().toLocaleTimeString()}
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default ChakraTest;
