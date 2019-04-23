/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Hero } from './components/hero';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';

export const App = () => (
  <div>
    <Hero />
    <div
      className="row"
      css={{ marginTop: '50px' }}>
      <div className="col s12 m5 l4">
        <Sidebar />
      </div>
      <div className="col s12 m7 l8">
        <Content />
      </div>
    </div>
  </div>
);
