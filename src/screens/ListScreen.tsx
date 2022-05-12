
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

import { api } from '../services/api';
import { RootStackParamList } from '../routes';
import { Header } from '../components/Header';

import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../styles/theme/colors';
import { Container, Item, Name } from '../styles/theme/ListScreen';

interface PokemonListSchema {
	name: string;
}

type listScreen = StackNavigationProp<RootStackParamList, 'ListScreen'>;

export const ListScreen = () =>{
	const navigation = useNavigation<listScreen>();

	const url = `${api}?limit=20`;
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
	}, []);

	return (
		<>
			<Header title='Lista de Pokémons' />
			<Container>
				<ScrollView>
					{pokemonList.map(( pokemon: PokemonListSchema ) => {
						return (
							<Item
								key={pokemon.name}
								onPress={() => navigation.navigate('DetailScreen')}
							>
								<Name>{pokemon.name}</Name>
								<Feather
									name='chevron-right'
									color={colors.complementary}
									size={20}
								/>
							</Item>
						)
					})}
				</ScrollView>
			</Container>
		</>
	);
};
