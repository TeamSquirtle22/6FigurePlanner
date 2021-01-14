import React from 'react';
import { Container } from '@chakra-ui/react';
import ApplicationsTable from './ApplicationsTable.jsx';
import AddApplicationForm from './AddApplicationForm.jsx';

//This container holds all state bc dashboard and form need to share this state

function ApplicationsContainer() {

	return (
		<div>
			<Container
				centerContent
				m={2}
				maxW='1480px'
				mx='auto'
				border='1px'
				borderRadius='lg'
				borderColor='gray.200'
			>
				<h1>Job Application Dashboard</h1>
				<ApplicationsTable />
			</Container>
        <AddApplicationForm />
		</div>
	);
}

export default ApplicationsContainer;
