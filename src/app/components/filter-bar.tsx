/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';
import { Input } from './utils/input';
import { Dropdown } from './utils/dropdown';
import { Title } from '../styles/typography';

export const FilterBar: SFC = () => (
  <div className="row valign-wrapper">
    <div className="col s8">
      <Input />
    </div>
    <div className="col s4 right-align">
      <Dropdown />
    </div>
  </div>
);
