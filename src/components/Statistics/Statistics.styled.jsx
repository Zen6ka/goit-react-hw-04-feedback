import styled from 'styled-components';

export const StatisticsList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${p => p.theme.spacing(5)};
`;

export const StatisticLi = styled.li`
	font-family: Georgia, serif;
	font-size: 18px;
	font-weight: 700;

	&:last-child {
	font-size: 22px;
	font-weight: 700;
}
`;

export const StatisticSpan = styled.span`
	font-weight: 500;
	text-shadow: 1px 1px 2px ${p => p.theme.colors.gray};
`; 

