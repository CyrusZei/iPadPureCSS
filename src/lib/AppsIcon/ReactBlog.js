import React from 'react';
import styled from 'styled-components';

const ReactBlogRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	flex-direction: column;
	background-color: #20232a;
`;

const ReactRingContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	top: 26px;
`;

const ReactRing1 = styled.div`
	display: flex;
	border: 2px solid #61dafb;

	width: 40px;
	height: 10px;
	border-radius: 33px / 13px;
	transform: rotate(45deg);
	position: absolute;
	z-index: 2;
`;

const ReactRing2 = styled.div`
	display: flex;
	border: 2px solid #61dafb;
	width: 40px;
	height: 10px;
	border-radius: 33px / 13px;
	transform: rotate(180deg);
	position: absolute;
	z-index: 3;
`;

const ReactRing3 = styled.div`
	display: flex;
	border: 2px solid #61dafb;
	width: 40px;
	height: 10px;
	border-radius: 33px / 13px;
	transform: rotate(130deg);
	position: absolute;
	z-index: 4;
`;

const ReactRingDot = styled.div`
	display: flex;
	width: 5px;
	height: 5px;
	border-radius: 2px;
	background-color: #61dafb;
`;

const ReactBlog = () => {
	return (
		<ReactBlogRootContainer>
			<ReactRingContainer>
				<ReactRing1 />
				<ReactRing2 />
				<ReactRing3 />
				<ReactRingDot />
			</ReactRingContainer>
		</ReactBlogRootContainer>
	);
};

export default ReactBlog;
