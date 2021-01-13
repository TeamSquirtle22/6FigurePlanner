import React, {useState} from 'react';
import {
	Input,
	Select,
	useDisclosure,
	Button,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	Box,
  DrawerCloseButton
} from '@chakra-ui/react';

function AddApplicationForm() {
	const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  
  // state management for each form value
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyNumber, setCompanyNumber] = useState('');
  const [dateApplied, setDateApplied] = useState('');
  const [interviewStatus, setInterviewStatus] = useState('');
  const [offerReceived, setOfferReceived] = useState('');
  const [doubleDown, setDoubleDown] = useState('');

  // Event listeners for form values below
  const handleCompany = (e) => {
	  setCompany(e.target.value);
  }
  
  const handlePosition = (e) => {
    setPosition(e.target.value);
  }

  const handleCompanyEmail = (e) => {
	  setCompanyEmail(e.target.value);
  }

  const handleCompanyNumber = (e) => {
    setCompanyNumber(e.target.value);
  }
  const handleDateApplied = (e) => {
    setDateApplied(e.target.value);
  }
  const handleInterviewStatus = (e) => {
    setInterviewStatus(e.target.value);
  }
  const handleOfferReceived = (e) => {
    setOfferReceived(e.target.value);
  }
  const handleDoubleDown= (e) => {
    setDoubleDown(e.target.value);
  }

  const submitData = (e) => {
    fetch('/app', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        'company': company,
        'position': position,
        'applied_on': dateApplied,
        'company_email': companyEmail,
        'company_phone_number': companyNumber,
        'double_down': doubleDown,
        'interview_status': interviewStatus,
        'offer_received': offerReceived,
        'id': 1
      })
    } )
    e.preventDefault();
  }

	return (
	  <>
		<Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
		  Add Application
		</Button>
		<Drawer
		  isOpen={isOpen}
		  placement="right"
		  onClose={onClose}
		  finalFocusRef={btnRef}
		>
		  <DrawerOverlay>
			<DrawerContent>
			  <DrawerCloseButton />
			  <DrawerHeader>Add New Application</DrawerHeader>
  
			  <DrawerBody>
          {/* CREATE FORM INPUTS INSIDE HERE */}
		      <form
              id="my-form"
              onSubmit={submitData}
            >
            <Input name="company" placeholder="Company" value={company} onChange={handleCompany}/>
            <Input name="position" placeholder="Position" value={position} onChange={handlePosition}/>
            <Input name="company_email" placeholder="Company Email" value={companyEmail} onChange={handleCompanyEmail}/>
            <Input name="company_phone_number" placeholder="Company Phone" value={companyNumber} onChange={handleCompanyNumber}/>
            <Input name="date_applied" placeholder="(YYYY-MM-DD)" value={dateApplied} onChange={handleDateApplied}/>
			      <Input name="double_down" placeholder="(YYYY-MM-DD)" value={doubleDown} onChange={handleDoubleDown}/>
          </form>
          <Box>
            <Select placeholder="Interview Status" value={interviewStatus} onChange={handleInterviewStatus}>
              <option value="Pending">Pending</option>
              <option value="Phone Screen">Phone Screen</option>
              <option value="Onsite">Onsite</option>
            </Select>
		      </Box>
	      	<Box>
            <Select placeholder="Offer received?" value={offerReceived} onChange={handleOfferReceived}>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </Select>
	      	</Box>
			  </DrawerBody>
  
			  <DrawerFooter>
				<Button variant="outline" mr={3} onClick={onClose}>
				  Cancel
				</Button>
				<Button type="submit" form="my-form" color="blue" >Save</Button>
			  </DrawerFooter>
			</DrawerContent>
		  </DrawerOverlay>
		</Drawer>
	  </>
	)
  }

export default AddApplicationForm;
