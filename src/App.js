import React from "react";
import Tooltip from "./Tooltip";
import "./styles.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Unkle Tooltip Component</h1>
      <br/>
      <h3>I) Le composant gère sa position entièrement (top, bottom, left, right)</h3>
      <div className="container main">
        <div className="row">
          <div className="col-sm-3">
            <div className="example-wrapper">
              <Tooltip 
                content="Yee-haw!" 
                direction="top"
              >
                <span className="example-emoji" role="img" aria-label="cowboy emoji">
                  🤠
                </span>
              </Tooltip>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="example-wrapper">
              <Tooltip 
                content="Yee-haw!" 
                direction="bottom"
              >
                <span className="example-emoji" role="img" aria-label="cowboy emoji">
                  🤠
                </span>
              </Tooltip>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="example-wrapper">
              <Tooltip 
                content="Yee-haw!" 
                direction="left"
              >
                <span className="example-emoji" role="img" aria-label="cowboy emoji">
                  🤠
                </span>
              </Tooltip>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="example-wrapper">
              <Tooltip 
                content="Yee-haw!" 
                direction="right"
              >
                <span className="example-emoji" role="img" aria-label="cowboy emoji">
                  🤠
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
