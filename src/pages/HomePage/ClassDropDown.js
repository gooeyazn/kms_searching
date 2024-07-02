import React from 'react';
import SearchableDropDown from '../../components/SearchableDropDown';
import { classes } from '../../constants/classes';

const ClassDropDown = ({ selectedClass, onClassChange }) => {
  return (
    <SearchableDropDown
      label="Class"
      value={selectedClass}
      onChange={onClassChange}
      options={Object.keys(classes)}
    />
  );
};

export default ClassDropDown;
