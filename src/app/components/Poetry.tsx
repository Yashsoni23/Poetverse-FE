import { Avatar, Col, Container, Row, Text } from '@nextui-org/react'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Poetry = () => {
    return (
        <>


            <Container
                css={{
                    padding: 0,
                }}
            >
                <Row
                    css={{
                        margin: 0,
                    }}
                >
                    <Col css={{
                        width: '12%',
                        margin: 0,
                        padding: '$3',
                        paddingLeft: '$7',
                    }}>
                        <Avatar css={{
                            position: 'absolute',
                            zIndex: 80,
                            margin: 0,
                        }} color={'error'} size="md" src="https://avatars.githubusercontent.com/u/44036510?v=4" />
                    </Col>

                    <Col >
                        <Row css={{
                            display: 'flex',
                            gap: '$2',
                            paddingTop: '$5',
                        }}>
                            <Text css={{
                                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                fontWeight: '$bold',
                                fontSize: '$sm',
                            }}>Yash Soni</Text>
                            <Text
                                css={{
                                    fontSize: '$sm',
                                    color: '$accents8',
                                }}
                            >@yashsoni2000</Text>
                            <Text css={{
                                fontSize: '$sm',
                                color: '$accents8',
                            }} >&#xB7; 7 June</Text>
                            <div className="hover:bg-pink-100 rounded-full cursor-pointer absolute right-5 top-1 text-pink-600  p-2 transition-all duration-300  drop-shadow-[0_0_25px_#fff]">
                                <BsThreeDots color='primary' className='  text-md ' />
                            </div>

                        </Row>
                        <Row 
                            css={{
                                paddingTop: '$1',
                            }}
                        >
                            <Text css={{
                                textGradient: "45deg, $red600 -20%, $yellow600 50%",
                                fontWeight: '$medium',

                            }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio nemo aspernatur libero minima odit porro voluptas! Beatae repudiandae tempore ratione explicabo, accusantium, consectetur similique voluptates modi cupiditate sit est dolorum maiores atque? Cupiditate fugit porro, id explicabo laboriosam obcaecati vel, enim accusantium expedita totam magni, repudiandae molestiae? Iure quos alias nulla, aspernatur placeat accusantium consectetur ipsum. Dolores soluta ratione modi, nostrum, optio, quos distinctio laboriosam cumque ab adipisci libero esse? Distinctio necessitatibus nulla nihil veniam accusamus beatae. Placeat cum eaque vero nesciunt error minima laudantium harum perspiciatis, doloremque ut porro quisquam ipsum, dolor aliquid, tempore aspernatur sit praesentium quaerat ullam.
                            </Text>

                        </Row>



                    </Col>

                </Row>
            </Container>

        </>
    )
}

export default Poetry