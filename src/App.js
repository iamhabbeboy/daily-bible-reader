import "./App.css";
import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

const App = () => {
  const [value, setValue] = useState(
    "In the beginning the lord created the heaven and the earth."
  );
  const { speak } = useSpeechSynthesis();
  // setValue("In the beginning the lord created the heaven and the earth.");

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt,
            excepturi ut deleniti corrupti, quaerat, voluptate blanditiis est
            repellendus omnis laudantium eius sit perferendis explicabo nulla
            quibusdam quos soluta dolorum quasi.
          </p>
          <p className="verses">Genesis 10:5</p>
          <label>
            <input type="checkbox" />
            Read bible verse by speaking with synthesis{" "}
          </label>
          <br />
          <input type="text" placeholde="set interval" />
          <br />
          <button className="App-link" onClick={() => speak({ text: value })}>
            Shoot
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
