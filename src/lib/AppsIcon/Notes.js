import React from 'react';
import styled from 'styled-components';

const NotesRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	flex-direction: column;
`;

const NotesHeader = styled.div`
	display: flex;
	background: linear-gradient(180deg, #ffcd03 0%, #e5bf28 100%);
	width: 100%;
	height: 20px;
	box-shadow: 0px 0px 4px 0px #000000;
	position: relative;
	z-index: 9;
`;

const NotesDotsContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
	margin-top: 2px;
`;

const NotesDots = styled.div`
	background-color: #c7c7cd50;
	width: 2px;
	height: 2px;
	border-radius: 1px;
`;

const NotesLines = styled.div`
	display: flex;
	background-color: #CDCDD250;
	margin-top: 10px;
	width: 100%;
	height: 2px;
	z-index: 1;
`;

const Notes = () => {
	return (
		<NotesRootContainer>
			<NotesHeader />
			<NotesDotsContainer>
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
				<NotesDots />
			</NotesDotsContainer>
			<NotesLines />
			<NotesLines />
		</NotesRootContainer>
	);
};

export default Notes;
