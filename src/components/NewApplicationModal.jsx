import React, { useState } from 'react';
// import ApplicationsTable from './ApplicationsTable.jsx';
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	Editable,
	EditableInput,
	EditablePreview,
	Select,
	FormControl,
	FormLabel,
	HStack,
	VStack,
	Flex,
	Spacer,
} from '@chakra-ui/react';

const initialValues = {
	position: '',
	company: '',
	dateApplied: '',
	companyContact: '',
	interviewStatus: '',
	offer: false,
	doubleDown: '',
};

function NewApplicationModal() {
	// first make a deep copy of our initial values
	let copyOfInitValues = Object.assign({}, initialValues);
	// use hooks to create a new state based on the copy of the initial values
	let [inputs, setInputs] = useState([copyOfInitValues]);

	// create a state for tableName
	// let [ourTableName, setTableName] = useState('');

	// const changeTableName = (fieldName) => ({ target }) =>
	// 	setTableName(target.value);

	// this function handles changes to the initial input field state (1st row being added)
	// const onChangeForField = fieldName => ({target}) => setInputs(state => ({...state,[fieldName]:target.value}));

	const onChangeForNow = (ev, index) => {
		// grab our event.target and use destructuring to make variables name and value with ev.target.name and ev.target.value respectively
		const { name, value } = ev.target;
		// create a variable list that is an array of a copy of our object
		const list = [...inputs];
		// edit the value of list at the index with a key of the name
		list[index][name] = value;
		// use hooks to change our state using set inputs with our updated list
		setInputs(list);
	};

	// handle click event of the Remove button
	// const handleRemoveClick = (index) => {
	// 	const list = [...inputs];
	// 	list.splice(index, 1);
	// 	setInputs(list);
	// };

	// handle click event of the Add button
	// const handleAddClick = () => {
	// 	// when we make a new row, we use our untouched version of initial values, so we have a clean copy of initialValues in our state
	// 	setInputs([...inputs, copyOfInitValues]);
	// };

	const stateBoolean = true;
	// this function runs when the save button is clicked, it runs a post request to the database and then it empties out the modal and resets state
	const saveButtonClick = () => {
		fetch('/applications', {
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({ inputs }),
			method: 'POST',
		}).then((res) => {
			setInputs([copyOfInitValues]);
			setTableName('');
		});
		console.log({ inputs });
		console.log('saved!');
		changeBoolFunc(stateBoolean);
		onClose();
	};

	const changeBoolFunc = (bool) => {
		return !bool;
	};

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		// <>
		// <Button onClick={onOpen}>Trigger modal</Button>

		// <Modal onClose={onClose} isOpen={isOpen} isCentered>
		//   <ModalOverlay />
		//   <ModalContent>
		// 	<ModalHeader>Modal Title</ModalHeader>
		// 	<ModalCloseButton />
		// 	<ModalBody>
		// 	  <Lorem count={2} />
		// 	</ModalBody>
		// 	<ModalFooter>
		// 	  <Button onClick={onClose}>Close</Button>
		// 	</ModalFooter>
		//   </ModalContent>
		// </Modal>
		// </>

		<>
			<Button colorScheme='teal' onClick={onOpen}>
				Add Application
			</Button>

			<Modal isOpen={isOpen} size={'full'} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<ModalHeader>Add New Application</ModalHeader>
					<Flex>
						<ModalBody>
							{inputs.map((element, i) => {
								// console.log(element)
								// console.log(i)
								return (
									<>
										<HStack spacing='24px'>
											{/* this second editable block is an input field for the position/role */}
											<VStack spacing='8px'>
												<p>Position</p>
												<Editable
													border='2px'
													borderColor='gray.200'
													borderRadius='10px'
													defaultValue='job title'
												>
													<EditablePreview />
													<EditableInput
														name='position'
														onChange={(ev) => onChangeForNow(ev, i)}
														value={element.position}
														key={`position${i}`}
													/>
												</Editable>
											</VStack>
											<Spacer />
                      <VStack spacing='8px'>
												<p>Company</p>
												<Editable
													border='2px'
													borderColor='gray.200'
													borderRadius='10px'
													defaultValue='company name'
												>
													<EditablePreview />
													<EditableInput
														name='company'
														onChange={(ev) => onChangeForNow(ev, i)}
														value={element.company}
														key={`company${i}`}
													/>
												</Editable>
											</VStack>
											<Spacer />
                      <VStack spacing='8px'>
												<p>Applied On</p>
												<Editable
													border='2px'
													borderColor='gray.200'
													borderRadius='10px'
													defaultValue='year-mo-day'
												>
													<EditablePreview />
													<EditableInput
														name='dateApplied'
														onChange={(ev) => onChangeForNow(ev, i)}
														value={element.dateApplied}
														key={`dateApplied${i}`}
													/>
												</Editable>
											</VStack>
											<Spacer />
                      <VStack spacing='8px'>
												<p>Company Contact</p>
												<Editable
													border='2px'
													borderColor='gray.200'
													borderRadius='10px'
													defaultValue='name, email'
												>
													<EditablePreview />
													<EditableInput
														name='companyContact'
														onChange={(ev) => onChangeForNow(ev, i)}
														value={element.companyContact}
														key={`companyContact${i}`}
													/>
												</Editable>
											</VStack>
											<Spacer />
											{/* Dropdown menu to interview status */}
											<VStack spacing='8px'>
												<p>Interview Status</p>
												<Select
													placeholder='-'
													name='interviewStatus'
													onChange={(ev) => onChangeForNow(ev, i)}
													key={`interviewStatus${i}`}
												>
													<option value='pending'>Pending</option>
													<option value='phone'>Phone Screen</option>
													<option value='onsite'>Onsite</option>
												</Select>
											</VStack>
											<Spacer />
											{/* Dropdown to select offer y/n  */}
											<VStack spacing='8px'>
												<p>Offer</p>
												<Select
													placeholder='-'
													name='offer'
													onChange={(ev) => onChangeForNow(ev, i)}
													key={`offer${i}`}
												>
													<option value='no'>No</option>
													<option value='yes'>Yes</option>
												</Select>
											</VStack>
											<Spacer />
											<VStack spacing='8px'>
												<p>Double-Down</p>
												<Editable
													border='2px'
													borderColor='gray.200'
													borderRadius='10px'
													defaultValue='year-mo-day'
												>
													<EditablePreview />
													<EditableInput
														name='doubleDown'
														onChange={(ev) => onChangeForNow(ev, i)}
														value={element.doubleDown}
														key={`doubleDown${i}`}
													/>
												</Editable>
											</VStack>
											<Spacer />
									</>
								);
							})}
						</ModalBody>
					</Flex>

					<ModalFooter>
						<Button colorScheme='teal' mr={3} onClick={saveButtonClick}>
							Save
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
			{/* <Schema {...inputs} tableName={ourTableName}/> */}
			{/* pass down state using NEW COMPONENT WITH CARDS */}
			<ApplicationsTable boolSwap={stateBoolean} />
		</>
	);
}
// export default NewApplicationModal;
