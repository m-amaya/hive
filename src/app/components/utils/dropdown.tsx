/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';

export const Dropdown: SFC = () => (
  <div>
    <a
      className="dropdown-trigger btn pink waves-effect waves-light"
      data-target="sort-dropdown">
      Name
      <i className="material-icons right">sort</i>
    </a>
    <ul
      id="sort-dropdown"
      className="dropdown-content">
      <li>item</li>
    </ul>
  </div>
);
