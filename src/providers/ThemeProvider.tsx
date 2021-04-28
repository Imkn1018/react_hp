import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type Dark ={
  dark: boolean
  setDark: Dispatch<SetStateAction<boolean>>
}

export const Theme = createContext({} as Dark);

export const ThemeProvider = (props :{children: ReactNode}) => {
  const {children} = props
  const [dark, setDark] = useState(false);
  return <Theme.Provider value={{ dark, setDark }}>{children}</Theme.Provider>;
};
