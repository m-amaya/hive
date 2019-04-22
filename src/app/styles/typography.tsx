/** @jsx jsx */
import { jsx } from '@emotion/core';

export const Title = (props: React.Props<{}>) => (
  <h1
    className="pink white-text z-depth-2"
    css={{
      display: 'inline-flex',
      fontWeight: 800,
      margin: 0,
      padding: '1rem',
    }}>
    {props.children}
  </h1>
);

export const Subtitle = (
  props: React.Props<{}>
) => (
  <h2
    className="white pink-text z-depth-2"
    css={{
      display: 'inline-flex',
      fontSize: '2rem',
      fontWeight: 200,
      margin: 0,
      padding: '1rem',
    }}>
    {props.children}
  </h2>
);
