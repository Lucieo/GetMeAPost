import styled from 'styled-components';

const AppWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
padding:20px;
`

const SettingsWrapper = styled.div`
  text-align:center;
  padding: 40px;
  border-radius: 5px;
  border: 2px solid #EE5160
`;


export {
  AppWrapper,
  SettingsWrapper
}
