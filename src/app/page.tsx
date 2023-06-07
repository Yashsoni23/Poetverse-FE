'use client';
import { Container, Row, Col, Text, Card } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import Login from './login/page';
import { useState } from 'react';
import SignUp from './signup/page';

export default function Home() {
  const [alreadyUser, setAlreadyUser] = useState(false);


  return (
    <>

      <Container alignContent='center' display='flex' justify='center' fluid className='bg-gray-900 w-screen h-screen ' >

        {alreadyUser ? <Login /> : <SignUp />}
      </Container>


    </>
  )
}
