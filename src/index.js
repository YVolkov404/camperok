import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from './components/App';
import { store, persistor } from '../src/redux/store.js';
import { ChakraProvider } from '@chakra-ui/react';
import { Spinner } from '@chakra-ui/react';

import theme from 'theme/Theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS>
      <Provider store={store}>
        <BrowserRouter basename="/camperok">
          <PersistGate
            loading={<Spinner variant="bold" size="xl" />}
            persistor={persistor}
          >
            <App />
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
