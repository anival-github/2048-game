import styled from 'styled-components';
import BackgroundCell from '../BackGround/BacgroundCell';

const calculateFontSize = (value) => {
  if (value < 100) {
    return 61;
  }

  if (value < 1000) {
    return 42;
  }

  if (value < 10000) {
    return 32;
  }
  return 25;
};

const calculateSaturation = (step, maxStep) => {
  const maxSaturationInPercent = 100;
  const saturationPerStep = maxSaturationInPercent / maxStep;
  const saturation = Math.floor(saturationPerStep * step);
  return saturation;
};

const calculateLightness = (step, maxStep) => {
  const maxLightnessPercent = 100;
  const middleLightnessPercent = 50;
  const lightnessPerStep = middleLightnessPercent / maxStep;
  const lightness = maxLightnessPercent - Math.floor(lightnessPerStep * step);
  return lightness;
};

const calculateBackgroundColor = (value, customTileBackground) => {
  if (value === 0) {
    return 'transparent';
  }

  const maxColorStep = 16;
  const currentColorStep = Math.min(maxColorStep, Math.log2(value));

  const colorValue = `hsl(
    ${customTileBackground ? '120' : '0'},
    ${calculateSaturation(currentColorStep, maxColorStep)}%,
    ${calculateLightness(currentColorStep, maxColorStep)}%
  );`;

  return colorValue;
};

const PlayGroundCell = styled(BackgroundCell)`
  transform: translate(${({ x }) => x * 110}px, ${({ y }) => y * 110}px);
  text-align: center;
  line-height: 100px;
  background-color: ${({ value, customTileBackground }) => calculateBackgroundColor(value, customTileBackground)};
  position: absolute;
  transition-property: transform;
  transition: 100ms ease-in-out;
  color: #6a4e4e;
  font-weight: 900;
  font-size: ${({ value }) => calculateFontSize(value)}px;
  border-radius: ${({ roundAll }) => (roundAll ? '50%' : '5px')};
  font-family: ${({ customFont }) => (customFont ? 'Stick, sans-serif' : 'inherit')};
`;

export default PlayGroundCell;
