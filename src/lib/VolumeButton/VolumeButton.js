import React from 'react';
import styled from 'styled-components';

const VolumeButtonFrame = styled.div`
	display: flex;
	height: 2px;
	width: 40px;
	background-color: #ff0000;
	background: linear-gradient(
		180deg,
		rgba(158, 158, 161, 1) 0%,
		rgba(101, 101, 104, 1) 35%,
		rgba(171, 171, 172, 1) 100%
	);
	border-radius: 0 0 2px 2px;
	position: absolute;
	align-self: flex-end;
	right: ${(props) => (props.right ? props.right : '0px')};
	bottom: ${(props) => (props.bottom ? props.bottom : '0px')};
`;

const VolumeButton = ({ right, bottom }) => {
	return <VolumeButtonFrame right={right} bottom={bottom} />;
};

export default VolumeButton;
