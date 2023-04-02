import React from 'react';
import GridBlurredBackdrop from './Testimonials';
import Parallax from './hero/PrallaxTest';

export default function Home() {
  return (
    <div style={{ marginTop: '65px' }}>
      <Parallax />
      <GridBlurredBackdrop />;
    </div>
  );
}
