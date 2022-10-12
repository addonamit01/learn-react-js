import React, {useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Convert to Uppercase!", "success");
    }

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Convert to Lowercase!", "success");
    }

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!", "success");
    }

    const handleCapitalClick = () => {
        let arr = text.split(" ");
        for (var i = 0; i < arr.length; i++)
        {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Convert to Capitalize!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const [text, setText] = useState('');

    return (
      <>
        <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2 className='mb-4'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#13466e', color: props.mode === 'light' ? 'black' : 'white' }} id="textBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalClick}>Convert to Capitalize</button>
        </div>
        <div className="container my-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Word and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Nothing to Preview!"}</p>
        </div>
      </>
    );
}
