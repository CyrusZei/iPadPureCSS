import React from 'react';
import styled from 'styled-components';

const BulletPagesRootContainer = styled.div`
	display: flex;
	height: 20px;
	justify-content: center;
`;

const BulletPagesContainer = styled.div`
	display: flex;
	width: 130px;
	justify-content: space-between;
	align-items: center;
`;

const BulletPagesDots = styled.div`
	display: flex;
	width: 8px;
	height: 8px;
	border-radius: 10px;
	background-color: #ffffff90;
`;

const BulletPagesDotsActive = styled.div`
	display: flex;
	width: 8px;
	height: 8px;
	border-radius: 10px;
	background-color: #ffffff;
`;

const BulletPages = () => {
	return (
		<BulletPagesRootContainer>
			<BulletPagesContainer>
				<BulletPagesDots />
				<BulletPagesDotsActive />
				<BulletPagesDots />
				<BulletPagesDots />
				<BulletPagesDots />
				<BulletPagesDots />
				<BulletPagesDots />
			</BulletPagesContainer>
		</BulletPagesRootContainer>
	);
};

export default BulletPages;
