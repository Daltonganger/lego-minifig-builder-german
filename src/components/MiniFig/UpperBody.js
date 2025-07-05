import styled from "styled-components";
import { position, size, rgba } from "polished";
import { theme } from "../../theme";
import { HAND_ACCESSORIES } from "./HandAccessories"; // Import hand accessories
import { handAccessories as handAccessoryOptions } from "../../utils/constants"; // Import options

const { white, black, yellowDark, yellowLight, mercury } = theme.colors;

// Original UpperBody styled-component renamed
const UpperBodyStyled = styled.div`
  ${position("absolute", "9.25em", null, null)}
  color: ${mercury};
  width: 100%;

  &::before,
  &::after {
    position: absolute;
    content: "";
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    ${size("3.5em", "3em")}
    background-color: currentColor;
    background-image: linear-gradient(
        to right,
        transparent 50%,
        ${rgba(white, 0.2)},
        transparent 90%
      ),
      linear-gradient(
        transparent 50%,
        ${rgba(black, 0.05)} 80%,
        ${rgba(black, 0.1)}
      );
    border-radius: 50% 50% 0 0/10% 10% 0 0;
    bottom: 100%;
  }

  &::after {
    ${size("2em")}
    background-color: ${rgba(black, 0.9)};
    background-image: linear-gradient(
      to right,
      transparent 50%,
      ${rgba(white, 0.2)} 80%,
      transparent
    );
    border-radius: 50%/10%;
    top: -2.75em;
  }
`;

export const Torso = styled.div`
  ${position("absolute", 0, null, null, "50%")}
  ${size("9.125em", "7.75em")}
  background-color: currentColor;
  background-image: linear-gradient(
    ${rgba(white, 0.1)},
    transparent 80%,
    ${rgba(black, 0.05)} 98%,
    ${rgba(black, 0.25)} 100%
  );
  border-radius: 0.5em 0.5em 0.125em 0.125em;
  box-shadow: inset 0 0.25em 0.25em ${rgba(white, 0.5)},
    -1.5em 0.5em 1em -1.25em ${rgba(black, 0.3)},
    1.5em 0.5em 1em -1.25em ${rgba(black, 0.3)};
  transform: translateX(-50%) rotateX(25deg);
  transform-origin: top center;
  z-index: 1;
`;

export const Arm = styled.div`
  ${size("5.5em", "3em")}
  ${position(
    "absolute",
    "4em",
    null,
    null,
    "50%"
  )}
  background-color: currentColor;
  border-radius: 1.5em/1em;
  transform-origin: center 1.5em;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    transform-origin: center 4.5em;
    content: "";
    background-color: currentColor;
  }

  &::before {
    backface-visibility: hidden;
    border-radius: 1.5em/1.5em 1.5em 1em 1em;
    bottom: 3.5em;
    height: 5.5em;
  }

  &::after {
    border-radius: 50%;
    bottom: 0;
    box-shadow: inset 0 0 0 1em ${rgba(white, 0.2)};
    height: 1.5em;
  }
`;

// New UpperBody Functional Component
export const UpperBody = ({ children, handAccessory, style }) => {
  // We need to pass handAccessory to LeftArm and RightArm children
  // And also apply the 'style' prop (for color) to UpperBodyStyled
  return (
    <UpperBodyStyled style={style}>
      {React.Children.map(children, (child) => {
        if (child.type === LeftArm || child.type === RightArm) {
          return React.cloneElement(child, { handAccessory });
        }
        return child;
      })}
    </UpperBodyStyled>
  );
};

UpperBody.propTypes = {
  children: PropTypes.node.isRequired,
  handAccessory: PropTypes.number,
  style: PropTypes.object, // For HSL color
};

UpperBody.defaultProps = {
  handAccessory: 0,
  style: {},
};


// Renamed from Arm
const ArmStyled = styled.div`
  ${size("5.5em", "3em")}
  ${position(
    "absolute",
    "4em",
    null,
    null,
    "50%"
  )}
  background-color: currentColor;
  border-radius: 1.5em/1em;
  transform-origin: center 1.5em;

  &::before,
  &::after {
    position: absolute;
    left: 0;
    width: 100%;
    transform-origin: center 4.5em;
    content: "";
    background-color: currentColor;
  }

  &::before {
    backface-visibility: hidden;
    border-radius: 1.5em/1.5em 1.5em 1.5em 1em 1em;
    bottom: 3.5em;
    height: 5.5em;
  }

  &::after {
    border-radius: 50%;
    bottom: 0;
    box-shadow: inset 0 0 0 1em ${rgba(white, 0.2)};
    height: 1.5em;
  }
`;

