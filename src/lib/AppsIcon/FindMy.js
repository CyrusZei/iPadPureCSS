import React from 'react';
import styled from 'styled-components';

const FindMyRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #efeff4;
`;

const FindMyContainer = styled.div`
	display: flex;
	overflow: hidden;
	background-color: #3ad466;
	width: 40px;
	height: 40px;
	border-radius: 40px;
	background: radial-gradient(circle, #3dd969 0%, #34ba56 70%);
	position: relative;
	justify-content: center;
	align-items: center;
`;

const FindMyCircle = styled.div`
	display: flex;
	width: 20px;
	height: 20px;
	border-radius: 20px;
	background-color: #44d15c;
	border: 1px solid #ffffff25;
	position: absolute;
	z-index: 1;
`;

const FindMyUser = styled.div`
	display: flex;
	width: 10px;
	height: 10px;
	border: 1px solid #efeff4;
	background-color: #007aff;
	position: absolute;
	border-radius: 10px;
	z-index: 5;
`;

const FindMyFow = styled.div`
	display: flex;
    border-left: 29px solid transparent;
    border-top: 29px solid #007aff80;
    border-right: 29px solid transparent;
    width: 0;
    height: 0;
    position: absolute;
    top: -24px;
    right: -7px;
    z-index: 3;
    transform: rotate(115deg);
}
`;

const FindMy = () => {
	return (
		<FindMyRootContainer>
			<FindMyContainer>
				<FindMyUser />
				<FindMyFow />
				<FindMyCircle />
			</FindMyContainer>
		</FindMyRootContainer>
	);
};

export default FindMy;
