import MyComponents from "./components/MyComponents"
import react, { useState } from 'react';
import './App.css';

function App() {
  const x=["The first tab","the second tab","The third tab"]
  const [tap,setTap]=useState("");
  const getvalue=(value)=>{
    setTap(value);
  }
  return (
    <div className="App">
     <MyComponents movies={x} value={getvalue}/>
    <h1>{ tap }</h1>
    </div>
  );
}

export default App;