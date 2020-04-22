import React from 'react';
import styled from 'styled-components';

const AppSpaceContainer = styled.div`
	display: flex;
	max-width: 150px;
	width: 100%;
	justify-content: center;
`;

const AppSpace = ({ children }) => {
	return <AppSpaceContainer>{children}</AppSpaceContainer>;
};
export default AppSpace;
