import React from 'react';
import styled from 'styled-components';

const TinkRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #f89572;
`;

const TinkContainer = styled.div`
	display: flex;
	width: 30px;
	height: 40px;
	overflow: hidden;
	position: relative;
`;

const TinkerCircelOne = styled.div`
	width: 20px;
	height: 20px;
	border: 7px solid #ffffff;
	border-radius: 20px;
	position: absolute;
	z-index: 1;
	top: -20px;
	left: -15px;
`;

const TinkerCircelTwo = styled.div`
	width: 20px;
	height: 20px;
	border: 7px solid #ffffff;
	border-radius: 50px;
	position: absolute;
	z-index: 1;
	top: 6px;
	left: 14px;
`;

const Tink = () => {
	return (
		<TinkRootContainer>
			<TinkContainer>
				<TinkerCircelOne />
				<TinkerCircelTwo />
			</TinkContainer>
		</TinkRootContainer>
	);
};

export default Tink;
