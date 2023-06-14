'use client';

import { Col, Spacer, Text ,Container} from '@nextui-org/react';
import React, { useState } from 'react'
import Login from '../utils/Login';
import SignUp from '../utils/SignUp';


const SignUpPage = () => {
  const [alreadyUser, setAlreadyUser] = useState(false);

  return (
    <>
      <div   className='bg-gradient-to-r from-red-100 via-yellow-100 to-red-50 w-screen h-screen flex justify-center items-center m-0'>
      
        <Col css={{
          margin: 0,
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
         
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
      </div>
      

    
    </>
  )
}

export default SignUpPage