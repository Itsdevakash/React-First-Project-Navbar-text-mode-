import React, { useState } from 'react'



export default function TextForm(props) {

    const upclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const toclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const toclear = ()=>{
      let newText ="";
      setText(newText)
  } 

  const tocopy = ()=> {
    var text  = document.getElementById('box');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const remove_space = ()=> {
  let newText = text.split(/[ ] +/);
  setText(newText.join(" "));
  }
  
 

    const headingupclick = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <form>
        <div className="form-group">
        <label>{props.heading} </label>
        <textarea className="form-control" id="box" value={text} onChange={headingupclick}  rows="10"></textarea>
        </div>
        <button type="button" className="btn btn-primary btn-sm" onClick={upclick}>Convert To Uppercase</button>
        &nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-primary btn-sm" onClick={toclick}>Convert To LowerCase</button>
        &nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-primary btn-sm" onClick={toclear}>Clear</button>
        &nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-primary btn-sm" onClick={tocopy}>copyToClipboard</button>
        &nbsp;&nbsp;&nbsp; <button type="button" className="btn btn-primary btn-sm" onClick={remove_space}>Remove Space</button>
  </form>
<br></br>
  <div className='container'>
   <p> {text.split(" ").filter((t)=>t!=="").length} words and {text.length} Characters</p>  
    <p>{0.008  *  text.split(" ").length} Minutes Read </p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>
  </>
  )
}
