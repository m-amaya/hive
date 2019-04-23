/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';
import { Hero } from './components/hero';
import { Sidebar } from './components/sidebar';
import { Content } from './components/content';
import { Footer } from './components/footer';

export const App: SFC = () => (
  <div>
    <Hero />
    <div
      className="row"
      css={{
        paddingTop: 50,
      }}>
      <div className="col s12 m5 l4">
        <Sidebar />
      </div>
      <div className="col s12 m6 l7">
        <Content />
      </div>
    </div>
    <Footer />
  </div>
);
