import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import WithSubnavigation from './components/Nav';
import Footer from './components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <ChakraProvider theme={theme}>
        <Grid minH="100vh">
          <WithSubnavigation />
          <Routes>
            <Route path="/swimsuitusa/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Grid>

        <Footer />
      </ChakraProvider>
    </ParallaxProvider>
  );
}

export default App;
