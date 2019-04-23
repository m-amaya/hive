/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';
import { Collection } from './utils/collection';

const TOPICS_LIST = [
  'APIs',
  'Backend',
  'Charts & Graphs',
  'CLI Apps',
  'Clients',
  'CSS',
  'Data',
  'Databases',
  'DevOps',
  'DevTools',
  'Frameworks',
  'JavaScript',
  'Languages',
  'Site Generators',
  'Software',
  'Templates',
  'Testing',
  'UI',
  'Utilities',
];

export const Sidebar: SFC = () => (
  <div
    className="container"
    css={{ marginBottom: 50 }}>
    <Collection
      header="Topics"
      list={TOPICS_LIST}
    />
  </div>
);
