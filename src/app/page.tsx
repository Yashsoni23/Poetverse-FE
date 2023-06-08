'use client';
import { Container, Row, Col, Text, Card, Button, Spacer } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import Login from './login/page';
import { useState } from 'react';
import SignUp from './signup/page';
import NavbarComponent from './Navbar';

export default function Home() {
  const [alreadyUser, setAlreadyUser] = useState(true);


  return (
    <>

      <NavbarComponent />
      <Container alignContent='center' display='flex' direction='column' justify='center' css={{
        margin: 0
      }} className='bg-orange-50 w-screen h-screen ' >
        <Col css={{
          display: "none",
          margin: 0,
          "@md": {
            width: "50%",
            display: "flex",
          },
        }} className='w-[50%] h-full'>

        </Col>
        <Col css={{
          margin: 0,
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          "@md": {
            width: "50%",
          }
        }} className='h-full'  >


          {alreadyUser ? <Login /> : <SignUp />}
          <Spacer y={1} />
          <Text h5 css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '$sm',
            gap: 0,
            '@md': {
              fontSize: '$xl'
            }
          }} color='$accents8' >

            You {alreadyUser ? "don't" : "already"} have an account ?
            <Text css={{
              display: 'flex',
              // flexWrap: 'wrap',
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
              paddingLeft: '$5',
              cursor: "pointer",
              '&:hover': {
                textGradient: "45deg, $blue600 -20%, $pink600 100%",
              },

            }} weight={'extrabold'}
              onClick={() => setAlreadyUser(!alreadyUser)}
            >
              {alreadyUser ? "Sign Up" : "Login"}
            </Text>
          </Text>
        </Col>

      </Container>


    </>
  )
}
