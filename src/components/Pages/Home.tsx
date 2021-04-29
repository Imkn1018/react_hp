import { memo, useContext } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import {
  ChakraProvider,
  Flex,
  Container,
  Box,
  Text,
  HStack,
  Image,
  Switch,
} from '@chakra-ui/react';
import { Header } from '../Organisms/Header';
import { Main } from '../Organisms/Main';

export const Home = memo(() => {
  return (
    <Flex flexDirection="column">
      {/* <Container>
          <Box h={{base: "md"}} bg="white">main</Box>
          <Box h={{base: "md"}} bg="white.300">nau</Box>
          <Box h={{base: "md"}} bg="white.500">ddddddd</Box>
        </Container> */}
      <Flex flexDirection="column">
        <Flex
          h={{ base: 'md' }}
          w="100%"
          flexDirection="column"
          pt={20}
          pr={5}
          bgImage="url(https://source.unsplash.com/featured/?nature)"
          bgSize="cover"
        >
          <Text align="right" fontSize={{ sm: '2rem', md: '2.3rem' }} pl={2}>
            まだ感じたこともない
            <br />
            体験を。
          </Text>
          <Text align="right" mr={4} mt={4} ml={40} fontSize="1rem">
            グラデーション。ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </Text>
        </Flex>
        <Flex h={{ base: 'md' }} bg="gray.300" flexDirection="column">
          <Text align="right" m={4}>
            --------about me
          </Text>
          <Text fontSize="2rem" p={3}>
            texttext
          </Text>
          <Flex flexDirection="column" mt={2} pl={7}>
            <Text>多様性</Text>
            <Text>矛盾を愛する</Text>
            <Text>グラデーションを大切に</Text>
            <Text>dddddddd</Text>
            <Text>dddddddddd</Text>
          </Flex>
        </Flex>
        <Flex h={{ base: 'md' }} bg="gray.500" flexDirection="column">
          <Text align="right" m={4}>
            --------images
          </Text>
          <Text p={3} fontSize="2rem">
            texttext
          </Text>
          <HStack spacing="24px" mx="auto" my={5}>
            <Box h="50%" w="40%" bg="white" borderRadius="lg" />
            <Box h={40} w={40} bg="white" />
          </HStack>
        </Flex>
      </Flex>
      <div>footer</div>
    </Flex>
  );
});
