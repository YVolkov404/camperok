import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './components/App';
import { store, persistor } from '../src/redux/store.js';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme} resetCSS>
        <BrowserRouter basename="/test-project">
          <PersistGate
            loading={<Spinner variant="" size="xl" />}
            persistor={persistor}
          >
            <App />
          </PersistGate>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
