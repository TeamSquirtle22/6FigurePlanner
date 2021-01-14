import React from 'react'
import { ThemeProvider, theme, ColorModProvider, CSSReset, Flex, Box, Heading, Text, Link, FormControl, FormLabel, Input, Checkbox, Stack, Button, Image }  from '@chakra-ui/react';
import desktop from '../../assets/desktoplarge.jpg';
import Logo from '../../assets/6FigurePlanner_Logo.png';
import LinkedIn from '../../assets/Sign-in-Large---Active.png'

export default function Login() {
  const background = {
    backgroundImage: `url(${desktop})`,
  }

  const overlay = {
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
  }

  const white = {
    backgroundColor: 'rgba(255, 255, 255, .95)',
  }  

  return (
    <div style={background}>
      <div style={overlay}>
        <Flex maxHeight='50vh' width='full' align='center' justifyContent='center'>
          <Image src={Logo} backgroundSize='auto'/>
        </Flex>  
        <Flex minHeight='100vh' width='full' justifyContent='center'>
          {/* <Stack> */}
            <Box maxHeight='420px' textAlign="center" borderWidth={1} px={4} width='full' maxWidth='500px' borderRadius={4} textAlign='center' boxShadow='lg' style={white}>
              <Heading>Sign In To Your Account</Heading>
              <Text>
                Or <Link>start your 14-day free trial</Link>
              </Text>
              <LoginForm />
            </Box>
          {/* </Stack> */}
        </Flex>
      </div>
    </div>
  )
}

const LoginForm = _ => {
  const OAuth = _ => fetch('/linkedin-auth');

  return (
    <Box my={8} textAlign='left'>
      <form>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email address" id='email-sign-in' autoComplete="on"/>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" id='password-sign-in' autoComplete="on"/>
        </FormControl>
        <Stack isInline justifyContent='space-between'>
          <Box>
            <Checkbox>Remember Me</Checkbox>
          </Box>
          <Box>
            <Link>Forgot your password?</Link>
          </Box>
        </Stack>
        <Button width="full" mt={4}>Sign In</Button>
        <Text textAlign='center'>Or</Text>
        <Box align='center'>
          <Button onClick={OAuth} mt={4}>{<Image src={LinkedIn} backgroundSize='auto'/>}</Button>
        </Box>
      </form>
    </Box>
  )
}
