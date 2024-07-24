import { useMediaQuery,Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./intro.css"
const Intro=()=>{
	// Hooks:
	const [isMobile] = useMediaQuery("(max-width: 1000px)");
	const [roles,setRoles]=useState(["Developer","Programmer","AI/ML Enthusiast"]);
	const [role,setRole]=useState("");
	const [rolesDisplay,setRolesDisplay]=useState("");
	const [coder,setCoder]=useState("none");
	const [target,setTarget]=useState("");
	const [trans,setTrans]=useState("none");
	

	useEffect(()=>{
		{changeRoles()}
	},[])
	// functions:
	const changeRoles=()=>{
		let i=0;
		let right= true;
		let r=0;
		
		setInterval(()=>{
			setRole(roles[r].slice(0,i));
			if(right)
				i++;
			else
				i--;
			if(i>roles[r].length)
				right=false;
			if(i==0)
			{
				r=(r+1)%roles[r].length;
				right=true;
				i=1;
			}
			if(r==roles.length)
			{
				setRolesDisplay(" ");
				setCoder("");
				{changeTarget()}

			}
		}, 150);
	}
	
	const changeTarget=()=>
	{
		let i=0;
		const word="CODER";
		setInterval(()=>{
			setTarget(word.slice(0,i));
			i++;
			if(i>word.length)
				setTrans("transform 2s ease-in-out");

				
		}, 300);
	}


	const openPdf=()=>{
		const pdf="/documents/resume.pdf";
		window.open(pdf, '_blank');
	}
	

    return(
    <>
       {/* <!--================ Start Home Banner Area =================--> */}
		<h1 style={{display:isMobile?"":"none"}}>Header</h1>
	<section  style={{marginTop:isMobile?"0%":"10%"}}className="home_banner_area">
		<div className="banner_inner">
		<center>
		{/* <img style={{marginBottom:"0px",objectPosition:"50% 20%",width:"40%",borderRadius:"200px",display:isMobile?"":"none",margin:"0px",border:"0px",position:"relative",bottom:"40px",transition: "transform 2s ease-in-out",transform:"rotate(360deg)"}} src="photos/me2.png" alt="cartoon"></img> */}
		<img style={{marginBottom:"0px",width:"60%",borderRadius:"200px",display:isMobile?"":"none",margin:"0px",border:"0px",position:"relative",bottom:"130px"}} src="photos/img2.gif" alt="cartoon"></img>
		</center>
			<div className="container" style={{position:isMobile?"relative":"",bottom:"190px"}}>
					
				<div className="row" >
					<div className="col-lg-7">
						<div className="banner_content">
						{/* watermarks	 */}
							<div className="watermark" style={{borderRadius:"100%",backgroundColor:" rgba(128, 0, 128, 0.5)",opacity:"0.2",width:"40px"}}>
								.
							</div>
							{/* <div className="watermark" style={{left: "200px",top:"100px",borderRadius:"100",backgroundColor:" rgba(128, 0, 128, 0.5)",opacity:"0.3",width:"5%",height:"10%"}}>
								.
							</div> */}
						
							<div className="watermark" style={{position:isMobile?"relative":"fixed",bottom:"200px",left: "50%",top:"10%",borderRadius:"100%",backgroundColor:" rgba(128, 0, 128, 0.5)",opacity:"0.5",width:"50px",height:"10%"}}>
								.
							</div>
							<div className="watermark" style={{top:"200px",left:"300px",right:"200px",bottom:"200px",fontSize:"50px"}}>
							💡
							</div>

							<h3 className="text-uppercase">Hell0</h3>
							<h1 className="text-uppercase">I am Ayan Nandi</h1>
							<h5 style={{color:"rgba(128, 0, 128, 0.8)",padding:"0px",margin:"0px",marginBottom:"10px",overflow:"hidden",display:rolesDisplay}}>{role}  <h5 style={{color:"rgba(128, 0, 128, 0.8)",transition: {trans},transform:"rotate(360)",display:"inline"}} >{target}</h5>
							</h5>
							
							<h5 className="text-uppercase" >Computer Science Student</h5>
							<div className="d-flex align-items-center">
								<a className="primary_btn" href="/about" style={{display:isMobile?"none":""}} ><span>Know More</span></a>
								<a className="primary_btn tr-bg" href="#" style={{display:isMobile?"none":""}} onClick={openPdf}><span>Get CV</span></a>
								{/*  For Mobile  */}
								<Button display={isMobile?"":"none"} backgroundColor={"white"}  border={"2px solid rgba(128, 0, 128, 0.8)"}> 
									<a href="/about"> Know More</a>
								</Button>
								<Button marginLeft={"10px"} style={{display:isMobile?"":"none"}} color={"white"} backgroundColor="rgba(128, 0, 128, 0.8)" onClick={openPdf}>
									Get CV
								</Button>

							</div>
						</div>
					</div>
				<img style={{width:"40%",borderRadius:"200px",display:isMobile?"none":""}} src="photos/img2.gif" alt="cartoon"></img>

					{/* <div className="col-lg-5">
						<div className="home_right_img">
						</div>
					</div> */}
				</div>
			</div>
		</div>
	</section>
    </>)
}
export default Intro;