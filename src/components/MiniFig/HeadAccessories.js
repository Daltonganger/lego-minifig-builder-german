import React from "react";
import styled from "styled-components";
import { theme } from "../../theme"; // Assuming theme is needed for colors

const { black, green, red, gray } = theme.colors; // Adjust colors as needed

const TiroleanHatStyled = styled.div`
  position: absolute;
  top: -3.5em; // Adjust to sit on top of the head
  left: 50%;
  transform: translateX(-50%);
  width: 8em;
  height: 3em;
  z-index: 10; // Ensure it's above the head

  .hat-base {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5em;
    background-color: ${green || "darkgreen"}; // Fallback color
    border-radius: 0.5em 0.5em 0 0;
    box-shadow: inset 0 0.2em rgba(0,0,0,0.2);
  }

  .hat-crown {
    position: absolute;
    bottom: 1.3em; // Sits on the base
    left: 50%;
    transform: translateX(-50%);
    width: 5em;
    height: 2.5em;
    background-color: ${green || "darkgreen"};
    border-radius: 0.3em 0.3em 0 0;
    clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%); // Tapered shape
  }

  .hat-band {
    position: absolute;
    bottom: 1.3em;
    left: 50%;
    transform: translateX(-50%);
    width: 5.2em; // Slightly wider than crown base
    height: 0.5em;
    background-color: ${red || "darkred"};
    z-index: 1;
  }

  .feather {
    position: absolute;
    top: -1.8em; // Adjust to stick out from the band/crown
    right: 1.5em; // Positioned on the side
    width: 0.6em;
    height: 2.5em;
    background-color: ${gray || "grey"};
    border-radius: 50% 50% 0 0 / 80% 80% 0 0;
    transform: rotate(20deg);
    box-shadow: inset 0.1em -0.1em rgba(0,0,0,0.2);

    &::before { // Feather barb detailing
      content: '';
      position: absolute;
      bottom: 0.2em;
      left: 0.1em;
      width: 0.2em;
      height: 80%;
      background-color: ${black || "black"};
      opacity: 0.3;
      border-radius: 0.1em;
      transform: skewY(10deg);
    }
  }
`;

const TiroleanHat = () => (
  <TiroleanHatStyled>
    <div className="hat-base" />
    <div className="hat-crown" />
    <div className="hat-band" />
    <div className="feather" />
  </TiroleanHatStyled>
);

export const HEAD_ACCESSORIES = {
  none: () => null,
  tirolean_hat: TiroleanHat,
};
