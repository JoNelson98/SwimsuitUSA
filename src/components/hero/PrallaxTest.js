import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import logo from '../../Images/modelphotos/photo.jpg';

export default function Parallax() {
  return (
    <ParallaxBanner style={{ aspectRatio: '6 / 2' }}>
      <ParallaxBannerLayer>
        <div
          style={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
          }}
        >
          <h1 style={{ color: 'white' }}>SwimsuitUSA</h1>
        </div>
      </ParallaxBannerLayer>
      <ParallaxBannerLayer image={logo} speed={-20} />
    </ParallaxBanner>
  );
}
