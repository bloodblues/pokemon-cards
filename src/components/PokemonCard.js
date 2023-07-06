import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
background: #f8d030;
border: 1px solid #3c5aa6;
border-radius: 12px;
padding: 8px;
margin: 16px;
font-size: 20px;
width: 200px;
height: 200px;
background-image: url(${props => props.background});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
color: #3c5aa6;
text-shadow: 2px 2px 4px rgba(255,255,255,0.7);`;

function PokemonCard({ pokemon }) {
  return (
    <Card background={pokemon.image}>
      <p>{pokemon.name}</p>
      <p>#{pokemon.id}</p>
    </Card>
  );
}

export default PokemonCard;
