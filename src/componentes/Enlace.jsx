import React from "react";

function Enlace(props){
    return (
      <a className={props.clase} 
          id={props.id} 
          title={props.title} 
          target={"_blank"} 
          href={props.href}
          >
          {props.children}
        </a>
    );
  }

export default Enlace;