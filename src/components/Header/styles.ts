import styled from 'styled-components/native';

import { colors } from '../../styles/theme/colors';
import { txt } from '../../styles/theme/typography';

export const AppBar = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 16px 0 18px;
	background-color: ${colors.complementary};
	position: relative;
`;

export const AppName = styled.Text`
	font-family: ${txt.fontFamily.default};
	font-size: ${txt.size.big};
	color: ${colors.light};
`;

export const IconWrapper = styled.TouchableOpacity`
	top: 20px;
	left: 20px;
	position: absolute;
`;

export const TitleBar = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 18px 0;
	background-color: ${colors.brand};
`;

export const ScreenTitle = styled.Text`
	font-family: ${txt.fontFamily.default};
	font-size: ${txt.size.regular};
	color: ${colors.light};
`;
