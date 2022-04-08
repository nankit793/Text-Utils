import React, { useState } from 'react'
export default function TextArea(props) {

  const dataChange = (event) => 
 {  setText(event.target.value) }
 
  const [Alert, setAlert] = useState(null);
  const [text, setText] = useState("");

  const copyText = () => {
    navigator.clipboard.writeText(text);
    setAlert('text copied to clipboard')
  }
  const removeSpace = ()=>{
   let newtext = text.split('  ');
   setText(newtext.join(' '))
   setAlert('Extra Spaces Removed')
  }
  
  const clearText = () => {
    console.log(text);
    let newtext = '';
    setText(newtext)
    setAlert('Text Cleared')  }
  const dataManageUp = () => {
    console.log(text);
    let newtext = text.toUpperCase();
    setAlert('Converted to Upper Case')
    setText(newtext)
  }
  const dataManageLow = () => {
    console.log(text);
    let newtext = text.toLowerCase();
    setText(newtext)
    setAlert('Converted to Lower Case')
  }

return (
  <>
      <div className='container textarea' >
        <div className="form-group">
     { Alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
         <strong>{Alert}</strong>      
        </div>  
        }
        <textarea 
        style={{   backgroundColor: '#0000004d',  color: props.mode === 'dark'? 'black': 'white'}} 
        className="form-control" value={text} placeholder='Enter Your Text' onChange={dataChange}  rows="13">  
          </textarea>
          <input type="button" disabled={text.length===0}  onClick={dataManageUp} className='my-3 btn btn-primary' value='Upper Case' />
          <input type="button" disabled={text.length===0}onClick={dataManageLow} className='my-3 mx-1 btn btn-primary' value='Lower Case' />
          <input type="button" disabled={text.length===0}onClick={copyText} className='my-3 btn btn-primary' value='Copy' />
          <input type="button" disabled={text.length===0}onClick={removeSpace} className='my-3s mx-1 btn btn-primary' value='Remove Extra Spaces' />
          <input type="button" disabled={text.length===0}onClick={clearText} className='my-3s mx-1 btn btn-danger' value='Clear' />
        </div>
      </div>
      <div className="container2 my-3" >
        <h2><b> Summary: </b></h2>
        <p>{text.split(' ').filter((word)=>{ return word.length !== 0 }).length} words, { text.split('').filter((char)=>{ return char !== ' '}).length} chars have been used </p>
        <p> <b> Average Reading time: </b> {(text.split(' ').filter((word)=>{ return word.length !== 0 }).length * 0.008).toFixed(2)} Minutes</p>
        <p><b> Average Typing Time:</b> </p>
        <p>40 WPM: {( text.split(/\s+ /).filter((char)=>{ return char !== ' '}).length / 200).toFixed(2)} Minutes.</p>
        <p>50 WPM: {( text.split('').filter((char)=>{ return char !== ' '}).length / 250).toFixed(2)} Minutes.</p>
        <p>60 WPM: {( text.split('').filter((char)=>{ return char !== ' '}).length / 300).toFixed(2)} Minutes.</p>
        <h2><b> Preview:</b> </h2>
        <p>{text}</p>
      </div>
  </>
)
}
