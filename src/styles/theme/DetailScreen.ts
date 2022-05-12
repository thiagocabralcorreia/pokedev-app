import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { colors } from './colors';
import { txt } from './typography';

export const Container = styled.View`
	flex: 1;
	padding: 30px 20px 0;
`;

export const MainDetails = styled.View`
	display: flex;
	flex-direction: row;
`;

export const Sprite = styled.Image`
	width: 96px;
	height: 96px;
	border-width: 1px;
	border-radius: 10px;
	border-color: ${colors.grey.dark};
	margin-right: 13px;
`;


export const Title = styled.Text`
	font-size: ${txt.size.extraSmall};
	margin-bottom: 6px;
	color: ${colors.grey.dark};
`;

export const Name = styled.Text`
	font-size: ${txt.size.extraBig};
	color: ${colors.black};
`;

export const AbilityName = styled.Text`
	font-size: ${txt.size.regular};
	color: ${colors.black};
	margin-bottom: 2px;
`;

export const Span = styled.Text`
	font-size: ${txt.size.regular};
	color: ${colors.black};
`;

export const TypeWrapper = styled.View`
	margin-top: 32px;
`;

export const Row = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
`;

export const Retangle = styled.View`
	border-radius: 5px;
	background-color: ${colors.grey.light};
	padding: 5px 12px;
	margin: 0 6px 14px 0;
`;

export const MoveName = styled.Text`
	font-size: ${txt.size.regular};
	color: ${colors.black};
`;
