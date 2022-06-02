import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaTumblrSquare } from "react-icons/fa";

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
      /*<a className="button" 
          id="tweet-quote" 
          title="Tweet this quote!" 
          target="_top" 
          href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22Life%20shrinks%20or%20expands%20in%20proportion%20to%20one%E2%80%99s%20courage.%22%20Anais%20Nin"
          >
          <AiFillTwitterSquare className="fa" />
        </a>*/
    );
  }

export default Enlace;