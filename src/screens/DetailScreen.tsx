
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
	Container,
	MainDetails,
	ImageWrapper,
	Title,
	Name,
	Ability,
	MovementRow,
	Retangle,
	Movement,
} from '../styles/theme/DetailScreen';

export const DetailScreen = () =>{
	return (
		<Container>
			<ScrollView>
				<MainDetails>
					<ImageWrapper />
					<View>
						<Title>Nome:</Title>
						<Name>bulbasaur</Name>
					</View>
				</MainDetails>
				<Title>Habilidades:</Title>
				<Ability>chlorophyll | overgrow</Ability>
				<Title>Movimentos:</Title>
				<MovementRow>
					<Retangle>
						<Movement>razor-wind</Movement>
					</Retangle>
					<Retangle>
						<Movement>cut</Movement>
					</Retangle>
					<Retangle>
						<Movement>vine-whip</Movement>
					</Retangle>
					<Retangle>
						<Movement>bind</Movement>
					</Retangle>
					<Retangle>
						<Movement>cut</Movement>
					</Retangle>
					<Retangle>
						<Movement>razor-wind</Movement>
					</Retangle>
					<Retangle>
						<Movement>cut</Movement>
					</Retangle>
				</MovementRow>
			</ScrollView>
		</Container>
	);
};