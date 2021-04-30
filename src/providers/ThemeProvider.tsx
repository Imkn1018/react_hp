import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';

export const theme = {
  light: {
    color: 'black.200',
    backgroundColor: 'white',
  },
  dark: {
    color: 'white',
    backgroundColor: 'black',
  },
};

export type Dark = {
  isDark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
};

export const Theme = createContext({} as Dark);

export const ThemeProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isDark, setDark] = useState(false);

  return <Theme.Provider value={{ isDark, setDark }}>{children}</Theme.Provider>;
};
