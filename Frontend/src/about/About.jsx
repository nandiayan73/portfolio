import { Stack, HStack, VStack,Box } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/react';
import "./about.css"
import Dropdown from '../templates/Dropdown';
import Grid from '../templates/Grid';
import Footer from '../footer/Footer';
import { useState } from 'react';
const About =()=>{
	const [isMobile] = useMediaQuery("(max-width: 680px)");
    const [lang,setLang]=useState([
        {
            name:"C",
            img:"https://e7.pngegg.com/pngimages/724/306/png-clipart-c-logo-c-programming-language-icon-letter-c-blue-logo-thumbnail.png"
        },
        {
            name:"JAVA",
            img:"https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
        },
        {
            name:"PYTHON",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFstZyRKOsNWK_wCvbnxqeHCB600ZTwclFmw&s"
        },
    ]);
    const [web,setWeb]=useState([
        {
        name:"HTML",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
         },
         {
         name:"CSS",
         img:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          },
        {
        name:"JAVASCRIPT",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
         },
        {
        name:"EXPRESS JS",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSd9iLK6WvXyGT2L2P1x36yrhgQjLdjVANA&s"
         },
        {
        name:"REACT JS",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
         },
        {
        name:"JQUERY",
        img:"https://emaillistvalidation.com/blog/content/images/2023/09/jquery.gif"
         },
       
])
    const [database,setDatabase]=useState([
        {
            name:"MySQL",
            img:"https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png"
        },
        {
            name:"MongoDB",
            img:"https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
        }
    ]);
    const [ai,setAI]=useState([
        {
            name:"MACHINE LEARNING",
            img:"https://www.fsm.ac.in/blog/wp-content/uploads/2022/08/ml-e1610553826718.jpg"
        },
        {
            name:"DEEP LEARNING",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmj52eJll-l1kpZDtU3Vcs6_qaTuUZhgBq-Q&s"
        },
        {
            name:"PyTorch",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDphNUlsNx_rJkHodtMWI2BjGiOJZvITapw&s"
        }
    ])
    
    return(
    <>
        <div className='section' style={{marginTop:isMobile?"12%":"5%",}}>
        <center>
        {/* INFORMATION */}
            <HStack >
            {/* <Box w='100%' h='100%'  style={{margin:"0px",padding:"0px"}}> */}
                <img  style={{width:isMobile?"40%":"",}} src="photos/about.gif"></img>
                {/* <img  style={{width:isMobile?"40%":"",}} src="photos/about.png"></img> */}
            {/* </Box> */}
            <Box>
            {/* <h2 style={{textAlign:"left",position:"relative",left:"15%",marginTop:isMobile?"10%":"",fontSize:isMobile?"150%":"200%"}}>LET'S INTRODUCE ABOUT MYSELF</h2> */}
            <p style={{margin:"0px",marginTop:isMobile?"25%":"",padding:"0px",width:"70%",textAlign:"justify",fontSize:isMobile?"12px":"120%",display:isMobile?"none":""}}>
            Hello! I'm <b>Ayan Nandi</b>, a hardworking and passionate coder dedicated to mastering the art of programming. 
                Bringing forth a motivated
                attitude and a variety of powerful skills. 
                Committed to utilizing my skills to further
                the mission of a company, with a positive attitude and unwavering determination
            </p>
            <p style={{margin:"0px",marginTop:isMobile?"25%":"",padding:"0px",width:"70%",textAlign:"justify",fontSize:isMobile?"12px":"120%",display:isMobile?"":"none"}}>
            Hello! I'm <b>Ayan Nandi</b>, a hardworking and passionate coder dedicated to mastering the art of programming. 
                Bringing forth a motivated
                attitude and a variety of powerful skills. 
               
            </p>
            </Box>
            </HStack>
            {/* <p style={{display:isMobile?"":"none",textAlign:"center",width:"70%",fontSize:"15px"}}>
                Committed to utilizing my skills to further
                the mission of a company.
                 {/* with a positive attitude and unwavering determination */}
                {/* </p> */} 



            {/* EDUCATIONAL QUALIFICATION */}
            <div style={{marginTop:isMobile?"40px":""}}>
                <h1 style={{marginTop:isMobile?"10px":"",fontSize:isMobile?"1.5rem":"2.5rem",color:"rgba(128, 0, 128, 0.8)"}}>QUALIFICATIONS</h1>
                <Dropdown></Dropdown>
            </div>
            {/* SKILLS */}
            <div style={{marginTop:isMobile?"50px":"60px"}}>
                <h1 style={{marginTop:isMobile?"20px":"",fontSize:isMobile?"1.5rem":"2.5rem",color:"rgba(128, 0, 128, 0.8)"}}>SKILLS</h1>
            <HStack >
                {/* <Box w='100%' h='100%'  style={{margin:"0px",padding:"0px"}}> */}
                    <img  style={{width:isMobile?"40%":"40%",}} src="photos/skills.png"></img>
                {/* </Box> */}
                <Box>
                {/* <h2 style={{textAlign:"left",position:"relative",left:"15%",marginTop:isMobile?"10%":"",fontSize:isMobile?"150%":"200%"}}>LET'S INTRODUCE ABOUT MYSELF</h2> */}
                <p style={{margin:"0px",marginTop:isMobile?"20%":"",padding:"0px",width:"70%",textAlign:"justify",fontSize:isMobile?"12px":"120%"}}>
                Through my entire career I have tried to upskill myself. Whatever I have learnt I have learnt by heart. 
                </p>
                </Box>
            </HStack>
                {/* <hr style={{boxShadow:"10px 2px white"}}></hr> */}

                {/* programming */}

                <h3 style={{textAlign:"left",marginLeft:"50px",marginBottom:"30px",marginTop:isMobile?"20px":"",fontSize:isMobile?"90%":"140%",color:"black"}}>PROGRAMMING LANGUAGES</h3>
                <Grid items={lang} number={3}></Grid>


                {/* web */}
                <h3 style={{textAlign:"left",marginLeft:"50px",fontSize:isMobile?"90%":"140%",color:"black",position:"relative",bottom:isMobile?"2.5rem":"4rem",marginTop:"5%"}}>WEB DEVELOPMENT</h3>
                <Grid items={web} number={3}></Grid>

                {/* AIML */}
                <h3 style={{textAlign:"left",marginLeft:"50px",fontSize:isMobile?"90%":"140%",color:"black",position:"relative",bottom:isMobile?"2.5rem":"4rem",marginTop:isMobile?"15%":"5%"}}>ARTIFICIAL INTELLIGENCE</h3>
                <Grid items={ai} number={3}></Grid>
                {/* databases */}

                <h3 style={{textAlign:"left",marginLeft:"50px",fontSize:isMobile?"90%":"140%",color:"black",position:"relative",bottom:isMobile?"2.5rem":"4rem",marginTop:isMobile?"15%":"5%"}}>DATABASES</h3>
                <Grid  items={database} number={2}></Grid>


            </div>



            </center>
        </div>
            <Footer></Footer>
       
    </>)

}
export default About;