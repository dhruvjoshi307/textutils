import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import "./App.css";
// import About from "./components/About";
import React, { useState } from "react";
import TextForm from "./components/TextForm";
function App() {
  // Enable Dark Mode and custom color themes
  const [mode, setMode] = useState('light');
  // For Show the Different alerts After Proccesses
  const [alert, setalert] = useState(null);
  // Method to Show Different alerts
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  // For Remove the Different classes from body to fix the custom colors
  const removeclasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-info');
  };
  // toggle mode to change the custom themes
  const toggeleMode = (cls) => {
    removeclasses();
    document.body.classList.add('bg-'+cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has been enabaled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark Mode has been Disabled", "success");
      setTimeout(() => {
        setalert(null);
      }, 1500);
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        // aboutText="About"
        mode={mode}
        toggeleMode={toggeleMode}
      />
      <Alert alert={alert} />
      <div className="container mt-5">
        <TextForm heading="Enter The Text" mode={mode} showAlert={showAlert} />
        {/* About Component Here */}
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;
