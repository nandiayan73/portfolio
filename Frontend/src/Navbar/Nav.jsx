import { useMediaQuery } from "@chakra-ui/react";
const Nav=()=>{
	const [isMobile] = useMediaQuery("(max-width: 1000px)");
    return (
	<>

	<header style={{display:isMobile?"none":""}} className="header2">
		<div className="container2">
	<h1 className="logo2" style={{fontFamily:"Playfair Display:", fontWeight:"bolder"}}>AN</h1>
			{/* <a class="navbar-brand logo_h" href="index.html"><img style={{width:"25%",border:"0px",margin:"0px"}} src="photos/logo.png" alt=""></img></a> */}

			<nav>
				<ul className="nav-links2">
					<li><a href="#">HOME</a></li>
					<li><a href="#">ABOUT</a></li>
					<li><a href="#">HOBBIES</a></li>
					<li><a href="#">POSTS</a></li>
					<li><a href="#">CONTACT</a></li>
				</ul>
			</nav>
		</div>
	</header>
	</>

    )
}
export default Nav;