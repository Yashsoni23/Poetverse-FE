'use client';

import { Card, Text ,Input,Button} from '@nextui-org/react'
import React from 'react'

const Login = () => {
  return (
    <>
     <Card
                css={{
                    background: '$yellow300',
                    width: 'max-content',
                    padding: "$12",
                    dflex: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '$14',
                    shadow: '$lg',
                    borderColor: '$accents1'
                }}
                borderWeight={'bold'}                >
                <Text
                    h1
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                    size={20}
                >Login</Text>
                <Input
                    type='email'
                    shadow={true}
                    width='100%'
                    color="primary"
                    labelPlaceholder="Email"
                    helperColor='success'
                    clearable
                    css={{ backgroundColor: '$neutralShadow', }}
                    status='warning'
                    className='font-bold '
                />
                <Input.Password
                    width='100%'
                    type='password'
                    shadow={true}
                    color="primary"
                    labelPlaceholder="Password"
                    helperColor='success'
                    status='warning'
                    className='font-bold '
                    css={{ backgroundColor: '$neutralShadow', }}

                />
                <Button
                    css={{
                        color: '#ffffff',
                        width: '100%',
                        fontSize: '1.1rem',
                        background: "$yellow600",
                        fontWeight: 'bold'

                    }}
                >
                    Submit
                </Button>
            </Card>
    </>
  )
}

export default Login