import 'materialize-css/dist/css/materialize.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Parallax,
  Dropdown,
} from 'materialize-css';
import { App } from './app/app';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    Dropdown.init(
      document.querySelectorAll(
        '.dropdown-trigger'
      )
    );
    Parallax.init(
      document.querySelectorAll('.parallax')
    );
  }
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
