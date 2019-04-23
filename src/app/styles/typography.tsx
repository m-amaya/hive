/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Props } from 'react';
import cn from 'classnames';

export const HeroH1 = (props: Props<{}>) => (
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

export const HeroH2 = (props: Props<{}>) => (
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

export const Title = (props: Props<{}>) => (
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

interface ITextProps extends Props<{}> {
  truncate?: boolean;
}

export const Text = (props: ITextProps) => {
  const truncate = props.truncate ? true : false;

  return (
    <span
      className={cn({ truncate })}
      css={{ color: '#000', fontSize: 15 }}>
      {props.children}
    </span>
  );
};
