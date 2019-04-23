/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';

export const Input: SFC = () => (
  <div
    className="valign-wrapper"
    css={{ marginRight: 20 }}>
    <i
      className="material-icons"
      css={{ marginRight: 10 }}>
      search
    </i>
    <input
      css={{
        'height': '36px !important',
        'margin': '0px !important',
        '&::placeholder': {
          color: '#9e9e9e',
          fontWeight: 300,
        },
      }}
      type="text"
      placeholder="Search"
    />
  </div>
);
