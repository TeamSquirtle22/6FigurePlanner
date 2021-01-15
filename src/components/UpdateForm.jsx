import React, {useState} from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';

function UpdateForm(props) {
  const [interviewStatus, setInterviewStatus] = useState('');
  const [offerReceived, setOfferReceived] = useState('');
  const [doubleDown, setDoubleDown] = useState('');

  const {isOpen, onOpen, onClose} = useDisclosure();

  const handleInterviewStatus = (e) => {
    setInterviewStatus(e.target.value);
  };
  const handleOfferReceived = (e) => {
    setOfferReceived(e.target.value);
  };
  const handleDoubleDown = (e) => {
    setDoubleDown(e.target.value);
  };

  const submitInfo = (e) => {
    fetch(`/app/${props.id}`, {
      method: 'PATCH',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        interviewStatus,
        offerReceived,
        doubleDown,
      }),
    });
    fetch(`/app/${props._id}`)
      .then((res) => res.json())
      .then((data) => props.setResponse(data.data));
    e.preventDefault();
  };

  return (
    <>
      <Button size="xs" onClick={onOpen}>
        Update Info
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Interview Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <Select
                placeholder="Interview Status"
                value={interviewStatus}
                onChange={handleInterviewStatus}
              >
                <option value="Pending">Pending</option>
                <option value="Phone Screen">Phone Screen</option>
                <option value="Onsite">Onsite</option>
              </Select>
            </Box>

            <Box>
              <Select
                placeholder="Offer received?"
                value={offerReceived}
                onChange={handleOfferReceived}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </Box>

            <FormControl>
              <FormLabel>Double-Down</FormLabel>
              <Input
                placeholder="(YYYY-MM-DD)"
                onChange={handleDoubleDown}
                value={doubleDown}
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
}

export default UpdateForm;
