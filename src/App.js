import "./App.css";
import { About, Alert, Navbar, Textform } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const removeBodyColor = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
  };

  const [cls, setCls] = useState(null);
  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyColor();
    if (cls === "light") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setMode("light");
    } else if (cls === "dark") {
      document.body.style.backgroundColor = "orange";
      document.body.style.fontColor = "white";
      showAlert("Dark mode has been enabled", "success");
      removeBodyColor();
      setCls("dark");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text-Mania"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />{" "}
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  heading="Enter the text to analyze below"
                  mode={mode}
                  cls={cls}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
