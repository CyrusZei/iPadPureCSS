import React from 'react';
import styled from 'styled-components';

const MessagesRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	background: linear-gradient(180deg, #5cf877 0%, #15ba46 100%);
`;

const MessagesContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
`;

const MessagesSquare = styled.div`
	background-color: #ffffff;
	border-radius: 20px;
	height: 40px;
	width: 50px;
	z-index: 9;
	position: absolute;
`;

const MessagesHead = styled.div`
	width: 0;
	height: 0;
	border-top: 15px solid transparent;
	border-left: 15px solid #ffffff;
	border-bottom: 15px solid transparent;
	z-index: 1;
	position: absolute;
	top: -0.6px;
	left: -14px;
	transform: rotate(45deg);
`;

const Messages = () => {
	return (
		<MessagesRootContainer>
			<MessagesContainer>
				<MessagesSquare />
				<MessagesHead />
			</MessagesContainer>
		</MessagesRootContainer>
	);
};

export default Messages;
