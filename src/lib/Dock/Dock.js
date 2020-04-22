import React from 'react';
import styled from 'styled-components';

const DockRootContainer = styled.div`
	display: flex;
	background-color: #ffffff90;
	border-radius: 20px;
	padding: 15px;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 5px;
`;

const Dock = ({ children }) => {
	return <DockRootContainer>{children}</DockRootContainer>;
};
export default Dock;
