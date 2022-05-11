
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../styles/theme/colors';
import { Container, Item, Name } from '../styles/theme/ListScreen';

interface PokemonSchema {
	name: string;
  }

export const ListScreen = () =>{
	const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
	const [ pokemonList, setPokemonList ] = useState([]);

	const getData = async () => {
		try {
			const { data } = await axios.get(url);
			setPokemonList(data.results);
		} catch(error) {
			alert(error.message);
		}
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<Container>
			<ScrollView>
				{pokemonList.map(( pokemon: PokemonSchema ) => {
					return (
						<Item key={pokemon.name}>
							<Name>{pokemon.name}</Name>
							<Feather name='chevron-right' color={colors.complementary} size={20} />
						</Item>
					)
				})}
			</ScrollView>
		</Container>
	);
};
