import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {colors} from './colors';
import {txt} from './typography';

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 13px 20px 0;
`;

export const Item = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 56px;
	width: ${Dimensions.get('window').width - 40}px;
`;

export const Name = styled.Text`
	font-size: ${txt.size.regular}
	color: ${colors.dark};
`;

export const Test = styled.Text`
text-align: right;
	font-size: ${txt.size.regular}
	color: ${colors.dark};
`;
