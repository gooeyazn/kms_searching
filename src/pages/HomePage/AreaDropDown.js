import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { maps } from '../../constants/maps';

const AreaDropDown = ({ selectedArea, onAreaChange }) => {
  return (
    <SearchableDropDown
      label="Area"
      value={selectedArea}
      onChange={onAreaChange}
      options={Object.keys(maps)}
    />
  );
};

export default AreaDropDown;
