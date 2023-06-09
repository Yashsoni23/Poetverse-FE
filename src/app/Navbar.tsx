import { Button, Link, Navbar, Text } from '@nextui-org/react'
import React from 'react'
import Logo from './lib/PoetverseLogo';

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
                width: '100%',
                backgroundColor: '$yellow100',
                backdropFilter: 'blur(10px)',
                color: '$warning',
            }} variant={'sticky'} >
                <Navbar.Brand>
                    <Logo/>
                    Poetverse
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse css={{ color: "$warning",backdropFilter:'10px' }}>
                    <Navbar.CollapseItem><Link color={"inherit"} css={{ maxWidth: '100%' }}>Home</Link></Navbar.CollapseItem>
                    <Navbar.CollapseItem><Link color={"inherit"} css={{ maxWidth: '100%' }}>Posts</Link></Navbar.CollapseItem>
                    <Navbar.CollapseItem><Link color={"inherit"} css={{ maxWidth: '100%' }}>Tweets</Link></Navbar.CollapseItem>
                    <Navbar.CollapseItem><Link color={"inherit"} css={{ maxWidth: '100%' }}>Settings</Link></Navbar.CollapseItem>
                    <Navbar.CollapseItem><Link color={"inherit"} css={{ maxWidth: '100%' }}>Profile</Link></Navbar.CollapseItem>
                </Navbar.Collapse>
                <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
                    <Navbar.Link href="#">Features</Navbar.Link>
                    <Navbar.Link isActive href="#">
                        Customers
                    </Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Company</Navbar.Link>
                </Navbar.Content>
                <Navbar.Content>
                    <Text color="inherit" as={Link} size={20} css={{cursor:"pointer",textGradient: "45deg, $yellow600 -20%, $red600 100%",fontWeight:'$bold',paddingBottom:'.1rem'}}>
                        Login
                    </Text>
                    <Navbar.Item>
                        <Button  auto flat css={{backgroundColor:"$yellow600",color:'White'}} as={Link} href="#">
                            Sign Up
                        </Button>
                    </Navbar.Item>
                </Navbar.Content>

            </Navbar>
        </>
    )
}

export default NavbarComponent

