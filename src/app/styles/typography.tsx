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

export const Title = styled.div({
  display: 'inline-flex',
  fontSize: 20,
  fontWeight: 700,
  marginBottom: 10,
});

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

export const Tag: SFC = styled.span({
  backgroundColor: '#009688',
  borderRadius: 9,
  color: '#fff',
  fontSize: 12,
  fontWeight: 300,
  marginRight: 5,
  padding: '2px 8px',
});
