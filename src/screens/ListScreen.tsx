
import React from 'react';
import {ScrollView} from 'react-native';

import {Container, Item, Name} from '../styles/theme/ListScreen';

export const ListScreen = () => {
	return (
		<Container>
			<ScrollView>
				<Item>
					<Name>bulbasaur</Name>
				</Item>
			</ScrollView>
		</Container>
	);
};
