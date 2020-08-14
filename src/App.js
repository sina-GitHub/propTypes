import React from "react";
import Child from "./Child";

export default function App(props) {
  return (
    <div className="App">
      <Child title="Attention!!!">
        <h3>PropTypes</h3>
      </Child>

      <Child title="title 2" onClick={() => console.log("OK")}>
        <h5>Create a log with me...</h5>
      </Child>
    </div>
  );
}
