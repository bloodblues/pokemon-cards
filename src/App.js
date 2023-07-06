import './App.css';
import PokemonList from './components/PokemonList';
import styled from 'styled-components';

const AppContainer = styled.div`
  background: linear-gradient(180deg, #3C5AA6 0%, #F8D030 100%);
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <div className="App">
      <AppContainer>
        <PokemonList />
      </AppContainer>
    </div>
  );
}

export default App;
