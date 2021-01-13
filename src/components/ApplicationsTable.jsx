import React, { useState, useEffect } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Button } from '@chakra-ui/react';

function ApplicationsTable() {
	return (
		<Box
			centerContent
			m={2}
			maxW='1200px'
			mx='auto'
			border='1px'
			borderRadius='lg'
			borderColor='gray.200'
		>
			<Table variant='striped' colorScheme='teal'>
				{/* Table column headers */}
				<Thead>
					<Tr>
						<Th>Position</Th>
						<Th>Company</Th>
						<Th>Company Email</Th>
						<Th>Company Phone</Th>
						<Th>Applied On</Th>
						<Th>Interview Status</Th>
						<Th>Offer Y/N</Th>
						<Th>Double-Down</Th>
					</Tr>
				</Thead>
				{/* Hardcoded two rows of dummy data */}
				<Tbody>
					<Tr>
						<Td>Position</Td>
						<Td>ABC Company</Td>
						<Td>bob@abccompany.com</Td>
						<Td>555-555-5555</Td>
						<Td>2021-01-12</Td>
						<Td>Pending</Td>
						<Td>No</Td>
						<Td>2021-01-15</Td>
					</Tr>
					<Tr>
						<Td>Position 2</Td>
						<Td>XYZ Company</Td>
						<Td>janet@xyzcompany.com</Td>
						<Td>222-222-2222</Td>
						<Td>2021-01-03</Td>
						<Td>Phone Screen</Td>
						<Td>No</Td>
						<Td>2021-01-10</Td>
					</Tr>
				</Tbody>
			</Table>
		</Box>
	);
}

export default ApplicationsTable;
