import React from 'react';
import styled from 'styled-components';

const FacebookRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: flex-end;
	align-items: flex-end;
	background: linear-gradient(180deg, rgba(99, 135, 211, 1) 0%, rgba(73, 106, 175, 1) 35%, rgba(45, 74, 134, 1) 100%);
	padding-top: 20px;
`;

const FacebookTextF = styled.h6`
	color: #ffffff;
	font-size: 60px;
	font-weight: 600;
	margin: 0 10px 0 0;
`;

const Facebook = () => {
	return (
		<FacebookRootContainer>
			<FacebookTextF>f</FacebookTextF>
		</FacebookRootContainer>
	);
};

export default Facebook;
