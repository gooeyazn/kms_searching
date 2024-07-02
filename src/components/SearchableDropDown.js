// src/components/SearchableDropDown.js
import React from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

const SearchableDropDown = ({ label, value, onChange, options }) => {
    return (
        <Autocomplete
            options={options}
            getOptionLabel={(option) => option}
            value={value}
            onChange={(event, newValue) => onChange(newValue)}
            renderInput={(params) => (
                <TextField {...params} label={label} variant="outlined" />
            )}
        />
    )
}

export default SearchableDropDown
