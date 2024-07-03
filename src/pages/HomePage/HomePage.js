import React, { useState } from 'react';
import { Box, Grid, Checkbox, FormControlLabel } from '@mui/material';
import ClassDropDown from './ClassDropDown';
import AreaDropDown from './AreaDropDown';
import MapDropDown from './MapDropDown';
import YouTubeLink from './YouTubeLink';
import Banner from '../../components/Banner';

const HomePage = () => {
  const [selectedValues, setSelectedValues] = useState({
    class: '',
    area: '',
    map: '',
    lazy: false  // Updated state property name
  });

  const handleValueChange = (key, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [key]: value,
      ...(key === 'area' ? { map: '' } : {}),
    }));
  };

  const handleLazyChange = (event) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      lazy: event.target.checked,
    }));
  };

  return (
    <Box sx={{ p: 3, paddingTop: 'calc(2rem + 32px)' }}>
      <Banner text={"MapleStory KMS Class Lookup"} />
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <ClassDropDown
            selectedClass={selectedValues.class}
            onClassChange={(value) => handleValueChange('class', value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AreaDropDown
            selectedArea={selectedValues.area}
            onAreaChange={(value) => handleValueChange('area', value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MapDropDown
            selectedArea={selectedValues.area}
            selectedMap={selectedValues.map}
            onMapChange={(value) => handleValueChange('map', value)}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedValues.lazy}
                onChange={handleLazyChange}
                color="primary"
              />
            }
            label="Lazy Rotation?"
          />
        </Grid>
        {selectedValues.class && selectedValues.area && selectedValues.map && (
          <Grid item xs={12}>
            <YouTubeLink selectedValues={selectedValues} />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default HomePage;
