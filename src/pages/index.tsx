import styled from 'styled-components';

export default function Home() {
  return (
    <HomeContainer>
      <h1>👋 Emotion Game</h1>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin-top: 15px;
  text-align: center;

  h1 {
    color: #f1c40f;
    font-size: 25px;
  }
`;
