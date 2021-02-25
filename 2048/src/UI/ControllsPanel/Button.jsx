import styled from 'styled-components';

const Button = styled.button`
  background-color: #8f7a66;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  outline: none;
  padding: 5px 15px;
  text-transform: capitalize;
  align-items: center;
`;

export const ButtonFullScreen = styled(Button)`
  padding-top: 0;
  padding-bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
