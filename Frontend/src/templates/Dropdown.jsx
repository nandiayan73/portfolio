import React from 'react';
import { useState } from 'react';
import KnowMore from './Edudetails';
const Education = () => {
    const [items,setItems]=useState([
        {
            course:"Class Xth Examination",
            school:"Techno India Group Public School",
            "PassingYear":2018,
            "Percentage":86.4,
            "details":"I have successfully completed my class 10th examination from Central Board Of Secondary Education securing 86.4% marks in the year 2018."
        },
        {
            course:"Class XIIth Examination",
            school:"Techno India Group Public School",
            "PassingYear":2020,
            "Percentage":82.6,
            "details":"I have successfully completed my class 12th examination from Central Board Of Secondary Education securing 82.6% marks in the year 2020.",
        },
        {
            course:"Bachelor Of Computer Science",
            school:"Swami Vivekananda Institute Of Science & Technology",
            "PassingYear":2025,
            "details":"Currently, I am pursuing BTECH in CSE from Swami Vivekananda Institute Of Science & Technology.I am in currently 4th year." 
            // "Percentage":86.4
        },
    ]);
    const containerStyle = {
        backgroundColor: 'white',
        color: '#4B0082', // Indigo color
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: 'auto',
    };

    const headerStyle = {
        textAlign: 'center',
        marginBottom: '20px',
    };

    const itemStyle = {
        marginBottom: '10px',
        padding: '10px',
        borderLeft: '5px solid #4B0082',
        backgroundColor: '#f9f9f9',
    };

    const titleStyle = {
        fontWeight: 'bold',
        fontSize: '18px',
        color: "rgba(128, 0, 128, 0.8)",
    };

    const institutionStyle = {
        // fontWeight:"bold",
        color: '#333',
    };

    const dateStyle = {
        color: '#666',
    };

    return (
        <div style={containerStyle}>
            {/* <h2 style={headerStyle}>Educational Details</h2> */}
            {items.map(item=>{
                return  <div style={itemStyle}>
                            <div style={titleStyle}>{item.course}</div>
                            <div style={institutionStyle}>{item.school}</div>
                            <div style={dateStyle}>{item.PassingYear}</div>
                            <KnowMore details={item.details}></KnowMore>
                        </div>
            })}
        </div>
    );
};

export default Education;
