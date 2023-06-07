import { Button, Card, Input, Text } from '@nextui-org/react'
import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
    return (
        <>

            <Card
                css={{
                    background: '$blue300',
                    // background: 'linear-gradient(90deg, rgba(217,208,28,1) 0%, rgba(242,165,40,1) 53%, rgba(255,123,0,1) 100%);',
                    width: 'max-content',
                    padding: "$12",
                    dflex: 'column',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '$10',
                }}>
                <Text
                h1
                css={{
                    textGradient: "45deg, $blue600 -20%, $blue900 50%",
                }}
                    weight="bold"
                    size={40}
                // color='white' weight={'bold'} size={'$3xl'} 

                >Login</Text>
                <Input
                    shadow={true}
                    width='25rem'
                    labelLeft="Username"
                    css={{ color: '$blue900', textEmphasisColor: 'primary', backgroundColor: '$blue100', lightingColor: 'AliceBlue', }}
                    className='font-bold '
                    placeholder="xyz_12"
                />
                <Input.Password
                    width='25rem'
                    labelLeft="Password"
                    shadow={true}
                    color='primary'
                    helperColor='secondary'
                // visibleIcon={<UnLockIcon fill="currentColor" />}
                // hiddenIcon={<LockIcon fill="currentColor" />}
                />
                <Button
                    css={{
                        // color: '#ffffff',
                        width: '25rem',
                        fontSize: '1.1rem',
                        // background: "background: rgb(131,58,180);
                        // background: "$blue600",
                    textGradient: "45deg, $blue600 -20%, $blue900 50%",

                    }}
                >Submit</Button>
            </Card>
        </>
    )
}

export default SignUp