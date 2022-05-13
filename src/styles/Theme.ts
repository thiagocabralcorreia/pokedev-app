import styled from 'styled-components/native';

import { colors } from './theme/colors';
import { txt } from './theme/typography';

export const StyledSafeAreaView = styled.SafeAreaView`
	flex: 1;
	background-color: ${colors.light};
`;

export const AppBar = styled.View`
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 16px 0 18px;
	margin-left: -10px;
`;

export const AppName = styled.Text`
	font-size: ${txt.size.big}
	color: ${colors.light};
`;
