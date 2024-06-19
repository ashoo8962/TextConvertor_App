import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  
  const handleOnChange=(e)=>{
    setText(e.target.value)
  }

  const handleUpClick =()=>{
    // console.log("Uppercase clicked");
    //alert("Clicked");
    let val =text.toUpperCase();
    setText(val)
    // setText("New settext val")
  }

  const handleLoClick =()=>{
    // console.log("Uppercase clicked");
    //alert("Clicked");
    let val =text.toLowerCase();
    setText(val)
    // setText("New settext val")
  }

  const [text,setText] = useState('');
  // setText("New Text");

  return (
  <>    
  <div className='container'>
        
          <h5>{props.heading}</h5>
          <div className="form-floating">
          <textarea className="form-control mb-4"id="floatingTextarea" 
           value={text} placeholder='enter text' rows="8" onChange={handleOnChange} />
          <button onClick={handleUpClick} value="text" className="btn btn-info mx-2 ">Convert to UpperCase</button>
          <button onClick={handleLoClick} value="text" className="btn btn-info mx-2 ">Convert to LowerCase</button>
          </div>

  <div className="container my-3">
          <p>Letters are {text.length} words are {text.split(" ").length-1}</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>

          
  </div>
    
  </div>

  </>

  )
}
