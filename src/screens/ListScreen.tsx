
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../styles/theme/colors';
import { Container, Item, Name } from '../styles/theme/ListScreen';


export const ListScreen = () => {
	return (
		<Container>
			<ScrollView>
				<Item>
					<Name>bulbasaur</Name>
					<Feather name='chevron-right' color={colors.complementary} size={20} />
				</Item>
			</ScrollView>
		</Container>
	);
};
