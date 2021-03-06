import React, { useState, useEffect } from "react";
import { useMutation, useQuery, /* useDisclosure */ } from '@apollo/react-hooks';
import { CANCEL_APPOINTMENT, CHANGE_APPOINTMENT } from "../../utils/mutations";
import { Link } from "react-router-dom";
import { Container, 
          Heading, 
          FormControl, 
          FormLabel, 
          Input, 
          Button, 
          ButtonGroup,
          Select, 
          Text, 
          Box, 
        Flex } from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-calendar/dist/Calendar.css';
import { ME } from "../../utils/queries";


function Appointment() {
    // defining a state for the time for the schedule
  const [,  setStartDate] = useState(new Date());
  const [ok, setOK] = useState(false);
  const [deleted, setDeleted] = useState(false);
  let email = '';
  const {data} = useQuery(ME);
  //let a = data.me.email;
  console.log(data);
    
    // defining a custon input for the datepicker
    const CustomInput = ({ value, onClick }) => (
        <Input type="day" placeholder="mm/dd/yyy"
                name="day"
                color="black"
                onClick={onClick}
                onChange={handleChange}
                value={formState.day}/>
      ); 

  const [formState, setFormState] = useState({ day: '', time: ''});
  const [isData, setIsData] = useState(false);

  const [removeAppointment] = useMutation(CANCEL_APPOINTMENT);
  const [changeAppointment] = useMutation(CHANGE_APPOINTMENT);
 
  const [link, setLink] = useState('');

  useEffect(() => {
    if(data){
      if(data.me.appointment[0])
      {
        console.log(data.me.appointment[0]);
         setLink(data.me.appointment[0].link); 
         email = data.me.email;
         setFormState({...formState, day: data.me.appointment[0].day, time:data.me.appointment[0].time })
         setIsData(true);
      }
     
    }
    
  }, [data]);
  
  const handleFormSubmitCancel = async event => {
    event.preventDefault();

    if(data.me.appointment[0])
    {

      try{
        const info = await removeAppointment({
       variables: {
         day: formState.day, time: formState.time, link: link
       }
     });
   
     console.log(info);
 
     }catch (e) {
         console.log(e)
     }
  
 
     /*****************************************************/
     /**Sending the mail with nodemailer */
 
     let response = await fetch('/mail', {
       method: "POST",
       body: JSON.stringify({
           day: formState.day,
           time: formState.time,
           link: link,
           mail: email, 
           subject: 'Appointment Canceled on '
       }),
       headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
         },
     }),
       message = await response.json();
       console.log(message);
         //window.location.reload('/'); // we need to make anoter component to congratule the success of the operation
 
     /*****************************************************/
 
     /*****************setOK all operations ok***********************/
    
     setDeleted(true);
     
     /*****************************************************/

    }
    else{
      setDeleted(false)
    }
    
  };

  const handleFormSubmitUpdate = async event => {
      event.preventDefault();
  
      try{
  
         await changeAppointment({     
               variables: {day: formState.day, time: formState.time, link: link }    
              })
    /*   
      if(data)
           email = data.me.email; */
  
      }catch (e) {
          console.log(e)
      }
  
      /*****************************************************/
      /**Sending the mail with nodemailer */
  
      let response = await fetch('/mail', {
        method: "POST",
        body: JSON.stringify({
            day: formState.day,
            time: formState.time,
            link: link,
            mail: email, 
            subject: 'Appointment Rescheduled on '
        }),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
      }),
        message = await response.json();
        console.log(message);
          //window.location.reload('/'); // we need to make anoter component to congratule the success of the operation
  
      /*****************************************************/
  
      /*****************setOK all operations ok***********************/
     
      setOK(true);
      
      /*****************************************************/
    };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  return (
    <Container>
    <Box 
        padding="4"  
        bgcolor="white"
        bgGradient="linear(to-r,blue.900,gray.500,blue.900)" 
        borderRadius="lg" 
        color="black" 
        maxW="3xl"> 
      <Heading  color="white" as="h2" size="xl" fontSize={{ base: "16px", md: "20px", lg: "30px" }} padding="3">My Appointment</Heading>
     {
      isData ?
        <FormControl isRequired>
        <FormLabel color="white">Select day</FormLabel>
        <DatePicker id="day" name="day"
              dateFormat="MM/dd/yyyy"
              minDate={new Date()}
              onChange={date => {setStartDate(date); setFormState({...formState, day: date.toLocaleDateString("en-US")});}}
              customInput={<CustomInput/>}
          />
        <FormLabel color="white">Time (Hr)</FormLabel>
        <Select placeholder="Select option" id="time" name="time" defaultValue={formState.time} onChange={handleChange} focusBorderColor="blue" color="white" borderColor="blue">
              <option value="12:00pm">12:00pm</option>
              <option value="2:00pm">2:00pm</option>
              <option value="4:00pm">4:00pm</option>
          </Select>
          { !ok ?
          <Text color="white" fontSize="sm" py="3">Link: <a href={link} target="_blank" rel="noreferrer">{link}</a></Text>
              : 
              null
          } 
           { deleted ?
            <Box>
              <Text  padding="3"></Text>
                <Text color="white" fontSize="sm">Your Appointment has been Canceled!</Text>   
            </Box>
            : null
           }
           { ok ?
            <Box>
              <Text  padding="3"></Text>
                <Text color="white" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>An email was sent with the information below </Text>
                <Box borderRadius="md">
                    <Text color="white" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>Day: {formState.day} </Text>
                    <Text color="white" fontSize={{ base: "8px", md: "12px", lg: "16px" }}>Time: {formState.time}</Text>
                    <Text color="white" fontSize={{ base: "8px", md: "12px", lg: "16px" }} >Link: <a href={link} target="_blank" rel="noreferrer">{link}</a></Text>
                </Box>   
            </Box>
            : null
           }
           <Flex>
              <Box>
              <ButtonGroup flexWrap="wrap" size="sm" spacing="4">
                  <Button
                      mt={4}
                      colorScheme="teal"
                      type="submit"
                      onClick={handleFormSubmitUpdate}
                  >
                  Reschedule
                  </Button>
                  <Button
                      mt={4}
                      colorScheme="teal"
                      type="submit"
                      onClick={handleFormSubmitCancel}
                  >
                  Cancel
                  </Button>
              </ButtonGroup>
              </Box> 
              
           </Flex>        
        </FormControl>        
        :
        <Box>
          <Text color="white" fontSize="sm" py="3">You don't have an Appointment Registered</Text>
          <Link to="/schedule">
          <Text color="white" fontSize="sm">
                  ??? Go to Schedule
          </Text>       
        </Link>
      </Box>

      
    }
       
    </Box>
    </Container>

  );

}

export default Appointment;