// New Arm functional component
const Arm = ({ handAccessory, children, className, style }) => (
  <ArmStyled className={className} style={style}>
    {React.Children.map(children, child => {
      if (child.type === Hand) {
        return React.cloneElement(child, { handAccessory });
      }
      return child;
    })}
  </ArmStyled>
);

Arm.propTypes = {
  handAccessory: PropTypes.number,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object, // For transform etc.
};

Arm.defaultProps = {
  handAccessory: 0,
  className: "",
  style: {},
};


// Arms
// const LeftArmStyled = styled(ArmStyled)` // This was an intermediate step
export const LeftArm = styled(Arm)` // Corrected: styled(FunctionalArmComponent)
  box-shadow: inset -0.5em 0.25em 0.375em -0.25em ${rgba(white, 0.4)},
    inset 0 0 0.75em 0.75em currentColor, inset 0 0 0 2em ${rgba(white, 0.15)};
  margin-left: 6.25rem;
  transform: translateX(-50%) rotate(-12deg);

  &::before {
    box-shadow: inset -0.75em 0.125em 0.375em -0.5em ${rgba(white, 0.4)},
      inset -0.25em 1.1em 0.75em 0.75em currentColor,
      inset 0 0 0 2em ${rgba(white, 0.15)};
    transform: rotate(-14deg);
  }
`;

// const RightArmStyled = styled(ArmStyled)` // This was an intermediate step
export const RightArm = styled(Arm)` // Corrected: styled(FunctionalArmComponent)
  box-shadow: inset 0.5em 0.25em 0.375em -0.25em ${rgba(white, 0.4)},
    inset 0 0 0.75em 0.75em currentColor, inset 0 0 0 2em ${rgba(white, 0.15)};
  margin-left: -6.25rem;
  transform: translateX(-50%) rotate(12deg);

  &::before {
    box-shadow: inset 0.75em 0.125em 0.375em -0.5em ${rgba(white, 0.4)},
      inset 0.25em 1.1em 0.75em 0.75em currentColor,
      inset 0 0 0 2em ${rgba(white, 0.15)};
    transform: rotate(14deg);
  }
`;

export const LeftArm = ({ handAccessory, children }) => (
  <LeftArmStyled>
    {React.Children.map(children, child => {
      if (child.type === Hand) {
        return React.cloneElement(child, { handAccessory });
      }
      return child;
    })}
  </LeftArmStyled>
);
LeftArm.propTypes = {
  handAccessory: PropTypes.number,
  children: PropTypes.node.isRequired,
};
LeftArm.defaultProps = { handAccessory: 0 };


export const RightArm = ({ handAccessory, children }) => (
  <RightArmStyled>
    {React.Children.map(children, child => {
      if (child.type === Hand) {
        return React.cloneElement(child, { handAccessory });
      }
      return child;
    })}
  </RightArmStyled>
);
RightArm.propTypes = {
  handAccessory: PropTypes.number,
  children: PropTypes.node.isRequired,
};
RightArm.defaultProps = { handAccessory: 0 };

// Hand
export const Hand = styled.div`
  ${position("absolute", "80%", null, null, "50%")}
  ${size("1.75em")}
  background-color: currentColor;
  background-image: linear-gradient(
    to right,
    ${rgba(white, 0.2)},
    ${rgba(black, 0.075)},
    ${rgba(white, 0.2)}
  );
  border-radius: 1em/0.5em;
  box-shadow: 0 -0.125em 0.125em ${rgba(black, 0.1)};
  color: ${yellowDark};
  transform: translateX(-50%);
  z-index: 1;
  position: relative; // Needed for absolute positioning of accessories

  &::before {
    ${position("absolute", "1em", null, null, "50%")}
    ${size("3.5em")}
    border: 0.75em solid;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-shadow: inset 0 0.25em ${rgba(black, 0.15)}, inset 0 0.25em;
    color: ${yellowLight};
    content: "";
    transform: translateX(-50%);
    z-index: 1;
  }
`;

// Helper component to render the hand accessory
const HandAccessory = ({ handAccessory }) => {
  const accessoryKey = handAccessoryOptions[handAccessory]?.key || "none";
  const AccessoryComponent = HAND_ACCESSORIES[accessoryKey];
  return AccessoryComponent ? <AccessoryComponent /> : null;
};

