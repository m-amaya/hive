/** @jsx jsx */
import { jsx } from '@emotion/core';
import { SFC, useEffect } from 'react';
import { Parallax as MParallax } from 'materialize-css';

export const Footer: SFC = () => (
  <div>
    <ParallaxPanel />
    {/* <footer className="page-footer teal lighten-1">
      <div className="container">
        <div className="row">footer</div>
      </div>
      <div className="footer-copyright teal">
        <div className="container">
          <span className="right">
            &copy; 2019 by mamaya
          </span>
        </div>
      </div>
    </footer> */}
  </div>
);

const ParallaxPanel: SFC = () => {
  useEffect(() => {
    MParallax.init(
      document.querySelectorAll('.parallax')
    );
  });

  return (
    <div
      className="parallax-container"
      css={{ height: 200 }}>
      <div className="parallax">
        <img src="https://m-amaya.github.io/hive/img/blossom.jpg" />
      </div>
    </div>
  );
};
