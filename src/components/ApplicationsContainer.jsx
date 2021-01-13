import React from 'react';
import { Container, Button } from '@chakra-ui/react';
import ApplicationsTable from './ApplicationsTable.jsx';

function ApplicationsContainer() {
	return (
		<div>
			<Container
				centerContent
				m={2}
				maxW='1280px'
				mx='auto'
				border='1px'
				borderRadius='lg'
				borderColor='gray.200'
			>
				<h1>Job Application Dashboard</h1>
				<ApplicationsTable />
			</Container>
		</div>
	);
}

export default ApplicationsContainer;
