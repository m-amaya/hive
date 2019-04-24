/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, useEffect } from 'react';
import { Parallax as MParallax } from 'materialize-css';
import {
  HeroH1,
  HeroH2,
} from '../styles/typography';

const HeroText: SFC = () => (
  <div
    className="center-align"
    css={{ width: '100%' }}>
    <div>
      <HeroH1>The Hive</HeroH1>
    </div>
    <div>
      <HeroH2>
        Central hub of awesome technologies.
      </HeroH2>
    </div>
  </div>
);

export const Hero: SFC = () => {
  useEffect(() => {
    MParallax.init(
      document.querySelectorAll('.parallax')
    );
  });

  return (
    <div className="parallax-container valign-wrapper">
      <div className="parallax">
        <img src="https://m-amaya.github.io/hive/img/hive.jpg" />
      </div>
      <HeroText />
    </div>
  );
};
