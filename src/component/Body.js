import React from 'react'
import { useState } from 'react'
import gif from '../images/propose2.gif'
import midGif from '../images/dudu.gif'
import finalGif from '../images/final.gif'


    const Body = () => {
    const [gifSrc, setGifSrc] = useState(gif);
    const [text, setText] = useState("Will you go on a date with me???")
    const start = ()=>{
        let x = Math.floor((Math.random() * 100) +1);
        let y = Math.floor((Math.random() * 100) +1);
        let element = document.getElementById('no_button');
        element.style.transform = `translate(${x}px, -${y}px)`;
        element.style.transform = "transition(1s)"
    }
    const last_option= ()=>{
        let element = document.getElementById('no_button');
        element.style.visibility= "hidden";
        setGifSrc(midGif);
        setText("No is not an option")
    }
    const final=()=>{
        setGifSrc(finalGif);
        setText("Hurrah ab to mutaki mere saath date par jaegi")
        let btn = document.getElementById("btn"); 
        btn.style.visibility = "hidden";

    }
  return (
    <div className='main_body'>
        <p className='propose_text'>{text}</p>
        <div className='image_main'>
        <img src={gifSrc} alt='media is not loading in your device' />
        </div>
        <div className='buttons' id='btn'>
        <button onClick={final} className='btn'>Yes</button>
        <button id='no_button'className='btn' onMouseEnter={start} onClick={last_option}>No</button>
        </div>
    </div>
  )
}

export default Body;
