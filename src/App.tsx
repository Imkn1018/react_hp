import React, { useContext } from 'react';
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
import { BrowserRouter } from 'react-router-dom';
import {  ThemeProvider } from './providers/ThemeProvider';

import { Router } from './Router/Router';
function App() {
  return (
    <>
      <ThemeProvider>
        <ChakraProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ChakraProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
