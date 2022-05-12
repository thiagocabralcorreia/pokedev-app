import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { ListScreen } from './screens/ListScreen';
import { DetailScreen } from './screens/DetailScreen';

const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='DetailScreen'>
				<Stack.Screen
					options={{
						title: '',
						headerTransparent: true,
						headerShown: false
					}}
					name='ListScreen'
					component={ListScreen}
				/>
				<Stack.Screen
					options={{
						title: '',
						headerTransparent: true,
						headerShown: false
					}}
					name='DetailScreen'
					component={DetailScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
  );
}
