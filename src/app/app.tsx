/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Hero } from './components/hero';

export const App = () => (
  <div>
    <Hero />
    <div className="row">
      <div className="col s3">side</div>
      <div className="col s9">content</div>
    </div>
  </div>
);
