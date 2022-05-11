import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { ListScreen } from './screens/ListScreen';


const Stack = createNativeStackNavigator();

export const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='ListScreen'>
				<Stack.Screen name='ListScreen' component={ListScreen} />
			</Stack.Navigator>
		</NavigationContainer>
  );
}
