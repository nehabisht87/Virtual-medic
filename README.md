# VirtualMedic

## Description

VirtualMedic is an application where you can create an account to schedule an appointment with a doctor. You can signup(for new user) to the application, pick a date in the calendar, pick an available time and you will receive an email with a link to your video call with the available doctor.
You can also check various Health articles, about medicines and diagnostics for your reference.

It is made with MERN Stack and Daily.co API for getting the room for meetings and Chakra-UI has been used for UI & styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Test](#Test)

## Installation

You need following packages to run this application : -

Back-End

- `npm i express // or npm install express to get all packages and dependencies of Express`
- `npm i apollo-server-express // or npm install apollo-server-express to get all packages and dependencies of Apollo`
- `npm i jsonwebtoken // or npm install JSON WEB TOKEN `
- `npm install jwt-decode // or npm install JSON WEB TOKEN decoding `
- `npm install nodemailer // or npm install nodemailer for handle sendin emails `
- npm install graphql // 

Front-End

- `npx install to get all packages and dependencies of React`
- `npm i apollo-boost graphql graphql-tag @apollo/react-hooks // or install libraries to get all packages and dependencies of Apollo Client, GraphQL and Apollo Hooks`
- `npm i @chakra-ui/react // for styling`
- `npm i @daily-co/daily-js //API for get access to video meeting`

Back-end and Front-End Integration

- `npm install if-env //checking the environment we're in and execute a select npm script`
- `npm install -D concurrently //package for running multiple processes concurrently`

## Usage

Developing Component Funtions in React:

`import React from 'react';`

`// add these two library import statements`
`import { ApolloProvider } from '@apollo/react-hooks';`
`import ApolloClient from 'apollo-boost';`
`import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';`
`import SearchBooks from './pages/SearchBooks';`
`import SavedBooks from './pages/SavedBooks';`
`import Navbar from './components/Navbar';`

`const client = new ApolloClient({`
` request: operation => {`
` const token = localStorage.getItem('id_token');`

` operation.setContext({`
` headers: {`
` authorization: token ? ``Bearer ${token}` `: ''`
` }`
` });`
` },`
` uri: '/graphql'`
`});`
`function App() {`
` return (`
` <ApolloProvider client={client}>`
` <Router>`
` <>`
` <Navbar />`
` <Switch>`
` <Route exact path="/" component={Home} />`
` <Route exact path="/login" component={Login} />`
` <Route exact path="/signup" component={Signup} />`
` <Route exact path="/schedule" component={Schedule} />`
` <Route exact path="/myAppointment" component={Appointment} />`
` </Switch>`
` </>`
` </Router>`
` </ApolloProvider>`
` );`
`}`

`export default App;`

The starting command-line is:

`npm run start // to run the app and run server and client`

## Test

None
