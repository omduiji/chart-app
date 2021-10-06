import React from 'react';
import './styles.css';

function Inputs() {
  return (
    <div className="inputs">
      <div className="input-field">
        <p>Dimensions</p>
        <div className="field">
          <div className="field-area">
            <ul>
              <li>item</li>
            </ul>
          </div>
          <button>Clear</button>
        </div>
      </div>
      <div className="input-field">
        <p>Measures</p>
        <div className="field">
          <div className="field-area">
            <ul>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
