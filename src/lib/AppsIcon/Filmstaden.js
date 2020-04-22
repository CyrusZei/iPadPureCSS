import React from 'react';
import styled from 'styled-components';

const FilmstadenRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #cc0028;
`;

const FilmstadenDate = styled.h1`
	color: #ffffff;
	font-weight: 700;
	margin: 0;
`;

const FilmstadenCircle = styled.div`
	display: flex;
	border: 5px solid #ffffff;
	border-radius: 30px;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-items: center;
`;

const Filmstaden = () => {
	return (
		<FilmstadenRootContainer>
			<FilmstadenCircle>
				<FilmstadenDate>F</FilmstadenDate>
			</FilmstadenCircle>
		</FilmstadenRootContainer>
	);
};

export default Filmstaden;
