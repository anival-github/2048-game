import styled from 'styled-components';

const BackgroundCell = styled.div`
  margin: 5px;
  background-color: rgba(238, 228, 218, 0.35);
  height: 100px;
  width: 100px;
  border-radius: ${({ roundAll }) => (roundAll ? '50%' : '5px')} ;
`;

export default BackgroundCell;
