import React from 'react';
import styled from 'styled-components';

const GmailRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const GmailIconContainer = styled.div`
	display: flex;
	width: 30px;
	height: 25px;
	overflow: hidden;
	position: relative;
`;

const GmailEnvelopTop = styled.div`
	display: flex;
	background-color: #f2f2f2;
	width: 16px;
	height: 16px;
	transform: rotate(45deg);
	position: absolute;
	top: -11px;
	left: 4px;
	border: 3px solid #dd4739;
	z-index: 9;
`;

const GmailEnvelopBody = styled.div`
	background-color: #f2f2f2;
	border-bottom: none;
	border-left: 3px solid #dd4739;
	border-radius: 2px;
	border-right: 3px solid #dd4739;
	border-top: none;
	display: flex;
	height: 26px;
	position: absolute;
	top: -1px;
	width: 24px;
	z-index: 1;
`;

const GmailEnvelopShadow = styled.div`
	background-color: #00000025;
	display: flex;
	height: 50px;
	position: absolute;
	right: -29px;
	top: -19px;
	transform: rotate(55deg);
	width: 50px;
	z-index: 3;
`;

const GmailEnvelopLeftSide = styled.div`
	display: flex;
    width: 0px;
    height: 0px;
    position: absolute;
    top: -6px;
    right: 14px;
    transform: rotate(225deg);
    z-index: 2;
    border-top: 15px solid transparent;
    border-left: 15px solid #e4e4e4;
    border-bottom: 15px solid transparent;
}
`;

const Gmail = () => {
	return (
		<GmailRootContainer>
			<GmailIconContainer>
				<GmailEnvelopTop />
				<GmailEnvelopShadow />
				<GmailEnvelopLeftSide />
				<GmailEnvelopBody />
			</GmailIconContainer>
		</GmailRootContainer>
	);
};

export default Gmail;
