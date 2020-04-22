import React from 'react';
import styled from 'styled-components';

const FilesRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const FilesContainer = styled.div`
	display: flex;
	width: 40px;
	height: 40px;
	position: relative;
	justify-content: center;
`;

const FilesBottomFolder = styled.div`
	display: flex;
	position: absolute;
	background-color: #1690dc;
	width: 40px;
	height: 30px;
	border-radius: 4px;
	z-index: 1;
	top: 5px;
`;

const FilesTopCut = styled.div`
	display: flex;
	width: 15px;
	height: 20px;
	position: absolute;
	top: 2px;
	right: 0;
	background-color: #1690dc;
	z-index: 2;
	border-radius: 2px;
	left: 0px;
`;

const FilesPaperFolder = styled.div`
	display: flex;
	position: absolute;
	background-color: #ffffff;
	width: 35px;
	height: 30px;
	border-radius: 1px;
	z-index: 4;
	top: 8px;
`;

const FilesTopFolder = styled.div`
	display: flex;
	position: absolute;
	width: 40px;
	height: 30px;
	border-radius: 4px;
	z-index: 5;
	background: linear-gradient(0deg, #1a75f2 0%, #19acf8 100%);
	bottom: 0px;
`;

const Files = () => {
	return (
		<FilesRootContainer>
			<FilesContainer>
				<FilesTopFolder />
				<FilesPaperFolder />
				<FilesTopCut />
				<FilesBottomFolder />
			</FilesContainer>
		</FilesRootContainer>
	);
};

export default Files;
