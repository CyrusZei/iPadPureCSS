import React from 'react';
import styled from 'styled-components';

const BoseMusicRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #000000;
`;

const BoseMusicContainer = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	overflow: hidden;
	position: relative;
`;

const BoseMusicRightTriangel = styled.div`
	display: flex;
	width: 0;
	height: 0;
	position: absolute;
	border-top: 50px solid transparent;
	border-left: 80px solid #ffffffBB;
	border-bottom: 50px solid transparent;
	z-index: 2;
	top: -10px;
	left: -14px;
	transform: scale(-1);
`;
const BoseMusicLeftTriangel = styled.div`
	display: flex;
	width: 0;
	height: 0;
	position: absolute;
	border-top: 50px solid transparent;
	border-left: 80px solid #ffffffDD;
	border-bottom: 50px solid transparent;
	z-index: 2;
	top: 6px;
	left: 0px;
`;

const BoseMusic = () => {
	return (
		<BoseMusicRootContainer>
			<BoseMusicContainer>
				<BoseMusicRightTriangel />
				<BoseMusicLeftTriangel />
			</BoseMusicContainer>
		</BoseMusicRootContainer>
	);
};

export default BoseMusic;
