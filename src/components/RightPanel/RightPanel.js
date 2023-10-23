import React from "react";
import BuiltAndSize from "./BuiltAndSize";
import WallAndTexture from "./WallAndTexture";
import DoorAndWindow from "./DoorAndWindow";
import CeilAndFloor from "./CeilAndFloor";

import "./RightPanel.scss";

const RightPanel = () => {
  return (
    <div className="right-panel-container">
      <BuiltAndSize />
      <WallAndTexture />
      <DoorAndWindow />
      <CeilAndFloor />
    </div>
  );
};

export default RightPanel;
