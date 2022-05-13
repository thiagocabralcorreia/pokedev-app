
import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '../../styles/theme/colors';

import { LoadingWrapper } from './styles';

export interface LoadingProps {
	load?: boolean;
}

export const Loading = ({ load }: LoadingProps) =>{
	return (
		load ? (
		<LoadingWrapper>
			<ActivityIndicator size={25} color={colors.dark}/>
		</LoadingWrapper>
		) : null
	);
};
