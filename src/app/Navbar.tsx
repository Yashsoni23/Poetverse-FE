import { Avatar, Button, Col, Container, Link, Navbar, Row, Spacer, Text } from '@nextui-org/react'
import React from 'react'
import { SVGIcons } from './lib/PoetverseLogo';

import { BiHomeCircle, BiSearch, BiLogInCircle } from 'react-icons/bi'
import { IoMdNotificationsOutline, IoMdBookmark } from 'react-icons/io'
import { IoBookmarkOutline } from 'react-icons/io5'
import { FiMail, } from 'react-icons/fi'
import { BsPlusSquare, } from 'react-icons/bs'
import { GiFeather } from 'react-icons/gi'
import { AiOutlineSetting } from 'react-icons/ai'
const NavbarComponent = () => {
    const collapseItems = [
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
            <Navbar isBordered shouldHideOnScroll css={{
                position: 'relative',
                width: '100%',
                backgroundColor: '$yellow700',
                background: 'none',
                backdropFilter: 'blur(10px)',
                display: 'flex',
                justifyContent: 'space-between',
                '@sm': {
                    display: 'none'
                }
            }} variant={'sticky'} >

                <Navbar.Toggle css={{
                    '@sm': {
                        display: 'flex',
                    }
                }} >
                    <Avatar bordered color={'error'} size="lg" src="https://avatars.githubusercontent.com/u/44036510?v=4" />

                </Navbar.Toggle>


                <Navbar.Brand css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 0, paddingRight: '$10', gap: '$10' }}>
                    <SVGIcons.BrandLogo />
                    <Text css={{
                        textGradient: "45deg, $yellow600 -20%, $red600 100%",
                        fontSize: '$2xl',
                        fontWeight: '$bold',
                        // display: 'none',
                        '@lg': {
                            display: 'flex',
                            // alignSelf: 'center',
                        },
                    }}>Poetverse</Text>
                </Navbar.Brand>

                <Container css={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '$yellow50',
                }}>

                    <Navbar.Collapse css={{ width: '80%', backgroundColor: "$yellow50", paddingLeft: '$1' }}>
                        <Container css={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'start',
                            justifyContent: 'start',
                            gap: '$5',
                            paddingLeft: '0',
                            paddingBottom: '$10',
                        }}>
                            <Text weight={'bold'}>
                                Yash Soni
                            </Text>
                            <Text weight={'medium'} size={'$sm'}>
                                @yashsoni2000
                            </Text>
                            <Row css={{ fontSize: '$sm', paddingTop: '$5' }}>
                                <Col css={{ display: 'flex', gap: '$1' }}> <Text weight={'bold'}>10</Text> Following</Col>
                                <Col css={{ display: 'flex', gap: '$1' }}> <Text weight={'bold'}>10</Text> Followers</Col>

                            </Row>
                        </Container>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <BiHomeCircle className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Home
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <BiSearch className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Search
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <BsPlusSquare className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Upload
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <FiMail className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Messages
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <GiFeather className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Write
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <IoMdNotificationsOutline className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Notification
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <IoBookmarkOutline className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Saved
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <AiOutlineSetting className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Setting
                            </Link>
                        </Navbar.CollapseItem>
                        <Navbar.CollapseItem css={{ maxWidth: '100%', }}>
                            <BiLogInCircle className='text-red-500 mr-2' />
                            <Link css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                                Login / Signup
                            </Link>
                        </Navbar.CollapseItem>
                        <Spacer y={11} />
                        <Row css={{
                            width: 'max-content',
                            height: '100%',
                            borderRadius: '$round',
                            display: 'flex',
                            gap: '$14',
                        }}>
                            <Col css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                display: 'flex',
                                fontSize: '$xl',
                                fontWeight: '$bold',
                                gap: '$2',
                            }}>
                                <SVGIcons.MoonLogo />
                                <Text >
                                    Theme
                                </Text>
                            </Col>
                            <Col css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                                display: 'flex',
                                fontSize: '$xl',
                                fontWeight: '$bold',
                            }}>

                                <BiLogInCircle className='text-red-500 mr-2 text-2xl' />
                                <Text >
                                    Logout
                                </Text>
                            </Col>
                        </Row>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


            <Container css={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                paddingTop: '$5',
                paddingLeft: '$20',
                gap: '$8',
                position: 'absolute',
                width: 'max-content',
                height: '100vh',
                left: '0',
                backgroundColor: '$yellow200',
                '@mdMax': {
                    widows: 'max-content',
                    paddingLeft: '$10',
                    gap: '$5',

                },
                '@mdMin': {
                    width: '15%',

                },
                '@lg': {
                    width: '28%',
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
                <Col css={{
                    width: 'max-content',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '$8',
                    '@lg': {
                        paddingRight: '$18',
                    },
                    '@lgMax': {
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
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <BiHomeCircle className='text-red-500 text-3xl xl:mr-2 ' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Home
                        </Text>
                    </Row>

                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <BiSearch className='text-red-500 text-3xl xl:mr-2' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Search
                        </Text>
                    </Row>
                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <BsPlusSquare className='text-red-500 text-3xl xl:mr-2' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Upload
                        </Text>
                    </Row>
                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <FiMail className='text-red-500 text-3xl xl:mr-2' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Messages
                        </Text>
                    </Row>
                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <GiFeather className='text-red-500 text-3xl xl:mr-2' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Write
                        </Text>
                    </Row>
                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <IoMdNotificationsOutline className='text-red-500 text-3xl xl:mr-2' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Notification
                        </Text>
                    </Row>
                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <IoBookmarkOutline className='text-red-500 text-3xl xl:mr-2' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Saved
                        </Text>
                    </Row>
                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <AiOutlineSetting className='text-red-500 text-3xl xl:mr-2' />
                        <Text hideIn={'lg'} css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$medium' }}>
                            Setting
                        </Text>
                    </Row>
                    <Row css={{
                        width: '100%', fontSize: '$xl', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '$7',
                        padding: '$5',
                        '&:hover': {
                            shadow: '0 0 10px #787978',
                            background: '$yellow100',
                            borderRadius: '$3xl',
                            cursor: 'pointer'
                        }
                    }}>
                        <BiLogInCircle className='text-red-500 text-3xl xl:mr-2' />
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
        </>
    )
}

export default NavbarComponent

