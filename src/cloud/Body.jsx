import React from 'react'
import styled from 'styled-components'
import axios from "axios"




const Body = () => { 
    

    const dateBuilder = (d) => {
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
    
        let day = ["Sunday", "Monday", "Tuesday", "wednesday",  "Thursday", "Friday", "Saturday",]
    
    
    let days = day[d.getDay()];
    
    let months = month[d.getMonth()];
    
    let date = d.getDate();
    
    let year = d.getFullYear();
    
    return `${days} ${date} ${months} ${year}`
    }
    return (
        <Cointainer>
            <Dte>{dateBuilder(new Date())}</Dte>
            <Lca>New york city, us</Lca>
            <Card>15°c</Card>
            <Dec>Cloudy</Dec>
        </Cointainer>
    )
}

export default Body

const Cointainer = styled.div`
display:flex;
color: white;
height:80vh;
width: 100vw;
flex-direction:column;
align-items:center;
margin-top: 10vh;
bacground-color:black;
`
const Dte = styled.div`
display: flex;
font-size: 40px;
margin-top: 5vh;

`
const Lca = styled.div`
display: flex;
font-size: 60px;
font-weight:bold;
margin-top: 5vh;

`
const Card = styled.div`
display: flex;
height: 350px;
width: 350px;
justify-content:center;
align-items:center;
font-size: 80px;
font-weight:bold;
margin-top: 5vh;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

const Dec = styled.div`
display: flex;
font-size: 60px;
font-weight:bold;
margin-top: 5vh;
`

