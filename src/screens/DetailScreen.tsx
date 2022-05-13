
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { View } from 'react-native';
import axios from 'axios';

import { useURL } from '../context/url.context';
import { Header } from '../components/Header';

import {
	Container,
	MainDetails,
	Sprite,
	Title,
	Name,
	Row,
	AbilityName,
	Span,
	Retangle,
	MoveName,
	TypeWrapper,
} from '../styles/theme/DetailScreen';

interface PokemonSchema {
	name?: string;
	sprites?: {
		front_default?: string;
	}
	abilities?: [{
		ability?: {
			name?: string;
		}
	}];
	moves?: [{
		move?: {
			name?: string;
		}
	}];
}

export const DetailScreen = () =>{
	const [ pokemonData, setPokemonData ] = useState<PokemonSchema>({});
	const { currentURL } = useURL();

	const getData = async () => {
		try {
			const { data } = await axios.get(currentURL);
			setPokemonData(data);
		} catch(error) {
			alert(error.message);
		}
	}

	useEffect(() => {
		getData()
	}, []);

	return (
		<>
		<Header title='Detalhes do Pokémon' backButton/>
		<Container>
			<ScrollView>
				<MainDetails>
					<Sprite source={{uri: pokemonData?.sprites?.front_default}} />
					<View>
						<Title>Nome:</Title>
						<Name>{pokemonData.name}</Name>
					</View>
				</MainDetails>
				<TypeWrapper>
					<Title>Habilidades:</Title>
					<Row>
						{pokemonData?.abilities?.map((item, index) => {
							return (
								<AbilityName key={index}>
									{item.ability.name} <Span> | </Span>
								</AbilityName>
							)
						})}
					</Row>
				</TypeWrapper>
				<TypeWrapper>
				<Title>Movimentos:</Title>
					<Row>
						{pokemonData?.moves?.map((item, index) => {
							return (
								<Retangle key={index}>
									<MoveName>{item.move.name}</MoveName>
								</Retangle>
							)
						})}
					</Row>
				</TypeWrapper>
			</ScrollView>
		</Container>
		</>
	);
};
