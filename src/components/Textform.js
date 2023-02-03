import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearTextClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Handed extra spaces", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          fontColor: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1 className="white-font">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "black" : "white",
              fontColor: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary"
          onClick={handleUpperCaseClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerCaseClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpace}
        >
          Remove extra spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopy}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearTextClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          fontColor: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2 className="white-font">Your text summary</h2>
        <p className="white-font">
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p className="white-font">
          {" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read.
        </p>
        <h2 className="white-font">Preview</h2>
        <p className="white-font">
          {text.length > 0
            ? text
            : "Nothing to preview yet, please start typing."}
        </p>
      </div>
    </>
  );
}
