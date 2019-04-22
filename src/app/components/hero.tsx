/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  Title,
  Subtitle,
} from '../styles/typography';

const HeroText = () => (
  <div
    className="center-align"
    css={{ width: '100%' }}>
    <div>
      <Title>The Hive</Title>
    </div>
    <div>
      <Subtitle>
        Central hub of awesome technologies.
      </Subtitle>
    </div>
  </div>
);

export const Hero = () => (
  <div className="parallax-container valign-wrapper">
    <div className="parallax">
      <img src="https://m-amaya.github.io/hive/img/hive.jpg" />
    </div>
    <HeroText />
  </div>
);
