/** @jsx jsx */
import { jsx } from '@emotion/core';
import { values } from 'ramda';
import { SFC } from 'react';
import { Collection } from './utils/collection';
import { TOPICS } from '../topics';

export const Sidebar: SFC = () => (
  <div
    className="container"
    css={{ marginBottom: 50 }}>
    <Collection
      header="Topics"
      list={values(TOPICS)}
    />
  </div>
);
