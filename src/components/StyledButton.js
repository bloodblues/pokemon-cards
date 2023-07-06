import styled from 'styled-components';

const StyledButton = styled.button`
  background: linear-gradient(180deg, #F8D030 0%, #F1BE30 100%);
  border: none;
  border-radius: 5px;
  color: #3C5AA6;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 2px 0px #AB2D00;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 0px #AB2D00;
  }

  &:active {
    box-shadow: none;
    transform: translateY(2px);
  }
`;

export default StyledButton;