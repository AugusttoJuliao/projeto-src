import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

// obrigatório vir depois da importação do Reactotron
// senão não terá acesso as configurações do sagaMonitor ou do createEnhancer
import { store, persistor } from './store';


import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}
toast.configure()


export default App;
