export const defaultSliderValues = {
  expression: 0,
  upperHue: 200,
  upperSaturation: 50,
  upperLightness: 90,
  lowerHue: 200,
  lowerSaturation: 50,
  lowerLightness: 90,
  headAccessory: 0,
  handAccessory: 0,
  bgGradientStartHue: 180,
  bgGradientStartSaturation: 50,
  bgGradientStartLightness: 70,
  bgGradientEndHue: 240,
  bgGradientEndSaturation: 50,
  bgGradientEndLightness: 50,
};

export const headAccessories = [
  { name: "None", key: "none" },
  { name: "Tirolean Hat", key: "tirolean_hat" },
];

export const handAccessories = [
  { name: "None", key: "none" },
  { name: "Pretzel", key: "pretzel" },
];

export const inputConfig = {
  expression: {
    max: 500,
    min: 0,
    step: 100,
    value: 0,
  },
  upperHue: {
    max: 360,
    min: 0,
    value: 200,
  },
  upperSaturation: {
    max: 100,
    min: 0,
    value: 50,
  },
  upperLightness: {
    max: 90,
    min: 0,
    value: 90,
  },
  lowerHue: {
    max: 360,
    min: 0,
    value: 200,
  },
  lowerSaturation: {
    max: 100,
    min: 0,
    value: 50,
  },
  lowerLightness: {
    max: 90,
    min: 0,
    value: 90,
  },
  headAccessory: {
    max: headAccessories.length - 1, // Updated dynamically
    min: 0,
    step: 1,
    value: 0,
  },
  handAccessory: {
    max: handAccessories.length - 1, // Updated dynamically
    min: 0,
    step: 1,
    value: 0,
  },
  bgGradientStartHue: {
    max: 360,
    min: 0,
    value: 180,
  },
  bgGradientStartSaturation: {
    max: 100,
    min: 0,
    value: 50,
  },
  bgGradientStartLightness: {
    max: 100,
    min: 0,
    value: 70,
  },
  bgGradientEndHue: {
    max: 360,
    min: 0,
    value: 240,
  },
  bgGradientEndSaturation: {
    max: 100,
    min: 0,
    value: 50,
  },
  bgGradientEndLightness: {
    max: 100,
    min: 0,
    value: 50,
  },
};
