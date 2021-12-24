import './App.css';
import BoxForm from './Components/BoxForm';
import Box from './Components/Box';
import { useState } from 'react';
import React from 'react';
function App() {

  const [box, setBox] = useState([]);


  const creatbox = (color, hieght, width) => {
    var boxa = {
      color: color,
      hieght: (hieght + "px"),
      width: (width + "px")
    }

    setBox([...box, boxa]);
    console.log(box);


  }


  return (
    <>
      <BoxForm proparity={creatbox} />
      <Box boxa={box} />
    </>
  );
}

export default App;