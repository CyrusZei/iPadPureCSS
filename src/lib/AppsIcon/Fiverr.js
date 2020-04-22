import React from 'react';
import styled from 'styled-components';

const FiverrRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #01b22e;
`;

const FiverrDate = styled.h3`
	color: #ffffff;
	font-weight: 600;
	margin: 0;
`;

const Fiverr = () => {
	return (
		<FiverrRootContainer>
			<FiverrDate>fiverr</FiverrDate>
		</FiverrRootContainer>
	);
};

export default Fiverr;
