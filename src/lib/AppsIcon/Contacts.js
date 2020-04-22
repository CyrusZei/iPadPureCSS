import React from 'react';
import styled from 'styled-components';

const ContactsRootContainer = styled.div`
	display: flex;
	height: 60px;
	width: 60px;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #d8d6cc;
	position: relative;
`;

const ContactsCircleUser = styled.div`
	display: flex;
	border: 2px solid #a9a29a;
	width: 30px;
	height: 30px;
	border-radius: 30px;
	position: relative;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	position: absolute;
	left: 10px;
`;

const ContactsUserHead = styled.div`
	display: flex;
	width: 10px;
	height: 12px;
	background-color: #a9a29a;
	position: absolute;
	border-radius: 10px;
	top: 5px;
	bottom: 0px;
`;

const ContactsUserBody = styled.div`
	display: flex;
	width: 22px;
	height: 12px;
	background-color: #a9a29a;
	position: absolute;
	border-radius: 10px;
	bottom: -2px;
`;

const ContactsTabContainer = styled.div`
	display: flex;
	align-self: flex-end;
	background-color: #ff0000;
	width: 10px;
	height: 100%;
	flex-direction: column;
`;

const ContactsGreyTab = styled.div`
	display: flex;
	background-color: #c4c2ba;
	flex: 1;
	width: 10px;
	box-shadow: inset 1px 1px 5px 1px #00000025;
`;

const ContactsBlueTab = styled.div`
	display: flex;
	background-color: #5ac8fa;
	flex: 1;
	width: 10px;
	box-shadow: inset 1px 1px 5px 1px #00000025;
`;

const ContactsOrangeTab = styled.div`
	display: flex;
	background-color: #fc9300;
	flex: 1;
	width: 10px;
	box-shadow: inset 1px 1px 5px 1px #00000025;
`;

const ContactsGreenTab = styled.div`
	display: flex;
	background-color: #4bd663;
	flex: 1;
	width: 10px;
	box-shadow: inset 1px 1px 5px 1px #00000025;
`;

const Contacts = () => {
	return (
		<ContactsRootContainer>
			<ContactsCircleUser>
				<ContactsUserHead />
				<ContactsUserBody />
			</ContactsCircleUser>

			<ContactsTabContainer>
				<ContactsGreyTab />
				<ContactsBlueTab />
				<ContactsOrangeTab />
				<ContactsGreenTab />
			</ContactsTabContainer>
		</ContactsRootContainer>
	);
};

export default Contacts;
