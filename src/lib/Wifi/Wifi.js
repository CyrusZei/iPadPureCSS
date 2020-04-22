import React from 'react';
import styled from 'styled-components';

const WifiContainer = styled.div`
	display: flex;
	overflow: hidden;
	height: 6px;
	width: 6px;
	transform: rotate(45deg);
	margin-right: 6px;
	margin-top: 1px;
`;

const WifiSignal = styled.div`
	display: flex;
	border-radius: 50%;
	height: ${(props) => (props.height ? props.height : '0px')};
	width: ${(props) => (props.width ? props.width : '0px')};
	border: 1px solid #ffffff;
	padding: ${(props) => (props.padding ? props.padding : '0px')};
`;

const Wifi = () => {
	return (
		<WifiContainer>
			<WifiSignal width="10px" height="10px" padding="1.2px">
				<WifiSignal width="6px" height="6px" padding="1.2px">
					<WifiSignal width="2px" height="2px" padding="2px" />
				</WifiSignal>
			</WifiSignal>
		</WifiContainer>
	);
};

export default Wifi;
