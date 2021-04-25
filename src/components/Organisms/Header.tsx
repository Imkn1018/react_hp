import { VFC, memo } from 'react';
import {
  useDisclosure,
  Flex,
  Heading,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

// import { MenuButton } from '../Atoms/MenuButton';
import { MenuDrawer } from '../Molecules/MenuDrawer';

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  // const onClickTop = () => alert('Top');
  // const onClickIndex = () => alert('Index');
  // const onClickSetting = () => alert('Setting');

  return (
    <>
      <Flex
        as="nav"
        bg="white"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mb={0}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          w="100%"
        ></Flex>
        <Button onClick={onOpen} >
         <HamburgerIcon color="gray.400" bg="white"/>
        </Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
      
    </>
  );
});
