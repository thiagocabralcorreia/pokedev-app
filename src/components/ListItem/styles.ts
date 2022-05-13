import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

import { colors } from '../../styles/theme/colors';
import { txt } from '../../styles/theme/typography';

export const Item = styled.TouchableOpacity`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	height: 56px;
	width: ${Dimensions.get('window').width - 40}px;
    border-bottom-width: 0.5px;
	border-bottom-color: ${colors.grey.dark};
`;

export const Name = styled.Text`
	font-family: ${txt.fontFamily.default};
	font-size: ${txt.size.regular}
	color: ${colors.dark};
`;
