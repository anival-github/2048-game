import styled from 'styled-components';

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

const calculateBackgroundColor = (value) => {
  if (value === 0) {
    return 'transparent';
  }

  const maxColorStep = 16;
  const currentColorStep = Math.min(maxColorStep, Math.log2(value));

  const colorValue = `hsl(0,
    ${calculateSaturation(currentColorStep, maxColorStep)}%,
    ${calculateLightness(currentColorStep, maxColorStep)}%
  );`;

  return colorValue;
};

export const Field = styled.div`
    height: 475px;
    position: relative;
    width: 475px;
  `;

export const Background = styled.div`
    align-content: space-between;
    background-color: #bbada0;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 450px;
    justify-content: space-between;
    padding: 5px;
    position: absolute;
    width: 450px;
  `;

export const Playground = styled(Background)`
    background-color: transparent;
  `;

export const BackgroundCell = styled.div`
    margin: 5px;
    background-color: rgba(238, 228, 218, 0.35);
    height: 100px;
    width: 100px;
    border-radius: 5px;
  `;

export const PlayGroundCell = styled(BackgroundCell)`
  transform: translate(${({ x }) => x * 110}px, ${({ y }) => y * 110}px);
  text-align: center;
  line-height: 100px;
  background-color: ${({ value }) => calculateBackgroundColor(value)};
  position: absolute;
  transition-property: transform;
  transition: 100ms ease-in-out;
  color: #6a4e4e;
  font-weight: 900;
  font-size: ${({ value }) => calculateFontSize(value)}px;
`;
