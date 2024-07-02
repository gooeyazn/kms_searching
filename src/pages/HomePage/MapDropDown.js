import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { maps } from '../../constants/maps';

const MapDropDown = ({ selectedArea, selectedMap, onMapChange }) => {
  const mapOptions = selectedArea ? Object.keys(maps[selectedArea]) : [];

  return (
    <SearchableDropDown
      label="Map"
      value={selectedMap}
      onChange={onMapChange}
      options={mapOptions}
    />
  );
};

export default MapDropDown;
