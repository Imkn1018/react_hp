import { VFC, memo } from 'react';
import { useDisclosure, Flex, Heading} from '@chakra-ui/react';
import { MenuButton } from '../Atoms/MenuButton';
import { MenuDrawer } from '../Molecules/MenuDrawer';

type Props = {
  children: string
  bg: string
}

export const Main: VFC<Props> = memo((props) => {
  const {children, bg} = props
 
  return (
    <>
      <Flex
        as="nav"
        bg={bg}
        color="gray.300"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
        mb={0}
        
      >
        <Flex h={{base: 'md'}}>{children}</Flex>
        
      </Flex>
    </>
  );
});
