import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase success",'success');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to lowercase success",'success');
    }
    
    const handleclearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared success",'success');
    }
    
    const handlecopytoclipClick = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard success",'success');
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{background: props.mode === 'light' ? 'white' : 'rgb(19,70,110)',color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclearClick}>Clear text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopytoclipClick}>Copy to clipboard</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
                <h2>Your Text Summary</h2>
                {/* <p>{text.length > 1 ? text.trim().split(" ").length : 0  } words, {text.length} characters</p> */}
                {/* <p>{text.split(" ").length>1 ? text.trim().split(/\s+/).length : '0'} words, {text.length} characters</p> */}
                <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words, {text.length} characters</p>
                {/* <p>{text.length > 1 ? 0.008 * text.split(" ").length : 0} Minutes read</p> */}
                <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length } Minutes read</p>
                <h2>Preview</h2>
                <p>{text.split(" ").filter((element) => {return element.length!==0}).length ? text : 'Noting to Preview'}</p>
            </div>
        </>
    )
}