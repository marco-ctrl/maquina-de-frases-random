import React from "react";

function Botones(props){
    return (
        
      <button className="button" id="new-quote" onClick={() => props.generarFrase()}>New quote</button>
      
    );
}


export default Botones;