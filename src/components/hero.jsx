import { useState } from "react"


export default function Hero(props) {

  const handleUPclick = () =>{
    //console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLOclick = () =>{
    //console.log("Uppercase is clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }

  const clear = () =>{
    //console.log("Uppercase is clicked");
    let newText = '';
    setText(newText)
  }

  const handleFirstletter = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
  }

  const handleonchange = (e) =>{
    //console.log("onchange is clicked");
    setText(e.target.value);
  }

  const [text, setText] = useState('Enter text here');
  
  return (
    <>
      <div className='container mp-6' style={{color: props.mode==='dark'?'#13466e':'white'}}>
        <h1 className='container mp-6' style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3 " style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleonchange} id="mybox" rows="10"></textarea>
        </div>

        {/* All the buttons of the app */}
        <button className="btn btn-primary" onClick={handleUPclick}>
          UPPERCASE
        </button>
        <button className="btn btn-info mx-3" onClick={handleLOclick}>
          lowercase
        </button>
        <button className="btn btn-success " onClick={clear}>
          Clear
        </button>
        <button className="btn btn-danger mx-3 " onClick={handleFirstletter}>
         CapitaliseFirstletter
        </button>
      </div>   

      <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 >Your Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.length} Minutes to read</p>
        <h3>Summary</h3>
        <p>{text}</p>
      </div>

    </>
  )
}
