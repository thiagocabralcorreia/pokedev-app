import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { ListScreen } from './screens/ListScreen';
import { DetailScreen } from './screens/DetailScreen';

import { colors } from './styles/theme/colors';
import { AppBar, AppName } from './styles/Theme';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
	ListScreen: undefined;
	DetailScreen: undefined;
};

export const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='ListScreen'
				screenOptions={{headerShown: false}}
			>
				<Stack.Screen
					name='ListScreen'
					component={ListScreen}
				/>
				<Stack.Screen
					name='DetailScreen'
					component={DetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
  );
}
