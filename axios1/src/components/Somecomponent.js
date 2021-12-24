import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Somecomponent = (props) => {
    const [responseData, setResponseData] = useState([]);
 
    const useEffect= () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        .then(response =>setResponseData(response.data.results));
    };
 
    return (
       
        <>
        <button onClick={useEffect}>Fetch API</button>
            { responseData.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
            
        </>
        
    );
    
}
export default Somecomponent;