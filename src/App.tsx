import React from 'react';
import { StatusBar } from 'react-native';
import { colors } from './styles/theme/colors';

import { Routes } from './routes';

import { StyledSafeAreaView } from './styles/Theme';

const App = () => {
	return (
		<>
			<StatusBar backgroundColor={colors.complementary} />
			<StyledSafeAreaView>
				<Routes />
			</StyledSafeAreaView>
		</>
	);
};

export default App;
