import React from 'react';
import styled from 'styled-components';

const CameraFrame = styled.div`
	align-self: center;
	background-color: #065678;
	border-radius: 2.5px;
	display: flex;
	height: 5px;
	position: absolute;
	width: 5px;
	z-index: 9;
	justify-self: flex-end;
	margin-left: 15px;
	background: radial-gradient(circle, rgba(6, 89, 118, 1) 0%, rgba(7, 67, 101, 1) 35%, rgba(12, 62, 94, 1) 100%);
`;

const Camera = () => {
	return <CameraFrame />;
};

export default Camera;
