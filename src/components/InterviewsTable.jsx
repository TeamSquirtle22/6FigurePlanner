import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";

function InterviewsTable(props) {
  const [stage, setStage] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [res, setRes] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleStage = (e) => {
    setStage(e.target.value);
  };

  const handleInterview = (e) => {
    setInterviewDate(e.target.value);
  };

  const submitInfo = (e) => {
    fetch(`/interview`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        stage,
        interview_date: interviewDate,
        user_id: 1,
        app_id: props.app_id,
      }),
    });
  };

  fetch(`/interview/${props.app_id}`).then((res) => res.json()).then((data) =>
    setRes(data.data)
  );
  console.log(res);

  if (res.length === 0) {
    return (
      <>
        <Button size="xs" onClick={onOpen}>Interview</Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Interview Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Stage</FormLabel>
                <Input
                  placeholder="Stage"
                  onChange={handleStage}
                  value={stage}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Interview Date</FormLabel>
                <Input
                  placeholder="YYYY/MM/DD"
                  onChange={handleInterview}
                  value={interviewDate}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={submitInfo}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  } else {
    return (
      <>
        <Button onClick={onOpen} size="xs">Interview</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Interview Info</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UnorderedList>
                <ListItem>STAGE: {res[0].stage}</ListItem>
                <ListItem>Interview Date: {res[0].interview_date.substring(0,10)}</ListItem>
              </UnorderedList>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default InterviewsTable;
