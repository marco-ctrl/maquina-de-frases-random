import React from 'react';
import Texto from './Texto';
import Autor from './Autor';
import Botones from './Botones';
import Enlace from './Enlace';
import { AiFillTwitterSquare } from "react-icons/ai";
import { FaTumblrSquare } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import $ from 'jquery';


function Contenedor() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [frase, setFrase] = useState('');
  const [position, setPosition] = useState(0);
  const [texUrlTwit, setTexUrlTwit] = useState('');
  const [texUrlTumbl, setTexUrlTumbl] = useState('');


  useEffect(() => {
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setFrase(result);
          setPosition(Math.floor(Math.random() * result.quotes.length));

          setTexUrlTwit('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
            encodeURIComponent('"' + result.quotes[position].quote + '" ' + result.quotes[position].author));

          setTexUrlTumbl('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
            encodeURIComponent(result.quotes[position].author) +
            '&content=' +
            encodeURIComponent(result.quotes[position].quote) +
            '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');

          generarNuevoColor()
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);


  const generarNuevaFrase = () => {
    $('.quote-text').animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
      setPosition(Math.floor(Math.random() * frase.quotes.length));
    });

    $('.quote-author').animate({ opacity: 0 }, 500, function () {
      $(this).animate({ opacity: 1 }, 500);
    });
    setTexUrlTwit('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + frase.quotes[position].quote + '" ' + frase.quotes[position].author));

    setTexUrlTumbl('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(frase.quotes[position].author) +
      '&content=' +
      encodeURIComponent(frase.quotes[position].quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');

    generarNuevoColor();
  }

  const generarNuevoColor = () => {

    var simbolos, color;
    simbolos = "0123456789ABCDEF";
    color = "#";

    for (var i = 0; i < 6; i++) {
      color = color + simbolos[Math.floor(Math.random() * 16)];
    }

    document.documentElement.style.setProperty('--color', color);


  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    console.log(frase.quotes[position].quote);
    console.log(texUrlTwit);
    return (
      <div className='' id='quote-box'>
        <Texto
          texto={frase.quotes[position].quote} />
        <Autor author={frase.quotes[position].author} />
        <div className="buttons">
          <Enlace
            clase="button"
            id="tweet-quote"
            title="Tweet this quote!"
            href={texUrlTwit}
          >
            <AiFillTwitterSquare className="fa" />
          </Enlace>
          <Enlace
            clase="button"
            id="tumblr-quote"
            title="Post this quote on tumblr!"
            href={texUrlTumbl}
          >
            <FaTumblrSquare className="fa" />
          </Enlace>
          <Botones
            generarFrase={generarNuevaFrase}
          />
        </div>
      </div>
    );
  }



}

export default Contenedor;