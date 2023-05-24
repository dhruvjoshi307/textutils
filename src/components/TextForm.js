import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
//  Handle the uppercase buttons
  const handleUpClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };
  //  Handle the lowercase buttons
  const handleDownClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase","success")
    
  };
// handle the copy button
  const handleCopy = (e) => {
    console.log("I am copying...");
    let text = document.getElementById("mytext");
    text.select();
    text.setSelectionRange(0,9999);
    // navigator.clipboard.write(text.value);
    // navigator.clipboard.writeText(text.value);
    props.showAlert("Copied Successfully","success");
    navigator.clipboard.writeText(text.value);
    console.log(text.value);
  };
//  Handle Onchange Function to write textarea contents
  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className={`text-${props.mode==='light'?'dark':'light'}`} style={{marginTop:'3px'}}>{props.heading}</h1>
          <textarea
            className={`form-control bg-transparent text-${props.mode==='light'?'dark':'light'}`}
            value={text}
            onChange={handleOnChange}
            id="mytext"
            rows="3"
          ></textarea>
        </div>
        <button id="uppercase" className="btn btn-primary  mx-1 mt-1" onClick={handleUpClick}>
          Uppercase
        </button>

        <button
          className="btn btn-primary  mx-1 mt-1"
          onClick={handleDownClick}
          id="lowercase"
        >
          Lowercase
        </button>
       
        <button id="copy_case" className="btn btn-primary mx-1 mt-1" onClick={handleCopy} 
        >
          Copy
        </button>
        <div className="mt-4">
          <h3 id="txt_summury"className={`text-${props.mode==='light'?'dark':'light'}`}> <strong>Text Summury</strong> </h3>
          <p className={`text-${props.mode==='light'?'dark':'light'}`}>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}<strong> Words &</strong> {text.length} <strong>Characters</strong> 
          </p>
          <h3 id="txt_preview" className={`mt-3 text-${props.mode==='light'?'dark':'light'}`}> <strong>Preview</strong></h3>
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabIndex="0"
            >
              <div id="item-1">
                <p className={`text-${props.mode==='light'?'dark':'light'}`}>{text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
TextForm.propTypes = {
  heading: PropTypes.string,
};
