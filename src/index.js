import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

import App from './components/App';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

ReactDOM.render(
  <Provider store={store}>
<PersistGate loading={null} persistor={persistor} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
