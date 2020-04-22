import React from 'react';
import styled from 'styled-components';

import {
	AluminiumFrame,
	AppFrame,
	AppsContainer,
	AppSpace,
	Avanza,
	Bezel,
	BoseMusic,
	BulletPages,
	Calendar,
	Contacts,
	ControlCenterBarRootContainer,
	Display,
	Dock,
	Docs,
	Dribbble,
	Facebook,
	Files,
	Filmstaden,
	FindMy,
	Fiverr,
	Gmail,
	Messages,
	Nordea,
	Notes,
	Numbers,
	Pe,
	ReactBlog,
	Reminders,
	Ted,
	Tink,
	YouTube
} from './lib';

const RootContainer = styled.div`
	align-items: center;
	background-color: #ffffff;
	display: flex;
	flex: 1;
	height: 100vh;
	justify-content: center;
`;

function App() {
	return (
		<RootContainer>
			<AluminiumFrame>
				<Bezel>
					<Display>
						<AppsContainer>
							<AppSpace>
								<AppFrame appName="Bose Music">
									<BoseMusic />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="Facebook">
									<Facebook />
								</AppFrame>
							</AppSpace>

							<AppSpace>
								<AppFrame appName="Dribbble">
									<Dribbble />
								</AppFrame>
							</AppSpace>

							<AppSpace>
								<AppFrame appName="Notes">
									<Notes />
								</AppFrame>
							</AppSpace>

							<AppSpace>
								<AppFrame appName="YouTube">
									<YouTube />
								</AppFrame>
							</AppSpace>

							<AppSpace>
								<AppFrame appName="Files">
									<Files />
								</AppFrame>
							</AppSpace>

							<AppSpace>
								<AppFrame appName="Pe accounting">
									<Pe />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="Avanza">
									<Avanza />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="Nordea">
									<Nordea />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="React Blog">
									<ReactBlog />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="Tink">
									<Tink />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="Docs">
									<Docs />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="Filmstaden">
									<Filmstaden />
								</AppFrame>
							</AppSpace>
							<AppSpace>
								<AppFrame appName="Fiverr">
									<Fiverr />
								</AppFrame>
							</AppSpace>
						</AppsContainer>
						<BulletPages />
						<Dock>
							<AppFrame>
								<Contacts />
							</AppFrame>
							<AppFrame>
								<Gmail />
							</AppFrame>
							<AppFrame>
								<Calendar />
							</AppFrame>
							<AppFrame>
								<Messages />
							</AppFrame>
							<AppFrame>
								<Reminders />
							</AppFrame>
							<AppFrame>
								<Numbers />
							</AppFrame>
							<AppFrame>
								<FindMy />
							</AppFrame>
							<AppFrame>
								<Ted />
							</AppFrame>
						</Dock>
						<ControlCenterBarRootContainer />
					</Display>
				</Bezel>
			</AluminiumFrame>
		</RootContainer>
	);
}

export default App;
