import React from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

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
      <ParallaxBannerLayer image="/modelphotos/photo.jpg" speed={-20} />
    </ParallaxBanner>
  );
}
