import React from 'react';
import { Box, Typography } from '@mui/material';
import { classes } from '../constants/classes';
import { maps } from '../constants/maps';

const SelectedValuesDisplay = ({ selectedValues }) => {
  const { class: selectedClass, area: selectedArea, map: selectedMap } = selectedValues;

  const classTranslation = classes[selectedClass];
  const mapTranslation = selectedMap ? maps[selectedArea][selectedMap] : '';

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Selected Values:</Typography>
      <Typography variant="body1">Class: {selectedClass} ({classTranslation})</Typography>
      <Typography variant="body1">Area: {selectedArea}</Typography>
      <Typography variant="body1">Map: {selectedMap} ({mapTranslation})</Typography>
    </Box>
  );
};

export default SelectedValuesDisplay;
