import React from 'react';
import styled from 'styled-components';

const AvanzaRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const AvanzaContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 40px;
	justify-content: space-around;
	width: 50px;
	align-items: flex-end;
`;

const AvanzaBar1 = styled.div`
	display: flex;
	width: 4px;
	height: 10px;
	background-color: #00c281;
`;

const AvanzaBar2 = styled.div`
	display: flex;
	width: 4px;
	height: 15px;
	background-color: #00c281;
`;

const AvanzaBar3 = styled.div`
	display: flex;
	width: 4px;
	height: 20px;
	background-color: #00c281;
`;

const AvanzaBar4 = styled.div`
	display: flex;
	width: 4px;
	height: 40px;
	background-color: #00c281;
`;

const Avanza = () => {
	return (
		<AvanzaRootContainer>
			<AvanzaContainer>
				<AvanzaBar1 />
				<AvanzaBar2 />
				<AvanzaBar3 />
				<AvanzaBar4 />
			</AvanzaContainer>
		</AvanzaRootContainer>
	);
};

export default Avanza;
