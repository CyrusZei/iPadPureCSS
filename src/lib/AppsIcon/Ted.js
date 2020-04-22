import React from 'react';
import styled from 'styled-components';

const TedRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #1f1f1f;
`;

const TedDate = styled.h3`
	color: #fc3836;
	font-weight: 700;
	margin: 0;
`;

const Ted = () => {
	return (
		<TedRootContainer>
			<TedDate>TED</TedDate>
		</TedRootContainer>
	);
};

export default Ted;
