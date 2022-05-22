import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider, createTheme} from "@mui/material/styles"
import { useEffect, useState } from 'react'
import { CssBaseline } from '@mui/material'
import { useCookies } from 'react-cookie'

const lightTheme = createTheme({
  palette: {
    mode: 'light'
  }
})
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

function getActiveTheme(themeMode: 'light' | 'dark') {
  return themeMode === 'light' ? lightTheme : darkTheme;
}

const PREFERENCE_COOKIE_NAME = 'theme-preference'

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [cookieTheme, setCookieTheme] = useCookies([PREFERENCE_COOKIE_NAME])

  const preferedTheme = cookieTheme && cookieTheme[PREFERENCE_COOKIE_NAME] ? cookieTheme[PREFERENCE_COOKIE_NAME] : 'light';

  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>(preferedTheme);

  const toggleTheme = () =>{
    const desiredTheme  = selectedTheme === 'light' ? 'dark' : 'light';

    setSelectedTheme(desiredTheme)
    setCookieTheme(PREFERENCE_COOKIE_NAME, desiredTheme)
  }

  useEffect(()=>{
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme])

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline/>
      <Component {...pageProps} toggleTheme={toggleTheme} themeNow={selectedTheme}  />
    </ThemeProvider>
  )
}

export default MyApp
