import { Avatar, Button, Col, Container, Input, Link, Navbar, Row, Spacer, Text } from '@nextui-org/react'
import React, { useRef } from 'react'
import { SVGIcons } from '../lib/PoetverseLogo';

import { BiHomeCircle, BiSearch, BiLogInCircle } from 'react-icons/bi'
import { IoMdNotificationsOutline, IoMdBookmark } from 'react-icons/io'
import { IoBookmarkOutline, IoSearch } from 'react-icons/io5'
import { FiMail, } from 'react-icons/fi'
import { BsPlusSquare, } from 'react-icons/bs'
import { GiFeather } from 'react-icons/gi'
import { AiOutlineSetting } from 'react-icons/ai'

const LeftSidebar = () => {
    let collapseItems: any =
        [
            "Features",
            "Customers",
            "Pricing",
            "Company",
            "Legal",
            "Team",
            "Help & Feedback",
            "Login",
            "Sign Up",
        ];
    return (
        <>
            {/* -------------------------------------------------------------Left Desktop Side Bar------------------------------------------------------------- */}

            <Container css={{
                backgroundColor: '$yellow200',
                position: 'fixed',
                width: '100%',
                height: '100vh',
                placeContent: 'normal',
                borderRight: '1px solid $yellow500',
                left: '0',
                '@smMin': {
                    width: '8%',
                },
                '@mdMax': {
                    width: '8%',

                },
                '@mdMin': {
                    width: '15%',

                },
                '@lg': {
                    width: '24%',
                },
                '@xl': {
                    width: '30%',
                },
                '@2xl': {
                    width: '35%',
                },
                '@smMax': {
                    display: 'none',
                }


            }}>
                <Container css={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-end',
                    paddingTop: '$5',
                    // paddingLeft: '$20',
                    gap: '$8',
                    position: 'absolute',
                    // width: 'max-content',
                    height: '100vh',
                    left: '0',
                    backgroundColor: '$yellow200',
                    '@smMin': {
                        // width: 'max-content',
                        paddingLeft: '$15',
                        gap: '$5',

                    },
                    '@mdMax': {
                        widows: 'max-content',
                        paddingLeft: '$10',
                        gap: '$5',

                    },
                    '@mdMin': {
                        // width: '15%',

                    },
                    '@lg': {
                        // width: '25%',
                    },
                    '@xl': {
                        // width: '30%',
                    },
                    '@2xl': {
                        // width: '35%',
                    },
                    '@smMax': {
                        display: 'none',
                    }

                }}>
                    <Col css={{
                        width: 'max-content',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '$8',
                        '@lg': {
                            paddingRight: '$18',
                        },
                        '@lgMax': {
                            // bgColor: 'rgba(255, 255, 255,1)',
                            gap: '$5',
                        },
                        '@mdMax': {
                            gap: '$2',
                        }

                    }}>
                        <Row css={{ width: 'max-content', fontSize: '$3xl', backgroundColor: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '$7', paddingBottom: '$6' }}>
                            <SVGIcons.BrandLogo />
                            <Text hideIn={'lg'} css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                fontSize: '$2xl',
                                fontWeight: '$bold',
                                // display: 'none',
                                '@lg': {
                                    display: 'flex',
                                    // alignSelf: 'center',
                                },
                            }}>Poetverse</Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <BiHomeCircle className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2 ' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Home
                            </Text>
                        </Row>

                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <BiSearch className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Search
                            </Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <BsPlusSquare className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Upload
                            </Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <FiMail className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Messages
                            </Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <GiFeather className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Write
                            </Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <IoMdNotificationsOutline className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Notification
                            </Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <IoBookmarkOutline className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Saved
                            </Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            }
                        }}>
                            <AiOutlineSetting className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Setting
                            </Text>
                        </Row>
                        <Row css={{
                            width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                            padding: '$5',
                            '&:hover': {
                                shadow: '0 0 10px #7879788a',
                                background: '$yellow100',
                                borderRadius: '$3xl',
                                cursor: 'pointer'
                            },
                            '@lgMax': {
                                display: 'none'
                            }
                        }}>
                            <BiLogInCircle className='text-red-500 text-3xl max-xl:text-2xl 2xl:mr-2 ' />
                            <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Login / Signup
                            </Text>
                        </Row>


                        <Row css={{ width: '100%', position: 'absolute', bottom: 0, padding: '$10 $0', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$5', paddingTop: '$10' }}>
                            <Avatar bordered color={'error'} size="lg" src="https://avatars.githubusercontent.com/u/44036510?v=4" />
                            <Col>
                                <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$bold' }}>
                                    Yash Soni
                                </Text>
                                <Text hideIn={'lg'} size={'$sm'} css={{ maxWidth: '100%', color: '$gray800', fontWeight: '$bold' }}>
                                    @yashsoni2000
                                </Text>
                            </Col>

                        </Row>


                    </Col>
                </Container>
            </Container>



        </>
    )
}

export default LeftSidebar