import React from "react";
import RenderAll from "./component/RenderAll";
import Context from "./context/Context";

const App = () => {
  return (
    <div>
      <Context>
        <RenderAll />
      </Context>
    </div>
  );
};

export default App;
