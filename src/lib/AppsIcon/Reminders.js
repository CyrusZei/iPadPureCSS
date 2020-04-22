import React from 'react';
import styled from 'styled-components';

const RemindersRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	flex-direction: row;
`;

const RemindersDotContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 20px;
	justify-content: space-around;
	align-items: center;
	padding: 5px 0;
`;

const RemindersOrangeDot = styled.div`
	display: flex;
	width: 5px;
	height: 5px;
	border-radius: 6px;
	background-color: #fe9500;
	border: 1px solid #ffffff;
	box-shadow: 0px 0px 0px 1px #fe9500;
`;

const RemindersBlueDot = styled.div`
	display: flex;
	width: 5px;
	height: 5px;
	border-radius: 6px;
	background-color: #1badf7;
	border: 1px solid #ffffff;
	box-shadow: 0px 0px 0px 1px #1badf7;
`;

const RemindersGreenDot = styled.div`
	display: flex;
	width: 5px;
	height: 5px;
	border-radius: 6px;
	background-color: #63da39;
	border: 1px solid #ffffff;
	box-shadow: 0px 0px 0px 1px #63da39;
`;

const RemindersLinesContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	flex-direction: column;
	flex: 1px;
`;

const RemindersLines = styled.div`
	display: flex;
	background-color: #c7c7cc;
	height: 1px;
	width: 100%;
`;

const Reminders = () => {
	return (
		<RemindersRootContainer>
			<RemindersDotContainer>
				<RemindersOrangeDot />
				<RemindersBlueDot />
				<RemindersGreenDot />
			</RemindersDotContainer>
			<RemindersLinesContainer>
				<RemindersLines />
				<RemindersLines />
				<RemindersLines />
				<RemindersLines />
			</RemindersLinesContainer>
		</RemindersRootContainer>
	);
};

export default Reminders;
