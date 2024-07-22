import { useMediaQuery } from "@chakra-ui/react";
const Intro=()=>{
	const [isMobile] = useMediaQuery("(max-width: 1000px)");
    return(
    <>
       {/* <!--================ Start Home Banner Area =================--> */}
		<h1 style={{display:isMobile?"":"none"}}>Header</h1>
	<section  style={{marginTop:isMobile?"0%":"10%"}}className="home_banner_area">
		<div className="banner_inner">
		<center>
		<img style={{marginBottom:"0px",width:"40%",borderRadius:"200px",display:isMobile?"":"none",margin:"0px",border:"0px"}} src="photos/img2.gif" alt="cartoon"></img>
		</center>
			<div className="container">
					
				<div className="row">
					<div className="col-lg-7">
						<div className="banner_content">
						{/* watermarks	 */}
							<div className="watermark" style={{borderRadius:"100%",backgroundColor:" rgba(128, 0, 128, 0.5)",opacity:"0.2",width:"40px"}}>
								.
							</div>
							{/* <div className="watermark" style={{left: "200px",top:"100px",borderRadius:"100",backgroundColor:" rgba(128, 0, 128, 0.5)",opacity:"0.3",width:"5%",height:"10%"}}>
								.
							</div> */}
						
							<div className="watermark" style={{left: "50%",top:"10%",borderRadius:"100%",backgroundColor:" rgba(128, 0, 128, 0.5)",opacity:"0.5",width:"50px",height:"10%"}}>
								.
							</div>
							<div className="watermark" style={{top:"200px",left:"300px",right:"20px",bottom:"200px",fontSize:"50px"}}>
							💡
							</div>

							<h3 className="text-uppercase">Hell0</h3>
							<h1 className="text-uppercase">I am Ayan Nandi</h1>
							<h5 className="text-uppercase">Computer Science Student</h5>
							<div className="d-flex align-items-center">
								<a className="primary_btn" href="/about"><span>Know More</span></a>
								<a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
							</div>
						</div>
					</div>
				<img style={{display:"inline",width:"40%",borderRadius:"200px",display:isMobile?"none":""}} src="photos/img2.gif" alt="cartoon"></img>

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