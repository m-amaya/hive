/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';
import { FilterBar } from './filter-bar';
import { Card } from './utils/card';

export const Content: SFC = () => (
  <div>
    <FilterBar />
    <div className="row" css={{ marginTop: 25 }}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
);
