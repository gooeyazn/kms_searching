import React from 'react';
import { AppBar, Box, Typography } from '@mui/material';

const Banner = () => {

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar>
        <Typography variant="h2" sx={{flexGrow:1, m:1}}>
            MapleStory KMS YouTube Searcher
        </Typography>
      </AppBar>
    </Box>
  );
};

export default Banner;
