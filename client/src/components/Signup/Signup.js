import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import Auth from "../../utils/auth";
import "./signup.css";
import { ADD_USER } from "../../utils/mutations";
import { Container, Box, Text, Heading, FormControl, FormLabel, Input, Button, Center } from "@chakra-ui/react";


function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email, password: formState.password,
        firstName: formState.firstName, lastName: formState.lastName
      }
    });
    console.log(mutationResponse);
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    //<Container>
    <Center>
      <Box 
      className="maindivi"
      padding="4"  
      bgColor="white"
      boxShadow="dark-lg"
      borderRadius="lg" 
      color="black"
      maxW="3xl"
      bgColor="wheat"> 
      
      
        <div className="leftdivi">

        </div>

        <div className="rightdivi">
        <Heading  color="White" as="h6" padding="3" align="center">Signup</Heading>
      <FormControl>
              <FormLabel color="black">First Name</FormLabel>
              <Input type="firstName" placeholder="Your First Name"
                  name="firstName"
                  id="firstName"
                  color="black"
                  onChange={handleChange}/>
                  <FormLabel color="black">Last Name</FormLabel>
              <Input type="lastName" placeholder="Your Last Name"
                  name="lastName"
                  id="lastName"
                  color="black"
                  onChange={handleChange}/>
              <FormLabel color="black">Email address</FormLabel>
              <Input type="email" placeholder="youremail@test.com"
                  name="email"
                  id="email"
                  color="black"
                  onChange={handleChange}/>
              <FormLabel color="black">Password</FormLabel>
              <Input placeholder="******" type="password"
                  name="password"            
                  id="pwd"
                  color="black"
                  onChange={handleChange} />
            <Button
                mt={4}
                width="100%"
                colorScheme="blue"
                type="submit"
                textAlign="center"
                onClick={handleFormSubmit}
              >
                Submit
              </Button>

              <Center><Link to="/login">
                <Text color="blue" fontSize="sm"
                mt={4}
                >
                  Already have an account? <strong>Login</strong>
                </Text>       
              </Link>
              </Center>
      </FormControl>
        </div>
     
      </Box>
    </Center>
   // </Container>

  );

}

export default Signup;
