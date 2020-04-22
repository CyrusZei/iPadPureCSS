import React from 'react';
import styled from 'styled-components';

const AppRootContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 150px;
`;

const AppContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	background-color: #ffffff;
	border-radius: 10px;
	overflow: hidden;
`;

const AppText = styled.h6`
	color: #ffffff;
	margin: 6px 0 0 0;
	text-align: center;
`;

const AppFrame = ({ appName, children }) => {
	return (
		<AppRootContainer>
			<AppContainer>{children}</AppContainer>
			{appName ? <AppText>{appName}</AppText> : null}
		</AppRootContainer>
	);
};

export default AppFrame;
