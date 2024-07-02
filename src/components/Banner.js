import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';

const Banner = ({text}) => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar>
        <Typography variant="h2" sx={{flexGrow:1, m:1}}>
            {text}
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Banner;
