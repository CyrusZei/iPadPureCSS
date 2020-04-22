import React from 'react';
import styled from 'styled-components';
import wallpaperImg from './../../assets/wallpaper/317501.jpg';
import Battery from './../Battery/Battery';
import Wifi from './../Wifi/Wifi';

const DisplayFrame = styled.div`
	background-color: #222222;
	background-image: url(${wallpaperImg});
	background-position: center;
	background-size: cover;
	border-radius: 20px;
	border: 1px solid #262626;
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 10px;
	width: 100%;
	position: relative;
`;

const StatusbarRootContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 30px;
	width: 100%;
	justify-content: space-between;
`;

const StatusbarContainer = styled.div`
	display: flex;
	width: 100px;
	flex-direction: row;
	justify-content: ${(props) => (props.right ? 'flex-end' : 'flex-start')};
`;

const Text = styled.p`
	font-size: 8px;
	color: #ffffff;
	margin: 0;
	font-weight: 500;
`;

const Display = ({ children }) => {
	return (
		<DisplayFrame>
			<StatusbarRootContainer>
				<StatusbarContainer>
					<Text>11:16 AM &nbsp; &nbsp; Mon 20 Apr</Text>
				</StatusbarContainer>
				<StatusbarContainer right>
					<Wifi /> <Text>67 &nbsp;%</Text> <Battery />
				</StatusbarContainer>
			</StatusbarRootContainer>
			{children}
		</DisplayFrame>
	);
};

export default Display;
