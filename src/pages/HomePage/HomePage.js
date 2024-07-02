import React, { useState } from 'react';
import { Box } from '@mui/material';
import ClassDropDown from './ClassDropDown';
import AreaDropDown from './AreaDropDown';
import MapDropDown from './MapDropDown';
import SelectedValuesDisplay from '../../components/SelectedValuesDisplay';
import YouTubeLink from './YouTubeLink';

const HomePage = () => {
  const [selectedValues, setSelectedValues] = useState({
    class: '',
    area: '',
    map: ''
  });

  const handleValueChange = (key, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
      ...(key === 'area' ? { map: '' } : {}),
    }));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 2 }}>
        <ClassDropDown
          selectedClass={selectedValues.class}
          onClassChange={(value) => handleValueChange('class', value)}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <AreaDropDown
          selectedArea={selectedValues.area}
          onAreaChange={(value) => handleValueChange('area', value)}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <MapDropDown
          selectedArea={selectedValues.area}
          selectedMap={selectedValues.map}
          onMapChange={(value) => handleValueChange('map', value)}
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <SelectedValuesDisplay selectedValues={selectedValues} />
      </Box>
      <Box>
        <YouTubeLink selectedValues={selectedValues} />
      </Box>
    </Box>
  );
};

export default HomePage;
