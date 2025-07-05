import React from "react";
import styled from "styled-components";
import { theme } from "../../theme"; // Assuming theme is needed for colors

const { yellowDark, black } = theme.colors; // Example colors, adjust as needed

const PretzelStyled = styled.div`
  position: absolute;
  // Positioning will need to be fine-tuned when integrated into the hand
  // For now, let's assume it's centered in the hand component by default
  // and we can adjust top/left/transform as needed later.
  // Example:
  // top: 50%;
  // left: 50%;
  // transform: translate(-50%, -50%) rotate(15deg);
  width: 2.5em;
  height: 2em;
  z-index: 5; // Ensure it's visible with the hand

  // Simplified Pretzel Shape using CSS
  // Main body of the pretzel
  &::before {
    content: "";
    position: absolute;
    top: 0.5em;
    left: 0.25em;
    width: 2em;
    height: 1em;
    border: 0.4em solid ${yellowDark || "#DAA520"}; // Pretzel color
    border-radius: 0.5em;
    box-shadow: inset 0.1em 0.1em rgba(0,0,0,0.2); // Inner shadow
  }

  // Top loop
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0.75em;
    width: 1em;
    height: 0.8em;
    border: 0.4em solid ${yellowDark || "#DAA520"};
    border-bottom-color: transparent; // Open at the bottom
    border-radius: 0.5em 0.5em 0 0;
  }

  // Dots for salt (optional, can be refined)
  .salt {
    position: absolute;
    width: 0.2em;
    height: 0.2em;
    background-color: ${theme.colors.white || "white"};
    border-radius: 50%;
    box-shadow: 0 0 0.1em ${rgba(black, 0.5) || "rgba(0,0,0,0.5)"};
  }

  .salt1 {
    top: 0.8em;
    left: 0.8em;
  }
  .salt2 {
    top: 1em;
    left: 1.5em;
  }
  .salt3 {
    top: 0.6em;
    left: 1.2em;
  }
`;

// Need to import rgba if it's used for salt box-shadow
// from polished, if not already available globally
// For now, I'll use a string fallback for the rgba.

const Pretzel = () => (
  <PretzelStyled>
    {/* Salt elements can be added if a more detailed look is desired */}
    {/* <div className="salt salt1" /> */}
    {/* <div className="salt salt2" /> */}
    {/* <div className="salt salt3" /> */}
  </PretzelStyled>
);

export const HAND_ACCESSORIES = {
  none: () => null,
  pretzel: Pretzel,
};
