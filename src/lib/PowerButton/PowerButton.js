import React from 'react';
import styled from 'styled-components';

const PowerButtonFrame = styled.div`
	display: flex;
	height: 40px;
	width: 2px;
	background-color: #ff0000;
	background: linear-gradient(
		0deg,
		rgba(158, 158, 161, 1) 0%,
		rgba(101, 101, 104, 1) 35%,
		rgba(171, 171, 172, 1) 100%
	);
	border-radius: 0 2px 2px 0;
	position: absolute;
	align-self: flex-end;
	right: -2px;
	bottom: 50px;
`;

const PowerButton = () => {
	return <PowerButtonFrame />;
};

export default PowerButton;
