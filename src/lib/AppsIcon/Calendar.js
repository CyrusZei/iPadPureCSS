import React from 'react';
import styled from 'styled-components';

const CalendarRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const CalendarDay = styled.h6`
	color: #000000;
	font-size: 10px;
	font-weight: 500;
	margin: 0;
`;

const CalendarDate = styled.h1`
	color: #000000;
	font-weight: 200;
	margin: 0;
`;

const Calendar = () => {
	return (
		<CalendarRootContainer>
			<CalendarDay>Wedesday</CalendarDay>
			<CalendarDate>31</CalendarDate>
		</CalendarRootContainer>
	);
};

export default Calendar;
