import React from 'react';
import styled from 'styled-components';

const NumbersRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background: linear-gradient(0deg, #13d61e 0%, #7ffa69 100%);
`;

const NumbersContainer = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	flex-direction: column;
`;

const NumbersBarsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex: 1;
	width: 100%;
	align-items: flex-end;
	margin-bottom: 3px;
`;

const Numbersbars1 = styled.div`
	width: 7px;
	height: 10px;
	background-color: #ffffff;
	border-radius: 1px;
`;

const Numbersbars2 = styled.div`
	width: 7px;
	height: 15px;
	background-color: #ffffff;
	border-radius: 1px;
`;

const Numbersbars3 = styled.div`
	width: 7px;
	height: 25px;
	background-color: #ffffff;
	border-radius: 1px;
`;

const Numbersbars4 = styled.div`
	width: 7px;
	height: 17px;
	background-color: #ffffff;
	border-radius: 1px;
`;
const NumbersBottomLine = styled.div`
	display: flex;
	width: 100%;
	height: 2px;
	background-color: #ffffff;
	border-radius: 1px;
`;

const Numbers = () => {
	return (
		<NumbersRootContainer>
			<NumbersContainer>
				<NumbersBarsContainer>
					<Numbersbars1 />
					<Numbersbars2 />
					<Numbersbars3 />
					<Numbersbars4 />
				</NumbersBarsContainer>
				<NumbersBottomLine />
			</NumbersContainer>
		</NumbersRootContainer>
	);
};

export default Numbers;
