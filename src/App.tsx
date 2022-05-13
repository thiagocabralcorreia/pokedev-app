import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { colors } from './styles/theme/colors';

import { Routes } from './routes';
import { URLContext } from './context/url.context';

import { StyledSafeAreaView } from './styles/Theme';

const App = () => {
	const [ currentURL, setCurrentURL ] = useState('https://pokeapi.co/api/v2/pokemon/1/');

	return (
		<URLContext.Provider value={{ currentURL, setCurrentURL }}>
			<StatusBar backgroundColor={colors.complementary} />
			<StyledSafeAreaView>
				<Routes />
			</StyledSafeAreaView>
		</URLContext.Provider>
	);
};

export default App;
