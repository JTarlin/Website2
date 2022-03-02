import { createContext, useContext, useState, ReactNode } from 'react';

type siteContextType = {
  uiDark: boolean,
  easterEggs: boolean,
  toggleDark: ()=> void,
  toggleEasterEggs: ()=>void,
}

const siteContextDefaultValues: siteContextType = {
  uiDark: false,
  easterEggs: false,
  toggleDark: ()=>{},
  toggleEasterEggs: ()=>{},
};

const SiteContext = createContext<siteContextType>(siteContextDefaultValues);

export function useSiteContext() {
  return useContext(SiteContext);
}

type Props = {
  children: ReactNode,
}

export function SiteContextProvider({ children }: Props) {
  const [uiDark, setUiDark] = useState<boolean>(false);
  const [easterEggs, setEasterEggs] = useState<boolean>(false);

  const toggleDark = () => {
    localStorage.setItem('dark', `${!uiDark}`);
    setUiDark(!uiDark);
    
  }
  const toggleEasterEggs = () => {
    localStorage.setItem('easterEggs', `${!easterEggs}`);
    setEasterEggs(!easterEggs);
  }
  
  const value = {
    uiDark,
    easterEggs,
    toggleDark,
    toggleEasterEggs,
  };

  return (
    <>
      <SiteContext.Provider value={value}>
        {children}
      </SiteContext.Provider>
    </>
  )

}