import { memo, VFC } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

type Props = {
  onOpen: () => void;
};

export const MenuButton: VFC<Props> = memo((props) => {
  const { onOpen } = props;
  return (
    <>
    </>
    // <IconButton
    //   aria-label="Menu"
    //   icon={<HamburgerIcon />}
    //   size="sm"
    //   variant="unstyled"
    //   display={{ base: 'block' }}
    //   onClick={onOpen}
    // />
  );
});
