// import axios from "axios";
import "./App.css";
import UrlComponent from "./components/UrlComponent";
import Scanning from "./components/Scanning";
import Result from "./components/Result";
// import github from "./images/github-logo.png";
import github_gif from "./images/github.gif";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import home from './pages/home';
import { useState } from "react";

function App() {
  let [status, setStatus] = useState("submit");
  let [url, setUrl] = useState("url");

  return (
    <div className="App">
      {status === "submit" ? (
        <div className="entry-page-dashboard">
          {/* <img src={github} alt="github-logo" className="github-logo"></img> */}
          <img src={github_gif} alt="github-logo" className="github-logo"></img>
          <div className="top-heading">OSS &nbsp; INSPECTOR</div>
          {/* <div className="main-heading">Enter the Repository Link</div> */}
          <UrlComponent
            setStatus={(stat, url) => {
              setStatus(stat);
              setUrl(url);
            }}
          />
        </div>
      ) : status === "scanning" ? (
        <Scanning
          url={url}
          setStatus={(stat) => {
            setStatus(stat);
          }}
        />
      ) : (
        <Result url={url} />
      )}
    </div>
  );
}

export default App;
