import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Wikipedia from "./wikipedia";

function App() {
  const items = [
    {
      title: "what is React",
      description: "React is a UI component based library",
    },
    {
      title: "who made React",
      description: "React is made by Facebook",
    },
    {
      title: "why we use reactjs",
      description:
        "it is use virtual DOM and its fast as compared to any other framework or library",
    },
  ];

  return (
    <React.Fragment>
      <Wikipedia />
    </React.Fragment>
  );
}

export default App;
