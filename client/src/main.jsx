
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'
import React from 'react';
import { createContext } from 'react';

export const Context = createContext({isAuthenticated: false})

const AppWrapper = () => {
  const [blogs, setBlogs] = useState({});

  return (
    <Context.Provider 
    value={{blogs, setBlogs}}>
      <App />
    </Context.Provider>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)
