import React from 'react';
import { render } from 'react-dom';
//import ChakraProvider component to use ChakraUI
import { ChakraProvider } from '@chakra-ui/react';
import App from './components/App.jsx';

// rendering full app - added root script
render(
  <ChakraProvider >
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
