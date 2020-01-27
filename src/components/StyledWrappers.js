import styled from 'styled-components';

const PostFactoryWrapper = styled.div`
padding:20px;
display: flex;
align-items: center;
justify-content: space-between;
min-height: 100vh;
max-width: 800px;
margin: 0 auto;
@media (max-width: 810px) {
    flex-direction: column;
}
`

const SettingsWrapper = styled.div`
  text-align:center;
  padding: 40px;
  border-radius: 5px;
  border: 2px solid #EE5160;
  @media (max-width: 810px) {
      padding: 20px;
  }
`;

const PreviewWrapper = styled.div`
  max-width:350px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  border-radius:3px;
  padding:20px;
  @media (max-width: 810px) {
      margin-top: 30px;
  }
`

const AppWrapper = styled.div`

`;

const CollectionWrapper = styled.div`
  text-align:center;
`;


export {
  PostFactoryWrapper,
  SettingsWrapper,
  PreviewWrapper,
  AppWrapper,
  CollectionWrapper
}
