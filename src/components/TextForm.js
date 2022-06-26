import React, { useState } from 'react'



export default function TextForm(props) {
  const [text, setText] = useState('');

  
    const upclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("UpperCase Converted","success")
        document.title ="Uppercase Converted";
    }
    const toclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Lowercase Converted","success")
        document.title ="Lowercase Converted";
    }
    const toclear = ()=>{
      let newText ="";
      setText(newText)
      props.showalert("clear text","success")
      document.title ="clear text";
  } 

  const tocopy = ()=> {
    var text  = document.getElementById('box');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy Success","success")
    document.title ="Copy Success";
  }

  const remove_space = ()=> {
  let newText = text.split(/[ ] +/);
  setText(newText.join(" "));
  props.showalert("Remove Space","success")
  document.title ="Remove Space";
  
  }
  
 

    const headingupclick = (event)=>{
        setText(event.target.value);
    }
   
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
