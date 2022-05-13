import React, { useState } from 'react'


export default function Textform(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpperCase = () => {
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted to upper case", "success");
    }

    const clear = () => {
        let newTxt = ("");
        setText(newTxt);
        props.showAlert("Text cleared", "success");
    }

    const handleLowerCase = () => {
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to lower case", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="MyBox" rows="4"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpperCase}>Convert to UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerCase}>Convert to LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={clear}>Clear</button>
            </div>
            <div className='container my-1' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words , {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mintutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </>
    )
}
