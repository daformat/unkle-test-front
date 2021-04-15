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
      <br/>
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
      <hr/>
      <h3>II) Le composant gère son apparition et disparition (opendelay, closedelay)</h3>
      <br/>
      <div className="container main">
        <div className="row">
          <div className="col-sm-3">
            <div className="example-wrapper">
              <Tooltip 
                content="Yee-haw!" 
                direction="top"
                opendelay="400"
                closedelay="400"
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
                opendelay="800"
                closedelay="800"
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
                opendelay="1000"
                closedelay="1000"
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
                opendelay="2000"
                closedelay="2000"
              >
                <span className="example-emoji" role="img" aria-label="cowboy emoji">
                  🤠
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <h3>III) Le composant gère ses dimensions minimales et maximales (minwidth, maxwidth)</h3>
      <br/>
      <div className="container main">
        <div className="row">
          <div className="col-sm-3">
            <div className="example-wrapper">
              <Tooltip 
                content="Yee-haw! Yee-haw! Yee-haw! Yee-haw!" 
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
          <div className="col-sm-3">
            <div className="example-wrapper">
              <Tooltip 
                content="Yee-haw! Yee-haw! Yee-haw! Yee-haw!Yee-haw! Yee-haw! Yee-haw! Yee-haw!" 
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
                content="Yee-haw!Yee-haw!Yee-haw! Yee-haw! Yee-haw!Yee-haw! Yee-haw! Yee-haw! Yee-haw!" 
                direction="bottom"
              >
                <span className="example-emoji" role="img" aria-label="cowboy emoji">
                  🤠
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default App;
