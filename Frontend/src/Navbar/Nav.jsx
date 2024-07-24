import { useMediaQuery } from "@chakra-ui/react";
import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure,
	Stack,
	Box,
  } from '@chakra-ui/react'
  import React from "react";
const Nav=()=>{
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = React.useRef()
	const [isMobile] = useMediaQuery("(max-width: 1000px)");
    return (
	<>

	<header  className="header2">
		<div className="container2">
	<h1 className="logo2" style={{fontFamily:"Playfair Display:", fontWeight:"bolder", color:"rgba(128, 0, 128, 0.8)"}}>Ayan Nandi</h1>
			{/* <a class="navbar-brand logo_h" href="index.html"><img style={{width:"25%",border:"0px",margin:"0px"}} src="photos/logo.png" alt=""></img></a> */}

			<nav>
			<Button display={isMobile?"":"none"}   color={"white"} backgroundColor={" #800080"}  padding={"0px"} onClick={onOpen}>
			≡
			</Button>
			<Drawer 
				display={isMobile?"":"none"}
				isOpen={isOpen}
				placement='right'
				// initialFocusRef={firstField}
				onClose={onClose}
			>
				<DrawerOverlay />
				<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader borderBottomWidth='1px' color={" rgba(128, 0, 128, 1)"}>
					<img src="/photos/me.jpg" style={{width:"10%",display:"inline"}}></img>
					Explore
				</DrawerHeader>

				<DrawerBody>
					<Stack spacing='24px'>
					<Box>
						<ul   style={{listStyle:"none"}} className="drawNav">
							<li style={{marginBottom:"1%"}}><a href="/" >HOME</a></li>
							<li style={{marginBottom:"1%"}}><a href="/about" >ABOUT</a></li>
							<li style={{marginBottom:"1%"}}><a href="/hobbies" >HOBBIES</a></li>
							<li style={{marginBottom:"1%"}}><a href="/posts" >POSTS</a></li>
							<li style={{marginBottom:"1%"}}><a href="/contact" >CONTACT</a></li>
						</ul>
					</Box>
					</Stack>
				</DrawerBody>

				<DrawerFooter borderTopWidth='1px'>
					<Button variant='outline' mr={3} onClick={onClose}>
					Cancel
					</Button>
					{/* <Button colorScheme='blue'>Submit</Button> */}
				</DrawerFooter>
				</DrawerContent>
			</Drawer>
				<ul  style={{display:isMobile?"none":""}} className="nav-links2">
					<li><a href="/">HOME</a></li>
					<li><a href="/about">ABOUT</a></li>
					<li><a href="hobbies">HOBBIES</a></li>
					<li><a href="/posts">POSTS</a></li>
					<li><a href="contact">CONTACT</a></li>
				</ul>
			</nav>
		</div>
	</header>
	</>

    )
}
export default Nav;