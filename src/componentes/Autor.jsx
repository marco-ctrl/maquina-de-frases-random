import React from "react";

function Autor({ author }) {
  return (
    <div className="quote-author">
      - <span id="author">{author}</span>
    </div>
  );
}

export default Autor; 

