import React, {useState} from 'react';
import {
  Flex,
  Box,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Image,
} from '@chakra-ui/react';
import desktop from '../../assets/desktoplarge.jpg';
import Logo from '../../assets/6FigurePlanner_Logo.png';
import LinkedIn from '../../assets/Sign-in-Large---Active.png';
import SignUpForm from './SignUpForm.jsx';

export default function Login(props) {
  const [login, setLogin] = useState(true);
  const background = {
    backgroundImage: `url(${desktop})`,
  };

  const overlay = {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
  };

  const white = {
    backgroundColor: 'rgba(255, 255, 255, .95)',
  };

  if (login === true) {
    return (
      <div style={background}>
        <div style={overlay}>
          <Flex
            maxHeight="50vh"
            width="full"
            align="center"
            justifyContent="center"
          >
            <Image src={Logo} backgroundSize="auto" />
          </Flex>
          <Flex minHeight="100vh" width="full" justifyContent="center">
            <LoginForm
              login={login}
              setLogin={setLogin}
              white={white}
              setId={props.setId}
              setLoggedIn={props.setLoggedIn}
            />
          </Flex>
        </div>
      </div>
    );
  } else {
    return (
      <div style={background}>
        <div style={overlay}>
          <Flex
            maxHeight="50vh"
            width="full"
            align="center"
            justifyContent="center"
          >
            <Image src={Logo} backgroundSize="auto" />
          </Flex>
          <Flex minHeight="100vh" width="full" justifyContent="center">
            {/* <Stack> */}
            {/* <LoginForm login={login} setLogin={setLogin} white={white} /> */}
            <SignUpForm login={login} setLogin={setLogin} />
            {/* </Stack> */}
          </Flex>
        </div>
      </div>
    );
  }
}

const LoginForm = (props) => {
  const OAuth = (_) => fetch('/linkedin-auth');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  // const [userID, setUserID] = useState('');

  const handleClick = (e) => {
    props.setLogin(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    fetch('/login', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({username}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        if (data.data[0].password === password) {
          props.setId(data.data[0]._id);
          props.setLoggedIn(true);
        }
      });
    e.preventDefault();
  };

  return (
    <Box
      maxHeight="520px"
      textAlign="center"
      borderWidth={1}
      px={4}
      width="full"
      maxWidth="500px"
      borderRadius={4}
      textAlign="center"
      boxShadow="lg"
      style={props.white}
    >
      <Heading>Sign In To Your Account</Heading>
      <Text>
        Or <Link>start your 14-day free trial</Link>
      </Text>
      <Box my={8} textAlign="left">
        <form>
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsername}
            />
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePassword}
            />
          </FormControl>
          <Stack isInline justifyContent="space-between">
            <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box>
            <Box>
              <Link>Forgot your password?</Link>
            </Box>
          </Stack>
          <Button width="full" mt={4} onClick={onSubmit}>
            Login
          </Button>
          <Text textAlign="center">Or</Text>
          <Button width="full" mt={4} onClick={handleClick}>
            Sign Up
          </Button>
          <Text textAlign="center">Or</Text>
          <Box align="center">
            <Button onClick={OAuth} mt={4}>
              {<Image src={LinkedIn} backgroundSize="auto" />}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
