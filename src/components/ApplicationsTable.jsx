import React, {useEffect, useState} from 'react';
import InterviewsTable from './InterviewsTable.jsx';
import {Box, Button, Table, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';
import UpdateForm from './UpdateForm.jsx';

function ApplicationsTable(props) {
  const deleteApp = (e) => {
    fetch(`/app/${e.target.value}`, {method: 'DELETE'});
    fetch(`/app/${props.id}`)
      .then((res) => res.json())
      .then((data) => props.setResponse(data.data));
  };
  const rows = [];
  const data = props.response;
  if (data) {
    const length = data.length;
    for (let i = 0; i < length; i++) {
      //   fetch(`/interview/${data[i]._id}`).then((res) => res.json()).then((
      //     data,
      //   ) => setRes(data.data));
      //   console.log(res);
      rows.push(
        <Tr key={data[i]._id}>
          <Td>{data[i].company}</Td>
          <Td>{data[i].position}</Td>
          <Td>{data[i].applied_on.substring(0, 10)}</Td>
          <Td>{data[i].interview_status}</Td>
          <Td>{data[i].company_email}</Td>
          <Td>{data[i].company_number}</Td>
          <Td>{data[i].offer_received}</Td>
          <Td>{data[i].double_down}</Td>
          <Td>
            <Button
              colorScheme="blue"
              size="xs"
              onClick={deleteApp}
              value={data[i]._id}
            >
              Delete
            </Button>
          </Td>
          <Td>
            <InterviewsTable app_id={data[i]._id} />
          </Td>
          <Td>
            <UpdateForm
              id={data[i]._id}
              setResponse={props.setResponse}
              _id={props.id}
            />
          </Td>
        </Tr>
      );
    }
  }
  return (
    <Box
      m={2}
      maxW="1400px"
      mx="auto"
      border="1px"
      borderRadius="lg"
      borderColor="gray.200"
    >
      <Table variant="striped" colorScheme="teal" size="sm">
        {/* Table column headers */}
        <Thead>
          <Tr>
            <Th>Company</Th>
            <Th>Position</Th>
            <Th>Applied On</Th>
            <Th>Interview Status</Th>
            <Th>Company E-mail</Th>
            <Th>Company Phone</Th>
            <Th>Offer Received</Th>
            <Th>Double-Down</Th>
            <Th>DELETE</Th>
            <Th>Interview</Th>
            <Th>Update</Th>
          </Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
      </Table>
    </Box>
  );
}

export default ApplicationsTable;
