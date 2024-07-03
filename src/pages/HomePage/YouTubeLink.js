import React from 'react';
import { Typography, Link } from '@mui/material';
import { classes } from '../../constants/classes';
import { maps } from '../../constants/maps';
import urlFactory from '../../helpers/urlFactory';

const YouTubeLink = ({ selectedValues }) => {
  const { class: selectedClass, area: selectedArea, map: selectedMap, lazy: lazy } = selectedValues;

  const classTranslation = classes[selectedClass] || '';
  const mapTranslation = selectedMap ? maps[selectedArea][selectedMap] : '';
  const areaTranslation = selectedArea ? maps[selectedArea].name : ''; // Assuming there's a name field for the area
  const isClassSelected = Boolean(selectedClass);

  const getLinkText = () => {
    if (selectedMap) {
      return `${selectedClass} at ${selectedMap}`;
    }
    if (selectedArea) {
      return `${selectedClass} at ${selectedArea}`;
    }
    return `${selectedClass} Training`;
  };

  return (
    <>
      {isClassSelected && (
        <>
          <Typography variant="h6" sx={{ mt: 2 }}>YouTube Link:</Typography>
          <Link
            href={urlFactory(classTranslation, selectedMap ? mapTranslation : (selectedArea ? areaTranslation : ''), lazy)}
            target="_blank"
            rel="noopener"
          >
            {getLinkText()}
          </Link>
        </>
      )}
    </>
  );
};

export default YouTubeLink;
