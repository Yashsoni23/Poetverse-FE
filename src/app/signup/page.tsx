import { Button, Card, Input, Text } from '@nextui-org/react'
import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
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
                    borderColor: '$accents1',
                  
                }}
                borderWeight={'bold'}                >
                <Text
                    h1
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                    size={20}
                >Create New Account</Text>
                <Input
                    type='text'
                    shadow={true}
                    width='100%'
                    color="primary"
                    labelPlaceholder="Name"
                    helperColor='success'
                    clearable
                    css={{ backgroundColor: '$neutralShadow'}}
                    status='warning'
                />
                <Input
                    type='email'
                    shadow={true}
                    width='100%'
                    color="primary"
                    labelPlaceholder="Email"
                    helperColor='success'
                    clearable
                    css={{ backgroundColor: '$neutralShadow'}}
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

export default SignUp