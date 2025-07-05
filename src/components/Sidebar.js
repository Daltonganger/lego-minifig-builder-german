import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { rgba } from "polished";
import { Button, Fieldset, Legend } from "./FormElements";
import InputSlider from "./InputSlider";
import {
  defaultSliderValues,
  inputConfig,
  headAccessories, // Import accessory options
  handAccessories, // Import accessory options
} from "../utils/constants";
import { theme } from "../theme";

const { gray1 } = theme.colors;

const Controls = styled.aside`
  background-color: ${rgba(gray1, 0.5)};
  color: #333;
  padding: 1.5em;
  position: relative;
  text-transform: uppercase;
  width: 200px;
  z-index: 1;

  h2 {
    font-size: 1.25em;
    font-weight: 900;
    letter-spacing: 0.03125em;
    margin-bottom: 0.5rem;
  }
`;

const Sidebar = ({ values, setValues, isExploded, setIsExploded }) => {
  const onChange = ({ target: { name, value } }) => {
    setValues((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const getRandomNum = (min, max) => Math.random() * (max - min) + min;

  const randomize = () => {
    setValues(
      Object.entries(inputConfig).reduce((all, [key, config]) => {
        let randomValue;
        if (key === "expression") {
          // Expression steps by 100, max 500 (0 to 5 options)
          randomValue = Math.floor(getRandomNum(0, config.max / 100 + 1)) * 100;
          if (randomValue > config.max) randomValue = config.max; // Ensure it doesn't exceed max
        } else if (key === "headAccessory" || key === "handAccessory") {
          // Accessories are indices from 0 to length-1
          randomValue = Math.floor(getRandomNum(config.min, config.max + 1));
          if (randomValue > config.max) randomValue = config.max; // Ensure not out of bounds
        } else {
          // Standard numeric range for HSL etc.
          randomValue = getRandomNum(config.min, config.max);
        }
        return {
          ...all,
          [key]: Math.round(randomValue), // Round to nearest int for sliders
        };
      }, {}) // Start with an empty object to ensure all values are set fresh based on inputConfig
    );
  };

  return (
    <Controls>
      <h2>Controls</h2>
      <Button onClick={() => setIsExploded(!isExploded)} type="button">
        {isExploded ? "Rebuild" : "Explode"}
      </Button>
      <Button onClick={randomize} type="button">
        Randomize
      </Button>
      <Button
        onClick={() => {
          setValues({ ...defaultSliderValues });
        }}
        type="button"
      >
        Reset
      </Button>
      <Fieldset>
        <Legend>Head</Legend>
        <InputSlider
          id="expression"
          inputProps={{
            ...inputConfig.expression,
            value: values.expression,
            onChange,
          }}
          label="Expression"
        />
      </Fieldset>

      <Fieldset>
        <Legend>Hand Accessory</Legend>
        <InputSlider
          id="handAccessory"
          inputProps={{
            ...inputConfig.handAccessory,
            value: values.handAccessory,
            onChange,
          }}
          label={handAccessories[values.handAccessory]?.name || "Accessory"}
        />
      </Fieldset>

      <Fieldset>
        <Legend>Head Accessory</Legend>
        <InputSlider
          id="headAccessory"
          inputProps={{
            ...inputConfig.headAccessory,
            value: values.headAccessory,
            onChange,
          }}
          // Display the name of the selected accessory
          label={headAccessories[values.headAccessory]?.name || "Accessory"}
        />
      </Fieldset>

      <Fieldset>
        <Legend>Upper Body</Legend>
        <InputSlider
          id="upperHue"
          inputProps={{
            ...inputConfig.upperHue,
            value: values.upperHue,
            onChange,
          }}
          label="Hue"
        />
        <InputSlider
          id="upperSaturation"
          inputProps={{
            ...inputConfig.upperSaturation,
            value: values.upperSaturation,
            onChange,
          }}
          label="Saturation"
        />
        <InputSlider
          id="upperLightness"
          inputProps={{
            ...inputConfig.upperLightness,
            value: values.upperLightness,
            onChange,
          }}
          label="Lightness"
        />
      </Fieldset>

      <Fieldset>
        <Legend>Lower Body</Legend>
        <InputSlider
          id="lowerHue"
          inputProps={{
            ...inputConfig.lowerHue,
            value: values.lowerHue,
            onChange,
          }}
          label="Hue"
        />
        <InputSlider
          id="lowerSaturation"
          inputProps={{
            ...inputConfig.lowerSaturation,
            value: values.lowerSaturation,
            onChange,
          }}
          label="Saturation"
        />
        <InputSlider
          id="lowerLightness"
          inputProps={{
            ...inputConfig.lowerLightness,
            value: values.lowerLightness,
            onChange,
          }}
          label="Lightness"
        />
      </Fieldset>

      <Fieldset>
        <Legend>Background Gradient Start</Legend>
        <InputSlider
          id="bgGradientStartHue"
          inputProps={{
            ...inputConfig.bgGradientStartHue,
            value: values.bgGradientStartHue,
            onChange,
          }}
          label="Hue"
        />
        <InputSlider
          id="bgGradientStartSaturation"
          inputProps={{
            ...inputConfig.bgGradientStartSaturation,
            value: values.bgGradientStartSaturation,
            onChange,
          }}
          label="Saturation"
        />
        <InputSlider
          id="bgGradientStartLightness"
          inputProps={{
            ...inputConfig.bgGradientStartLightness,
            value: values.bgGradientStartLightness,
            onChange,
          }}
          label="Lightness"
        />
      </Fieldset>

      <Fieldset>
        <Legend>Background Gradient End</Legend>
        <InputSlider
          id="bgGradientEndHue"
          inputProps={{
            ...inputConfig.bgGradientEndHue,
            value: values.bgGradientEndHue,
            onChange,
          }}
          label="Hue"
        />
        <InputSlider
          id="bgGradientEndSaturation"
          inputProps={{
            ...inputConfig.bgGradientEndSaturation,
            value: values.bgGradientEndSaturation,
            onChange,
          }}
          label="Saturation"
        />
        <InputSlider
          id="bgGradientEndLightness"
          inputProps={{
            ...inputConfig.bgGradientEndLightness,
            value: values.bgGradientEndLightness,
            onChange,
          }}
          label="Lightness"
        />
      </Fieldset>
    </Controls>
  );
};

Sidebar.propTypes = {
  values: PropTypes.shape({
    expression: PropTypes.number,
    upperHue: PropTypes.number,
    upperSaturation: PropTypes.number,
    upperLightness: PropTypes.number,
    lowerHue: PropTypes.number,
    lowerSaturation: PropTypes.number,
    lowerLightness: PropTypes.number,
    headAccessory: PropTypes.number,
    handAccessory: PropTypes.number,
    bgGradientStartHue: PropTypes.number,
    bgGradientStartSaturation: PropTypes.number,
    bgGradientStartLightness: PropTypes.number,
    bgGradientEndHue: PropTypes.number,
    bgGradientEndSaturation: PropTypes.number,
    bgGradientEndLightness: PropTypes.number,
  }),
  setValues: PropTypes.func.isRequired,
  isExploded: PropTypes.bool.isRequired,
  setIsExploded: PropTypes.func.isRequired,
};

Sidebar.defaultProps = {
  values: {
    ...defaultSliderValues,
  },
};

export default Sidebar;