// Modify UpperBody component to accept handAccessory prop
// and pass it to Hand components.
// Since UpperBody is a styled component, we can't directly modify its function signature.
// Instead, we'll modify how Hand is used within it, or how MiniFig passes props.

// Let's assume MiniFig.js will pass handAccessory prop directly to RightArm and LeftArm components,
// and they will pass it to Hand. This requires modifying RightArm and LeftArm.

// For simplicity in this step, I will assume that the Hand component itself will be
// modified to receive the `handAccessory` prop from its parent (`RightArm` or `LeftArm`).
// The integration in MiniFig.js already passes `handAccessory` to `UpperBody`.
// The most direct way is to have `UpperBody` pass it to `RightArm` and `LeftArm`.

// Let's adjust how RightArm and LeftArm render Hand.
// We need to make RightArm and LeftArm functional components if they are to pass props.
// Currently, they are just styled(Arm).

// This part requires a more significant refactor of UpperBody, RightArm, LeftArm, and Hand.
// Plan:
// 1. Make Hand accept `handAccessory` prop and render the accessory.
// 2. Make Arm (and thus LeftArm, RightArm) accept `handAccessory` and pass it to Hand.
// 3. Modify the usage in UpperBody (which is a styled-component, so this is tricky)
//    OR, more practically, modify MiniFig.js to pass `handAccessory` to `RightArm` and `LeftArm` components directly.

// Given the current structure, the simplest change for now is to modify `MiniFig.js`
// to pass `handAccessory` to `RightArm` and `LeftArm` when they are used.
// Then, `RightArm` and `LeftArm` (which are `styled(Arm)`) would need to become proper
// components to forward that prop to `Hand`.

// Let's assume for now that `Hand` will be modified to accept the prop.
// The prop passing will be: MiniFig -> UpperBody (props) -> RightArm/LeftArm (props) -> Hand (props)

// The following change to Hand component itself is illustrative.
// The actual prop drilling needs to be implemented.
// For now, I will just add the HandAccessory component to the Hand styled component
// definition, assuming the prop `handAccessory` is available in its scope.
// This is not ideal but reflects the next step of making it work.

// The `Hand` component needs to be a functional component to use the prop.
// Let's redefine Hand and then Arm, LeftArm, RightArm.

// Original Hand (styled.div)
// export const Hand = styled.div` ... `

// New Hand (functional component)
import React from 'react'; // Import React for functional components
import PropTypes from "prop-types"; // Import PropTypes

// Rename original Hand styled component
const HandStyled = styled.div`
  ${position("absolute", "80%", null, null, "50%")}
  ${size("1.75em")}
  background-color: currentColor;
  background-image: linear-gradient(
    to right,
    ${rgba(white, 0.2)},
    ${rgba(black, 0.075)},
    ${rgba(white, 0.2)}
  );
  border-radius: 1em/0.5em;
  box-shadow: 0 -0.125em 0.125em ${rgba(black, 0.1)};
  color: ${yellowDark};
  transform: translateX(-50%);
  z-index: 1;
  position: relative; // Needed for absolute positioning of accessories

  &::before {
    ${position("absolute", "1em", null, null, "50%")}
    ${size("3.5em")}
    border: 0.75em solid;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-shadow: inset 0 0.25em ${rgba(black, 0.15)}, inset 0 0.25em;
    color: ${yellowLight};
    content: "";
    transform: translateX(-50%);
    z-index: 1;
  }
`;

// Create new functional Hand component
export const Hand = ({ handAccessory }) => {
  const accessoryKey = handAccessoryOptions[handAccessory]?.key || "none";
  const AccessoryComponent = HAND_ACCESSORIES[accessoryKey];

  return (
    <HandStyled>
      {AccessoryComponent && <AccessoryComponent />}
    </HandStyled>
  );
};
Hand.propTypes = {
  handAccessory: PropTypes.number, // Assuming it's an index
};
Hand.defaultProps = {
  handAccessory: 0,
};


// Helper component to render the hand accessory - NO LONGER NEEDED HERE, MOVED INTO Hand
// const HandAccessory = ({ handAccessory }) => {
//   const accessoryKey = handAccessoryOptions[handAccessory]?.key || "none";
//   const AccessoryComponent = HAND_ACCESSORIES[accessoryKey];
//   return AccessoryComponent ? <AccessoryComponent /> : null;
// };
