import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import ApplicationsTable from "./ApplicationsTable.jsx";
import AddApplicationForm from "./AddApplicationForm.jsx";

//This container holds all state bc dashboard and form need to share this state

function ApplicationsContainer() {
  const [response, setResponse] = useState([]);

  fetch("/app/1").then((res) => res.json()).then((data) =>
    setResponse(data.data)
  );
  return (
    <div>
      <AddApplicationForm setResponse={setResponse} />
      <Container
        centerContent
        m={2}
        maxW="1480px"
        mx="auto"
        border="1px"
        borderRadius="lg"
        borderColor="gray.200"
      >
        <h1>Job Application Dashboard</h1>
        <ApplicationsTable response={response} setResponse={setResponse} />
      </Container>
    </div>
  );
}

export default ApplicationsContainer;
