import React from 'react';
import { Box } from '@chakra-ui/react';
import ApplicationsTable from './ApplicationsTable.jsx';

function ApplicationsContainer() {
	return (
		<div>
			<Box m={2} maxW='960px' mx='auto'>
				<ApplicationsTable />
			</Box>
		</div>
	);
}

export default ApplicationsContainer;
