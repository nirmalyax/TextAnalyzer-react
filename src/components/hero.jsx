import { useState } from "react"

export default function Hero(props) {

  const handleUPclick = () =>{
    //console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Characters converted to upppercase" , "success");
  }

  const handleLOclick = () =>{
    //console.log("Uppercase is clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Characters converted to lowercase" , "success");
  }

  const clear = () =>{
    //console.log("Uppercase is clicked");
    let newText = '';
    setText(newText)
    props.showAlert("Characters erased" , "success");
  }

  const handleFirstletter = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("First character is converted to upppercase" , "success");
  }

  const handleonchange = (e) =>{
    //console.log("onchange is clicked");
    setText(e.target.value);
  }

  const [text, setText] = useState('');
  
  return (
    <>
      <div className='container mp-6' style={{color: props.mode==='dark'?'#13466e':'white'}}>
        <h1 className='heading container' style={{color: props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control my-3 " style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
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
        <h2 >Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something here to preview it"}</p>
      </div>

    </>
  )
}
