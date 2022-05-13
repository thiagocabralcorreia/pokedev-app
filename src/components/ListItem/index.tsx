
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../styles/theme/colors';

import { Item, Name } from './styles';

interface ListItemProps {
	pokemon: {
		name: string;
		url: string;
	};
	onPress: () => void;
}

export const ListItem = ({ pokemon, onPress }: ListItemProps) =>{
	const navigation = useNavigation();

	return (
		<Item
			key={pokemon.name}
			onPress={onPress}
		>
			<Name>{pokemon.name}</Name>
			<Feather
				name='chevron-right'
				color={colors.complementary}
				size={20}
			/>
		</Item>
	);
};
