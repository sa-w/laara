import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './store.ts'
import { Provider } from 'react-redux'
//import dotenv from 'dotenv';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './theme.tsx'


//dotenv.config()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
