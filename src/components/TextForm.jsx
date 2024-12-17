import React, {useState} from 'react'

function TextForm(props) {

    
    const handleOnChangeTextArea = (event) => {
        setText(event.target.value);
    }
    
    // Functions to handle buttons
    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
    }

    const handleLowerCaseClick = () => {
        setText(text.toLowerCase());
    }

    const [text, setText] = useState('Enter text here...')
    
    return (
            <>
                <h1> {props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}  onChange={handleOnChangeTextArea}  id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>

                {/* Buttons div */}
                <div style={{gap: '2rem', display: 'flex' }}>
                    <button onClick={handleUpperCaseClick} className="btn btn-success"> Convert to Uppercase </button>
                    <button onClick={handleLowerCaseClick} className="btn btn-success"> Convert to Lowercase </button>
                    {/* <button className="btn btn-success"> Uppercase </button>
                    <button className="btn btn-success"> Uppercase </button>
                    <button className="btn btn-success"> Uppercase </button> */}
                </div>
            </>

    )
}

export default TextForm