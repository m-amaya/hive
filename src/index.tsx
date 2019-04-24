import 'materialize-css/dist/css/materialize.min.css';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import makeInspectable from 'mobx-devtools-mst';
import { Provider as StoreProvider } from 'mobx-react';
import { App } from './app/app';
import { Store } from './app/store';

/**
 * Create store
 */
const store = Store.create({});
makeInspectable(store);

ReactDOM.render(
  <StoreProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('app')
);
