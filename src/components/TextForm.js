import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    console.log("Uppercase clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("Onchange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div className="mb-3">
          <h1 className="text-light">{props.heading}</h1>
          <textarea 
            className="form-control bg-transparent text-light"
            value={text}
            onChange={handleOnChange}
            id="mytext"
            rows="3" 
          ></textarea>
        </div>
        <button className="btn btn-primary  mx-1 mt-1" onClick={handleUpClick}>
          Uppercase
        </button>
        
        <button
          className="btn btn-primary  mx-1 mt-1"
          onClick={handleDownClick}
        >
          Lowercase
        </button>
       
        <div>
          <h3 className="mt-3 text-light">Text Summury</h3>
          <p className="text-light">
            {text.split(" ").length} Words & {text.length} Characters
          </p>
          <h3 className="mt-3 text-light">Preview</h3>
          <div className="col-8">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabindex="0"
            >
              <div id="item-1">
                <p className="text-light">{text}</p>
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
