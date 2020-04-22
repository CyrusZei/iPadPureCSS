import React from 'react';
import styled from 'styled-components';

const YouTubeRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const YouTubeSquare = styled.div`
	width: 40px;
	height: 30px;
	background-color: #fe0000;
	border-radius: 10px;
	justify-content: center;
	align-items: center;
	display: flex;
`;

const YouTubeTriangel = styled.div`
	width: 0;
	height: 0;
	border-top: 5px solid transparent;
	border-left: 10px solid #ffffff;
	border-bottom: 5px solid transparent;
	z-index: 1;
`;

const YouTube = () => {
	return (
		<YouTubeRootContainer>
			<YouTubeSquare>
				<YouTubeTriangel />
			</YouTubeSquare>
		</YouTubeRootContainer>
	);
};

export default YouTube;
