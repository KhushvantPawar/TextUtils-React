import React, { useState } from 'react'
export default function Textform(props) {
  const HandleUpClick = () => {
    //console.log('Uppercase was clicked');
    let newText = text.toUpperCase();
    setText(newText);
  }
  const HandleLoClick = () => {
    //console.log('Uppercase was clicked');
    let newText = text.toLowerCase();
    setText(newText);
  }
  const HandleReClick = () => {
    let newText= text.split("").reverse().join("");
    setText(newText);
  }
  const HandleOnChange = (event) => {
    console.log('On change');
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnChange} id="myBox" rows="3"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={HandleUpClick}> Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={HandleLoClick}> Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={HandleReClick}> Reverse text</button>
      <div className="container my-3">
       <h2>Your Text Summary</h2>
       <p>{text.split(" ").length} words and {text.length} Characters</p>
      </div>
    </div>
    </>
  )
}
