import React from 'react';
import styled from 'styled-components';

const ControlCenterBarRootContainer = styled.div`
	display: flex;
	width: 300px;
	height: 5px;
	background-color: #ffffff;
	position: absolute;
	bottom: 5px;
	align-self: center;
	border-radius: 20px;
`;

const ControlCenterBar = () => {
	return <ControlCenterBarRootContainer />;
};

export default ControlCenterBar;
