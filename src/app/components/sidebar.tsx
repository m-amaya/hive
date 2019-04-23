/** @jsx jsx */
import { jsx } from '@emotion/core';
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

export const Sidebar = () => (
  <div
    className="container"
    css={{ marginBottom: '50px' }}>
    <Collection
      header="Topics"
      list={TOPICS_LIST}
    />
  </div>
);
