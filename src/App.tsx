import React from 'react';
import { ChakraProvider, Flex, Container, Box, Text } from '@chakra-ui/react';

import { Header } from '../src/components/Organisms/Header';
import { Main } from '../src/components/Organisms/Main';
function App() {
  return (
    <>
      <ChakraProvider>
        <Header></Header>
        {/* <Container>
          <Box h={{base: "md"}} bg="white">main</Box>
          <Box h={{base: "md"}} bg="white.300">nau</Box>
          <Box h={{base: "md"}} bg="white.500">ddddddd</Box>
        </Container> */}
        <Flex flexDirection="column">
          <Flex h={{ base: 'md' }} bg="white" flexDirection="column" pt={20} pr={5}>
            <Text align="right"  fontSize="2.3rem">グラデーション。</Text>
            <Text align="right" mr={4} mt={4} ml={40} fontSize="1rem">グラデーション。ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</Text>
          </Flex>
          <Flex h={{ base: 'md' }} bg="gray.300" flexDirection="column">
            <Text align="right" m={4}>-my profile</Text>
          </Flex>
          <Flex h={{ base: 'md' }} bg="gray.500" flexDirection="column">
          <Text align="right" m={4}>-images</Text>
          </Flex>
        </Flex>
        <div>footer</div>
      </ChakraProvider>
    </>
  );
}

export default App;
