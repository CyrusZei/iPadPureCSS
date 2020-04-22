import React from 'react';
import styled from 'styled-components';

const AppsRootContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex: 1;
	margin-bottom: 20px;
	align-items: center;
`;

const AppsContainer = ({ children }) => {
	return <AppsRootContainer>{children}</AppsRootContainer>;
};

export default AppsContainer;
