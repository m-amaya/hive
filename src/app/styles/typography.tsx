/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { SFC } from 'react';

export const HeroH1: SFC = (props) => (
  <h1
    className="pink white-text z-depth-2"
    css={{
      display: 'inline-flex',
      fontSize: 60,
      fontWeight: 800,
      margin: 0,
      padding: '15px 25px',
    }}>
    {props.children}
  </h1>
);

export const HeroH2: SFC = (props) => (
  <h2
    className="white pink-text z-depth-2"
    css={{
      display: 'inline-flex',
      fontSize: 30,
      fontWeight: 200,
      margin: 0,
      padding: '15px 25px',
    }}>
    {props.children}
  </h2>
);

export const Title: SFC = (props) => (
  <div
    className="valign-wrapper"
    css={{
      fontSize: 25,
      fontWeight: 700,
      height: 50,
    }}>
    {props.children}
  </div>
);

export const Text: SFC = (props) => (
  <span css={{ color: '#000', fontSize: 15 }}>
    {props.children}
  </span>
);

export const Label = styled.div({
  fontSize: 14,
  fontWeight: 700,
  textTransform: 'uppercase',
});
