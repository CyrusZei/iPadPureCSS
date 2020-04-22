import React from 'react';
import styled from 'styled-components';

const PeRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #15a4e7;
`;

const PeDate = styled.h1`
	color: #ffffff;
	font-weight: 500;
	margin: 0;
`;

const Pe = () => {
	return (
		<PeRootContainer>
			<PeDate>p:e</PeDate>
		</PeRootContainer>
	);
};

export default Pe;
