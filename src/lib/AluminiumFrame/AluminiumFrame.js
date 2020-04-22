import React from 'react';
import styled from 'styled-components';
import PowerButton from './../PowerButton/PowerButton';
import VolumeButton from './../VolumeButton/VolumeButton';

const OuterFrameOne = styled.div`
	background-color: #a1a1a2;
	display: flex;
	height: 768px;
	width: 1000px;
	min-width: 678px;
	border-radius: 30px;
	padding: 1px;
	position: relative;
	box-shadow: 0px 0px 11px 1px #00000090;
`;

const OuterFrameTwo = styled.div`
	background-color: #cbcbcb;
	display: flex;
	flex: 1;
	width: 100%;
	padding: 1px;
	border-radius: 30px;
`;

const OuterFrameThree = styled.div`
	background-color: #9fa0a1;
	display: flex;
	flex: 1;
	width: 100%;
	padding: 1px;
	border-radius: 30px;
`;

const AluminiumFrame = ({ children }) => {
	return (
		<OuterFrameOne>
			<PowerButton />
			<VolumeButton right="80px" bottom="-2px" />
			<VolumeButton right="135px" bottom="-2px" />
			<OuterFrameTwo>
				<OuterFrameThree>{children}</OuterFrameThree>
			</OuterFrameTwo>
		</OuterFrameOne>
	);
};

export default AluminiumFrame;
