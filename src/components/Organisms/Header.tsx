import { VFC, memo, useCallback, useContext } from 'react';
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
  Link,
  Switch,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
// import { MenuButton } from '../Atoms/MenuButton';
import { MenuDrawer } from '../Molecules/MenuDrawer';
import { Theme, theme } from '../../providers/ThemeProvider';

export const Header: VFC = memo((props) => {
  const { children } = props;
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { dark, setDark } = useContext(Theme);

  const isCheckDark = () => {
    setDark(!dark);
    
  };
  const history = useHistory();

  // const onClickTop = () => alert('Top');
  // const onClickIndex = () => alert('Index');
  // const onClickSetting = () => alert('Setting');

  const onClickHome = () => history.push('/home');
  const onClickProfile = useCallback(() => history.push('/home/Profile'), [
    history,
  ]);
  const onClickImages = useCallback(() => history.push('/home/Images'), [
    history,
  ]);
  return (
    <>
      <Flex
        as="nav"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mb={0}
        bg={dark ? theme.dark.backgroundColor : theme.light.backgroundColor}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          w="100%"
          bg={dark ? theme.dark.backgroundColor : theme.light.backgroundColor}

        >
          {children}
        </Flex>
        <Button onClick={onOpen}>
          <HamburgerIcon color="gray.400" bg="white" />
        </Button>
        <Drawer placement="right" onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
            <DrawerBody>
              <Link onClick={onClickHome} >Home</Link>
              <p onClick={onClickProfile}>Profile</p>
              <p onClick={onClickImages}>Images</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Switch onChange={isCheckDark}></Switch>
      </Flex>
    </>
  );
});
