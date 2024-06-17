import { useState } from 'react'
//import Box from '@mui/material/Box';
import DropDown from './components/dropDown'
import {classes, maps} from './constants'
import urlFactory from './helpers/urlFactory'

function App() {
  const [state, setState] = useState({
    class: '',
    area: '',
    map: ''
  })

  const handleChange = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }))
  }

  return (
    <div>
      <DropDown
        label="class"
        value={state.class}
        onChange={(value) => handleChange('class', value)}
        options={Object.keys(classes)}
      />
      <DropDown
        label="area"
        value={state.area}
        onChange={(value) => handleChange('area', value)}
        options={Object.keys(maps)}
      />
      <DropDown
        label="map"
        value={state.map}
        onChange={(value) => handleChange('map', value)}
        options={Object.keys(maps[state.area]) || []}
      />
      <div>
        <h3>Selected Values:</h3>
        <p>Class: {state.class}</p>
        <p>Area: {state.area}</p>
        <p>Map: {state.map}</p>

        <h3>Youtube Link:</h3>
        <a href={urlFactory(state.class, state.area, state.map) || ""}>{state.class + " at " + state.map}</a>
      </div>
    </div>
  )
}

export default App
