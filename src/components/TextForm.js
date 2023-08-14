import React, {useState} from 'react'


export default function Textform(props) {
    const handleUpClick =() =>{
        // console.log("Uppercase is clicked" + text)
        let newText = text.toUpperCase()
        setText(newText);
        props.showAlert("Converted to UpperCase!", "success")
    }
    const handleLoClick =() =>{
        // console.log("Uppercase is clicked" + text)
        let newText = text.toLowerCase()
        setText(newText);
        props.showAlert("Converted to LowerCase!", "success")
    }
    const handleOnChange =(event) =>{
        // console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('enter text here');
    // text = "new text" //wrong way to change state
    // setText("new text") //Correct way to change state
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey': 'white',
         color: props.mode === 'dark'? 'white': 'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3 mx-2" style={{color: props.mode === 'dark'? 'white': 'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
