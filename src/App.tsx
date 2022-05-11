
import React from 'react';
import {StatusBar} from 'react-native';
import {colors} from './styles/theme/colors';

import { ListScreen } from './screens/ListScreen';

import {StyledSafeAreaView, TopBar, AppName, TitleBar, Title} from './styles/Theme';

const App = () => {
	return (
		<>
		<StatusBar backgroundColor={colors.complementary} />
		<StyledSafeAreaView>
			<TopBar>
				<AppName>PokeDev</AppName>
			</TopBar>
			<TitleBar>
				<Title>Lista de Pokémons</Title>
			</TitleBar>
			<ListScreen />
		</StyledSafeAreaView>
		</>
	);
};

export default App;