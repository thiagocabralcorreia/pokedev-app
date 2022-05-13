
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../styles/theme/colors';

import {
	AppBar,
	AppName,
	IconWrapper,
	TitleBar,
	ScreenTitle,
} from './styles';

export interface HeaderProps {
	title: string;
	backButton?: boolean;
}

export const Header = ({ title, backButton }: HeaderProps) =>{
	const navigation = useNavigation();

	return (
		<>
		<AppBar>
			<AppName>PokeDev</AppName>
			{backButton && (
				<IconWrapper onPress={() => navigation.goBack()}>
					<Feather
						name='chevron-left'
						color={colors.light}
						size={20}
					/>
				</IconWrapper>
			)}
		</AppBar>
		<TitleBar>
			<ScreenTitle>
				{title}
			</ScreenTitle>
		</TitleBar>
		</>
	);
};
