import React from 'react'
import { useState } from 'react'
import gif from '../images/propose2.gif'
import midGif from '../images/dudu.gif'
import finalGif from '../images/final.gif'

export const Body = () => {
    const [gifSrc, setGifSrc] = useState(gif);
    const start = ()=>{
        let x = Math.floor((Math.random() * 1000) -500);
        let y = Math.floor((Math.random() * 1000) - 500);
        let element = document.getElementById('no_button');
        element.style.transform = `translate(${x}px, -${y}px)`;
        element.style.transform = "transition(1s)"
    }
    const last_option= ()=>{
        let element = document.getElementById('no_button');
        element.style.visibility= "hidden";
        setGifSrc(midGif);
    }
    const final=()=>{
        
    }
  return (
    <div className='main_body'>
        <p className='propose_text'>Will you go on a date with me???</p>
        <div className='image_main'>
        <img src={gifSrc} alt='media is not loading in your device' />
        </div>
        <div className='buttons'>
        <button onClick={final}>Yes</button>
        <button id='no_button' onMouseEnter={start} onClick={last_option}>No</button>
        </div>
    </div>
  )
}
