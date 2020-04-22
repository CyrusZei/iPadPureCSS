import React from 'react';
import styled from 'styled-components';

const NordeaRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #00019f;
`;

const NordeaDate = styled.h5`
	color: #ffffff;
	font-weight: 500;
	margin: 0;
`;

const Nordea = () => {
	return (
		<NordeaRootContainer>
			<NordeaDate>Nordea</NordeaDate>
		</NordeaRootContainer>
	);
};

export default Nordea;
