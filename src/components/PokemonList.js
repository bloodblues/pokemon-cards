import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import styled from 'styled-components';
import StyledButton from './StyledButton';
import buttonSound from '../components/pika.mp3'


const PokemonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;



function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [isShown, setIsShown] = useState(true);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/type/flying')
      .then((response) => response.json())
      .then((data) => {
        // Los primeros 10 Pokemon
        const pokemonList = data.pokemon.slice(0, 10);
        //Aarray de Promises para obtener los detalles de cada Pokemon
        const pokemonPromises = pokemonList.map((pokemon) =>
          fetch(pokemon.pokemon.url)
            .then((response) => response.json())
        );
        // Esperando hasta que todas las Promises estén resueltas
        Promise.all(pokemonPromises)
          .then((pokemonDetails) =>
            // Creando objeto pokemon
            setPokemonData(pokemonDetails.map((detail) => ({
              id: detail.id,
              name: detail.name,
              image: detail.sprites.other['official-artwork'].front_default
            })))
          );
      });
  }, []);

  const handleButtonClick = () => {
    const audio = new Audio(buttonSound);
    audio.play();
    setIsShown(!isShown);
  };

  return (
    <div>
      <StyledButton   onClick={handleButtonClick} >
        {isShown ? 'Ocultar Flying Types' : 'Mostrar Flying Types'}
      </StyledButton >
      <PokemonContainer>
            {isShown &&
            pokemonData.map((pokemon, index) => (
            <PokemonCard key={index} pokemon={pokemon} />
            ))}  
      </PokemonContainer>
    </div>
  );
}

export default PokemonList;
