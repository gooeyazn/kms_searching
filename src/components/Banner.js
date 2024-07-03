// src/components/Banner.js
import React from 'react';
import { AppBar, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';

const Banner = ({ text }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant={isMobile ? "h6" : "h4"} component="div">
          {text}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Banner;
