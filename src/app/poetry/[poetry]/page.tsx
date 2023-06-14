'use client';
import { Col, Container, Row } from '@nextui-org/react'
import React from 'react'
import RightSidebar from '../../navbar/RightSidebar'
import LeftSidebar from '../../navbar/LeftSidebar'
import NavbarComponent from '../../navbar/MobileNavbar'
import Poetry from '../../components/Poetry'
import { AiOutlineArrowLeft } from 'react-icons/ai';

const FullPoetry = ({ params }: { params: { poetry: string } }) => {
    return (
        <>

            <LeftSidebar />
            <RightSidebar />
            <NavbarComponent />
            <div className=' w-screen  min-[768px]:pl-[8%] xl:pl-[15%] min-[1400px]:pl-[24%] 2xl:pl-[24%] min-[1700px]:pl-[24%] 
            min-[1900px]:pl-[30%] min-[2500px]:pl-[30%] min-[3250px]:pl-[30%] min-[3900px]:pl-[30%] h-screen flex'>
                {/* <div className="relative w-1/3 xl:w-1/5 2xl:w-1/2 h-screen"> */}

                {/* </div> */}
                <div className='w-full h-max max-sm:w-screen min-[768px]:w-[59%] xl:w-[53%] min-[1400px]:w-[54%] 2xl:w-[54%] min-[1700px]:w-[54%] 
            min-[1900px]:w-[57%] min-[2500px]:w-[57%] min-[3250px]:w-[57%] min-[3900px]:w-[57%]  m-0 bg-gradient-to-l from-yellow-50 via-red-50 to-yellow-50 ' >
                    {/* <div className='min-[1900px]:w-[55%] w-1/2 xl:w-[58%] md:w-[58%]   m-0 bg-black/30 ' > */}
                    <Col className='bg-gradient-to-r from-red-100 via-yellow-100 to-red-50 backdrop-blur-lg' css={{
                        width: '100%',
                        height: 'max-content',
                        shadow: '$lg',
                        position: 'sticky',
                        top: '0',
                        zIndex: '90',
                    }}>
                        <Row css={{
                            fontSize: '$md',
                            fontWeight: 'bold',
                            textGradient: '45deg, $yellow600 -60%, $red600 100%',
                            padding: '$5 $10',
                            gap: '$5',
                            cursor: 'pointer',
                           
                            '@smMax': {
                                display: 'none'
                            }
                        }}
                        onClick={() => window.history.back()}
                        >
                          <AiOutlineArrowLeft className='text-2xl text-red-500'/>
                          Poetry
                          </Row>
                        
                    </Col>
                    <Poetry />
                    Poetry: {params.poetry}

                </div>

            </div>


        </>
    )
}

export default FullPoetry
