import React from "react";

import RightPanel from "./components/RightPanel/RightPanel";
import LeftPanel from "./components/LeftPanel/LeftPanel";

import "./App.css";
import MainPanel from "./components/MainPanel/MainPanel";

const App = () => {
  return (
    <div className="container">
      {/* <LeftPanel /> */}
      <MainPanel />
      <RightPanel />
    </div>
  );
};

export default App;
