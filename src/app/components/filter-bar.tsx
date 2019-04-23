/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC } from 'react';
import { Input } from './utils/input';
import { Dropdown } from './utils/dropdown';
import { Title } from '../styles/typography';

export const FilterBar: SFC = () => (
  <div
    className="valign-wrapper"
    css={{ justifyContent: 'space-between' }}>
    <div>
      <Title>Technologies</Title>
    </div>
    <div className="valign-wrapper">
      <Input />
      <Dropdown />
    </div>
  </div>
);
