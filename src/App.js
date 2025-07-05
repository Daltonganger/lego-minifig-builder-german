import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MiniFig from "./components/MiniFig";
import { defaultSliderValues } from "./utils/constants";

const App = () => {
  const [values, setValues] = useState({
    ...defaultSliderValues, // This now includes headAccessory, handAccessory, and bg gradients
  });
  const [isExploded, setIsExploded] = useState(false);

  const appStyle = {
    display: "flex",
    justifyContent: "space-between",
    height: "100vh",
    background: `linear-gradient(to bottom right,
      hsl(${values.bgGradientStartHue}, ${values.bgGradientStartSaturation}%, ${values.bgGradientStartLightness}%),
      hsl(${values.bgGradientEndHue}, ${values.bgGradientEndSaturation}%, ${values.bgGradientEndLightness}%))`,
  };

  return (
    <main style={appStyle}>
      <MiniFig {...{ ...values, isExploded }} />
      <Sidebar {...{ values, setValues, isExploded, setIsExploded }} />
    </main>
  );
};

export default App;
