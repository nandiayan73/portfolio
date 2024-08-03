import React, { useState } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
const Grid = ({items,number}) => {
	const [isMobile] = useMediaQuery("(max-width: 680px)");
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat({number}, 1fr)',
        gap: '0px',
    };

    const gridItemStyle = {
        backgroundColor: 'white',
        padding: '20px',
        textAlign: 'center',
        border: '0px solid #ddd',
        borderRadius: '5px',
    };

    return (
        <div style={{display:"grid",gap:"opx",gridTemplateColumns: 'repeat(+'+number+', 1fr)',}}>
            
            {items.map((item, index) => (
                <div style={{backgroundColor:"white",height:"100%",margin:"0px",padding:"0px"}}>
                    <img src={item.img} style={{width:"30%",height:"50%"}}></img>
                    <p style={{textAlign:"center",marginLeft:"35px",fontWeight:"bold",fontSize:isMobile?"9px":"15px",marginRight:isMobile?"22%":"8%"}}>{item.name}</p>
                </div>
            ))}
        </div>
    );
};
        {/* <div key={index} style={gridItemStyle} > */}

export default Grid;
