import React from 'react';
import { Container } from '@chakra-ui/react';
import ApplicationsTable from './ApplicationsTable.jsx';
import AddApplicationForm from './AddApplicationForm.jsx';

//This container holds all state bc dashboard and form need to share this state

function ApplicationsContainer() {
	
  // state for signin (id, username)
  // pass that in as props to applications table and form using setter funcs or values

  // store state for form 
  // store state for dashboard/table

  // const initialValues = {
// 	company: '',
//   position: '',
//   companyEmail: '',
//   companyPhone: '',
// 	dateApplied: '',
// 	interviewStatus: '',
// 	offer: false,
// 	doubleDown: '',
// };


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
        <AddApplicationForm />
		</div>
	);
}

export default ApplicationsContainer;
