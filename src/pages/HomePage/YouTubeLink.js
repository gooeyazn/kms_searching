import React from 'react';
import { Typography, Link } from '@mui/material';
import { classes } from '../../constants/classes';
import { maps } from '../../constants/maps';
import urlFactory from '../../helpers/urlFactory';

const YouTubeLink = ({ selectedValues }) => {
  const { class: selectedClass, area: selectedArea, map: selectedMap } = selectedValues;

  const classTranslation = classes[selectedClass];
  const mapTranslation = selectedMap ? maps[selectedArea][selectedMap] : '';
  const isURLReady = selectedClass && selectedArea && selectedMap;

  return (
    <>
      {isURLReady && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>YouTube Link:</Typography>
          <Link href={urlFactory(classTranslation, selectedArea, mapTranslation)} target="_blank" rel="noopener">
            {`${selectedClass} at ${selectedMap}`}
          </Link>
        </>
      )}
    </>
  );
};

export default YouTubeLink;
