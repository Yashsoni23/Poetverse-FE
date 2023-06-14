'use client';
import { Container, Row, Col, Text, Card, Button, Spacer, Image } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
import { useState } from 'react';
import NavbarComponent from './navbar/MobileNavbar';
import RightSidebar from './navbar/RightSidebar';
import LeftSidebar from './navbar/LeftSidebar';
import Deshboard from './home/page';
import SignUpPage from './signup/page';

export default function Home() {
  const [alreadyUser, setAlreadyUser] = useState(false);


  return (
    <>

    {
      alreadyUser ? <Deshboard /> : <SignUpPage />
    }

    </>
  )
}
