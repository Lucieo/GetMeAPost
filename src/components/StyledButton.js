import styled from 'styled-components';

const StyledButtonWrapper = styled.div`
  padding:5px;
`

const StyledButton = styled.button`
  border: none;
  background: #EE5160;
  color: #ffffff !important;
  font-weight: 100;
  padding: 20px;
  text-transform: uppercase;
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
  cursor:pointer;
  font-family: 'Open Sans', sans-serif;
  font-size:x-small;

  &:hover{
    color: #404040 !important;
    font-weight: 700 !important;
    background: none;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
    transition: all 0.3s ease 0s;
  }
`;

export {StyledButton, StyledButtonWrapper};
