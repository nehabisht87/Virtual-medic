import React from "react";
import { Container, Text, Heading, Box, Center } from "@chakra-ui/react";
import logo from './virtualmediclogo.png';
import "./home.css";







  

const Home = () => {

return (

  //<Container maxW="xl" centerContent>
      <Center>
        <Box 
        padding="6"  
        bgColor="white"
        boxShadow="dark-lg"
        borderRadius="lg" 
        color="black" 
        maxW="3xl"
        width="100%"
        > 

        <Heading as="h1" size="xl" mb="5" color="grey" >
          <Center>
            
           Welcome to
        
        
          </Center>
        </Heading>
        <Center>
        <img src={logo} width="180" height=""/>
        </Center>
          
        <div className="text">
        <Text fontSize="xl" > 
          <Center>
            Visit your Doctor from Anywhere! 24/7 Consultation.
          </Center>
        </Text>
        
        </div>

        <div className="text">
        <Text fontSize="lg" color="grey" > 
          <Center>
            Get Instant Medical help in Just three steps. As Simple as 1,2,3
            
          </Center>
        </Text>
        
        </div>
        <div className="cardcontainer">
        <div class="card">
          
          <div class="card__cover cover1">
              
          </div>

          
          <div class="card__content">
             <Center>Signup</Center> 
          </div>
          
         </div>


         <div class="card">
          
          <div class="card__cover cover2">
              
          </div>

          
          <div class="card__content">
             <Center>Schedule a Video Call</Center> 
          </div>
          
         </div>

         <div class="card">
          
          <div class="card__cover">
              
          </div>

          
          <div class="card__content">
             <Center>Join the Video Call</Center> 
          </div>
          
         </div>
        </div>

        
        </Box>
      </Center>
  //</Container>
  
  
);
};


export default Home;
