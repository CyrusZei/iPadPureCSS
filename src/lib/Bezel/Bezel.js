import React from 'react';
import styled from 'styled-components';
import Camera from './../Camera/Camera';

const BezelFrame = styled.div`
	background-color: #000000;
	display: flex;
	width: 100%;
	flex: 1;
	border-radius: 30px;
	padding: 25px;
	justify-content: flex-end;
`;

const Bezel = ({ children }) => {
	return (
		<BezelFrame>
			{children} <Camera />
		</BezelFrame>
	);
};

export default Bezel;
