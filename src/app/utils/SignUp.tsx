'use client';
import { Button, Card, Input, Text, useInput } from '@nextui-org/react'
import React from 'react'


const SignUp = () => {
    const { value, reset, bindings } = useInput("");
  
    const validateEmail = (value:any) => {
      return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    };

    const helper = React.useMemo(() => {
        if (!value)
          return {
            text: "",
            color: "",
          };
        const isValid = validateEmail(value);
        return {
          text: isValid ? "Correct email" : "Enter a valid email",
          color: isValid ? "success" : "error",
        };
      }, [value]);
      


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
                borderWeight={'bold'}>
                <Text
                    h1
                    css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                    }}
                    weight="bold"
                    size={20}
                >Create New Account</Text>
                <Input
                          {...bindings}
                          onClearClick={reset}

                    type='text'
                    onInput={(e) => console.log(e.target)}
                    shadow={true}
                    width='100%'
                    color="primary"
                    labelPlaceholder="Name"
                    helperColor='success'
                    clearable
                    css={{ backgroundColor: '$neutralShadow' }}
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
                    css={{ backgroundColor: '$neutralShadow' }}
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