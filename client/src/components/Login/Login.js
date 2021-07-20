import React, { useState } from "react";
import { useMutation } from '@apollo/react-hooks';
import { Link } from "react-router-dom";
import { LOGIN } from "../../utils/mutations"
import Auth from "../../utils/auth";
import "./login.css";
import { Container, Text, Box, Heading, FormControl, FormLabel, Input, Button ,Center} from "@chakra-ui/react";

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e)
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    /*<Container>
    <Box 
    padding="4"  
    bgGradient="linear(to-r,blue.900,gray.500,blue.900)" 
    borderRadius="lg" 
    color="white" 
    maxW="3xl">
      <Link to="/signup">
        <Text color="white" fontSize="sm">
                ← Go to Signup
        </Text>
       
      </Link>

      <Heading  color="white" as="h1" size="2xl"  padding="3">Login</Heading>
      <FormControl>
              <FormLabel color="white">Email address</FormLabel>
              <Input type="email" placeholder="youremail@test.com"
                  name="email"
                  id="email"
                  color="white"
                  onChange={handleChange}/>
              <FormLabel color="white">Password</FormLabel>
              <Input placeholder="******" type="password"
                  name="password"            
                  id="pwd"
                  color="white"
                  onChange={handleChange} />
              {
              error ? 
                <Container>
                  <Text color="white" fontSize="lg">The provided credentials are incorrect</Text>
                </Container> : null
            }
            <Button
                mt={4}
                colorScheme="teal"
                type="submit"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
      </FormControl>
      </Box>
    </Container> */
    //<Container>
    <Center><Box className="maindiv"
    padding="4"  
    bgColor="wheat"
    borderRadius="lg" 
    color="black" 
    boxShadow="dark-lg"
    maxW="3xl">
      
        <div className="leftdiv">

        </div>
        <div className="rightdiv">
        <Heading  color="black" as="h6" padding="3" align="center">Login</Heading>
        <FormControl>
              <FormLabel mt={4}
              color="black">Email ID</FormLabel>
              <Input type="email" placeholder="youremail@test.com"
                  name="email"
                  id="email"
                  color="black"
                  borderColor = "black"
                  onChange={handleChange}/>
              <FormLabel color="black" mt={4}>Password</FormLabel>
              <Input placeholder="******" type="password"
                  name="password"            
                  id="pwd"
                  color="black"
                  borderColor = "black"
                  onChange={handleChange} />
              {
              error ? 
                <Container>
                  <Text color="red" fontSize="sm">The provided credentials are incorrect</Text>
                </Container> : null
            }
            <Button
                mt={4}
                colorScheme="blue"
                type="submit"
                width="100%"
                outline="none"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>
              <Link to="/signup">
              <Text 
              mt={4}
              color="blue"
              fontSize="sm"
              align="center">
              Don’t have an Account? <strong>Signup</strong>
              </Text>
       
      </Link>
      </FormControl>

        </div>
      

      </Box>
      </Center>
   // </Container>
    
  );
}


export default Login;
