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
const RightSidebar = () => {
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

            {/* -------------------------------------------------------------Right Desktop Side Bar------------------------------------------------------------- */}
            <Container css={{
                backgroundColor: '$yellow200',
                position: 'fixed',
                width: '100%',
                height: '100vh',
                placeContent:'end',
                right: '0',
                '@smMin': {
                    width: '40%',
                },
                '@mdMax': {
                    width: '38%',

                },
                '@mdMin': {
                    width: '40%',

                },
                '@lg': {
                    width: '35%',
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
                    justifyContent: 'flex-start',
                    paddingTop: '$5',
                    paddingLeft: '$20',
                    gap: '$8',
                    position: 'absolute',
                    paddingBottom: '$6',
                    // width: 'max-content',
                    height: '100vh',
                    right: '0',
                    backgroundColor: '$yellow200',
                    placeContent:'end',
                    '@smMin': {
                        // width: '40%',
                    },
                    '@mdMax': {
                        // width: '38%',
                        paddingLeft: '$10',
                        gap: '$5',

                    },
                    '@mdMin': {
                        // width: '40%',

                    },
                    '@lg': {
                        // width: '35%',
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
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        padding: '$0 $10',
                        gap: '$8',
                        '@lg': {
                            // paddingRight: '$18',
                        },
                        '@lgMax': {
                            gap: '$5',
                        },
                        '@mdMax': {
                            gap: '$2',
                        }

                    }}>
                        <Row >
                            <BiSearch id='searchIcon' className={`text-2xl text-red-400   absolute z-40 left-4 top-3`} />
                            <input id='searchBar' placeholder='Search Poetverse' title='search' type='search' className='w-full placeholder:font-medium font-medium drop-shadow-4xl text-gray-700 text-md  bg-yellow-50 focus:outline-red-500 p-3 pl-12 rounded-full' />
                        </Row>
                        {

                            collapseItems.length > 1 ?
                                <Col css={{
                                    width: '90%',
                                    height: '65vh',
                                    backgroundColor: '$white',
                                    borderRadius: '$xl',
                                    shadow: 'inset 0 0 10px #7879788a',
                                    overflowY: 'scroll',
                                    position: 'absolute',
                                    zIndex: '$max',
                                    top: 52,
                                    '&::-webkit-scrollbar': {
                                        display: 'none'
                                    }
                                }}>
                                    {
                                        collapseItems.map(() => {
                                            return (
                                                <>
                                                    <Row className='serchResults' css={{
                                                        width: '100%',
                                                        height: 'max-content',
                                                        padding: '$5',
                                                        gap: '$5',
                                                        display: 'flex',
                                                    }}>
                                                        <Avatar src="https://avatars.githubusercontent.com/u/44036510?v=4" />
                                                        <Col css={{ paddingLeft: '$5' }}>
                                                            <Text css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$bold' }}>
                                                                Yash Soni
                                                            </Text>
                                                            <Text size={'$xs'} css={{ maxWidth: '100%', color: '$gray800', fontWeight: '$bold' }}>
                                                                @yashsoni2000
                                                            </Text>
                                                        </Col>
                                                    </Row>
                                                </>
                                            )
                                        })
                                    }


                                </Col>
                                : ""
                        }
                    </Col>
                    <Col css={{
                        width: '100%',
                        height: '88%',
                        overflowY: 'scroll',
                        paddingLeft: '$10',
                        margin: '$0 $10',
                        borderRadius: '$xl',
                        shadow: 'inset 0 0 10px #7879788a',
                        backgroundColor: '$yellow300',
                        '&::-webkit-scrollbar': {
                            display: 'none'
                        }
                    }}>

                        <Text css={{
                            textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$extrabold', fontSize: '$2xl', padding: '$5'
                        }}>
                            You might know
                        </Text>

                        {
                            collapseItems.map(() => {
                                return (
                                    <>
                                        <Row className='serchResults' css={{
                                            width: '100%',
                                            height: 'max-content',
                                            padding: '$5',
                                            gap: '$5',
                                            display: 'flex',
                                        }}>
                                            <Avatar src="https://avatars.githubusercontent.com/u/44036510?v=4" />
                                            <Col css={{ paddingLeft: '$5' }}>
                                                <Text css={{ maxWidth: '100%', textGradient: '45deg, $yellow600 -20%, $red600 100%', fontWeight: '$bold' }}>
                                                    Yash Soni
                                                </Text>
                                                <Text size={'$xs'} css={{ maxWidth: '100%', color: '$gray800', fontWeight: '$bold' }}>
                                                    @yashsoni2000
                                                </Text>
                                            </Col>
                                        </Row>
                                    </>
                                )
                            })
                        }



                    </Col>
                </Container>
            </Container>


        </>
    )
}

export default RightSidebar