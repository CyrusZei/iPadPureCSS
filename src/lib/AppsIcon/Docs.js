import React from 'react';
import styled from 'styled-components';

const DocsRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const DocsContainer = styled.div`
	display: flex;
	background-color: #4086f4;
	width: 35px;
	height: 40px;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	position: relative;
	overflow: hidden;
`;

const DocsCut = styled.div`
	display: flex;
	width: 0;
	height: 0;
	border-top: 7px solid transparent;
	border-left: 7px solid #ffffff;
	border-bottom: 7px solid transparent;
	position: absolute;
	top: -5px;
	right: -1px;
	transform: rotate(-45deg);
	z-index: 9;
`;

const DocsBend = styled.div`
	display: flex;
	background-color: #a2c3fa;
	width: 10px;
	height: 10px;
	position: absolute;
	border-radius: 1px;
	transform: rotate(0deg);
	top: 0px;
	right: 0px;
	z-index: 2;
`;

const DocsBendShadow = styled.div`
	display: flex;
	background-color: #3976e2;
	width: 15px;
	height: 10px;
	position: absolute;
	z-index: 1;
	top: 6px;
	right: -6px;
	transform: rotate(45deg);
`;

const DocsLinesContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
`;

const DocsLines = styled.div`
	display: flex;
	background-color: #f1f1f1;
	width: 20px;
	height: 2px;
	margin-bottom: 3px;
`;

const DocsLinesShort = styled.div`
	display: flex;
	background-color: #f1f1f1;
	width: 10px;
	height: 2px;
	margin-bottom: 3px;
`;

const Docs = () => {
	return (
		<DocsRootContainer>
			<DocsContainer>
				<DocsCut />
				<DocsBend />
				<DocsBendShadow />
				<DocsLinesContainer>
					<DocsLines />
					<DocsLines />
					<DocsLines />
					<DocsLinesShort />
				</DocsLinesContainer>
			</DocsContainer>
		</DocsRootContainer>
	);
};

export default Docs;
