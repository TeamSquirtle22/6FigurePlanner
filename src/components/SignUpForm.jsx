import React, {useState} from 'react';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
} from '@chakra-ui/react';

function SignUpForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const white = {
    backgroundColor: 'rgba(255, 255, 255, .95)',
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = (e) => {
    props.setLogin(true);
  };

  const submitData = (e) => {
    fetch('/user', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({
        username,
        password,
        firstName,
        lastName,
        email,
      }),
    });
    props.setLogin(true);
    e.preventDefault();
  };

  return (
    <Box
      maxHeight="550px"
      textAlign="center"
      borderWidth={1}
      px={4}
      width="full"
      maxWidth="500px"
      borderRadius={4}
      textAlign="center"
      boxShadow="lg"
      style={white}
    >
      <Heading>Sign Up For Your Account</Heading>

      <Box my={8} textAlign="left">
        <form id="sign-up-form" onSubmit={submitData}>
          <FormControl>
            <FormLabel>User Name: </FormLabel>
            <Input
              name="username"
              placeholder="Enter your desired username"
              value={username}
              onChange={handleUsername}
            />
            <FormLabel>First Name: </FormLabel>
            <Input
              name="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleFirstName}
            />
            <FormLabel>Last Name: </FormLabel>
            <Input
              name="LastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleLastName}
            />
            <FormLabel>Email: </FormLabel>
            <Input
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmail}
            />
            <FormLabel>Password: </FormLabel>
            <Input
              name="password"
              placeholder="Enter your desired password"
              value={password}
              onChange={handlePassword}
            />
          </FormControl>
          <Button type="submit" form="sign-up-form" color="blue">
            Sign Up
          </Button>
          {/*<Text textAlign='center'>Or</Text>
            <Box align='center'>
              <Button onClick={OAuth} mt={4}>{<Image src={LinkedIn} backgroundSize='auto'/>}</Button>
    </Box>*/}
        </form>
        <Button onClick={handleClick}>Log In</Button>
      </Box>
    </Box>
  );
}

export default SignUpForm;
