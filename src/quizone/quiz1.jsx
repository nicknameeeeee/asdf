
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [input, setInputValue] = useState(""); 

  const Change = (e) => {
    setInputValue(e.target.value);
  };

  const getValueInText = () => {
    const answer = "으아아";
    if (input === answer) {
      alert("correct");
    } else {
      alert("wrong");
    }
  };

    const activeButton = () => {
      getValueInText();
    }
    const activeEnter = (e) => {
      if(e.key === "Enter") {
        activeButton();
      }
    }

  return (
    <div>
      <nav>
        <Link to="/">
          <button>Go to Main</button>
        </Link>
      </nav>
      <input
        type="text"
        placeholder="으아아"
        value={input}
        onChange={Change}
        onKeyDown={(e) => activeEnter(e)}
      />
      <input type="button" value="으아아" onClick={() => { 
      activeButton();
      }}/>
    </div>

  );
};

export default Main;
