import React from 'react';
import styled from 'styled-components';

const DribbbleRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #e74d89;
	position: relative;
`;

const DribbbleTopStrip = styled.div`
	display: flex;
	position: absolute;
	border: 10px solid #b2215a;
	width: 100px;
	height: 100px;
	border-radius: 100px;
	top: -80px;
	right: 0;
	z-index: 1;
`;

const DribbbleBottomStrip = styled.div`
	display: flex;
	position: absolute;
	border: 10px solid #b2215a;
	width: 100px;
	height: 100px;
	border-radius: 100px;
	top: 27px;
	right: -70px;
	z-index: 2;
`;

const DribbbleCenterStrip = styled.div`
	display: flex;
	position: absolute;
	border: 10px solid #b2215a;
	width: 200px;
	height: 200px;
	border-radius: 200px;
	top: -19px;
	right: 0;
	z-index: 3;
`;

const Dribbble = () => {
	return (
		<DribbbleRootContainer>
			<DribbbleTopStrip />
			<DribbbleCenterStrip />
			<DribbbleBottomStrip />
		</DribbbleRootContainer>
	);
};

export default Dribbble;
