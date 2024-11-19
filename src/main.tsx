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

import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./index.css";
import PropertyFull from './components/PropertyFull.tsx'
import ErrorComponent from './components/ErrorComponent.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorComponent />,
  },
  {
    path: "property/:propertyId",
    element: <PropertyFull/>,
    errorElement: <ErrorComponent />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <RouterProvider router = {router}>  
      </RouterProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
