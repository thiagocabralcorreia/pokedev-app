import styled from 'styled-components/native';

import {colors} from './theme/colors';
import {txt} from './theme/typography';

export const StyledSafeAreaView = styled.SafeAreaView`
	flex: 1;
	background-color: ${colors.light};
`;

export const TopBar = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 58px;
	padding: 0 16px 0 18px;
	background-color: ${colors.complementary};
`;

export const AppName = styled.Text`
	font-size: ${txt.size.big}
	color: ${colors.light};
`;

export const TitleBar = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 58px;
	padding: 0 16px 0 18px;
	background-color: ${colors.brand};
`;

export const Title = styled.Text`
	font-size: ${txt.size.regular}
	color: ${colors.light};
`;
