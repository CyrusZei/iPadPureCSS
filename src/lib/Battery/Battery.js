import React from 'react';
import styled from 'styled-components';

const BatteryRootContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 10px;
`;

const BatteryContainer = styled.div`
	display: flex;
	width: 15px;
	height: 4px;
	border: 1px solid #ffffff25;
	padding: 1px;
	border-radius: 2px;
	margin-left: 5px;
`;

const BatteryTip = styled.div`
	display: flex;
	width: 0px;
	height: 0px;
	margin-left: 1px;
	border-top: 2px solid transparent;
	border-right: 2px solid transparent;
	border-bottom: 2px solid #ffffff25;
	border-left: 2px solid transparent;
	transform: rotate(90deg);
	border-radius: 1px;
`;

const BatteryLevel = styled.div`
	display: flex;
	width: 60%;
	height: 100%;
	background-color: #ffffff;
	border-radius: 1px 0 0 1px;
`;

const Battery = () => {
	return (
		<BatteryRootContainer>
			<BatteryContainer>
				<BatteryLevel />
			</BatteryContainer>
			<BatteryTip />
		</BatteryRootContainer>
	);
};

export default Battery;
