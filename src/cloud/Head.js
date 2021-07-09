import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"
const api = {
    key: "c4effb6b0193d2d9e67b59d4a0a0e960",
    base: "https://api.openweathermap.org/data/2.5/"
};


const Head = () => {
    const [searchBox, setsearchBox] = useState("");
    const [fetchWeather, setfetchWeather] = useState("");
    const [count, setCount] = useState("");
    const [outPut, setoutPut] = useState([]);

    const addCount = () => {
     const   id = outPut.length + 1
     const   add = {id, count}
        setoutPut([...outPut, add])
        setCount("");
    }

    const dateBuilder = (d) => {
        let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]
    
        let day = ["Sunday", "Monday", "Tuesday", "wednesday",  "Thursday", "Friday", "Saturday",]
    
    
    let days = day[d.getDay()];
    
    let months = month[d.getMonth()];
    
    let date = d.getDate();
    
    let year = d.getFullYear();
    
    return `${days} ${date} ${months} ${year}`
    };

    useEffect(()=> {
        search()
    });

    const search = async () => {
        const res = await axios(
            `${api.base}weather?q=${searchBox}&units=metric&appid=${api.key}`
        );
        console.log(res);
        if (res) {
            return setfetchWeather(res.data);
        }
    }; 
    return (
     <div>
       {fetchWeather ? (
           <>
        <Container>
            <input
            // type = "text" 
            // onKeyPress={addCount}
            value= {count}
            onChange={(event) => {
                setCount(event.target.value)
            }}
            placeholder = "Name"/>
            <input 
            onKeyPress={search}
            value= {searchBox}
            onChange={(e) => {
                setsearchBox(e.target.value)
            }}
            placeholder ="search"/>
            <Dte>{dateBuilder(new Date())}</Dte>
            <Lca>{fetchWeather.name}, {fetchWeather.sys.country}</Lca>
            <Card>{Math.round(fetchWeather.main.temp)}°c</Card>
            <Dec>{fetchWeather.weather[0].description}</Dec>
            <Dv>{outPut.map(({ id, count }) => (
                    <div key = {id}>
                        <div 
                        style={{
                            fontSize: "100px",
                            fontWeight: "bold",
                        }}
                        > 
                            
                            {id} : {count}{" "}</div>
                            </div>))}
            </Dv>
        </Container>
         </>):(<Container>
            <input
            type = "text" 
            onKeyPress={addCount}
            value= {count}
            onChange={(event) => {
                setCount(event.target.value)
            }}
            placeholder = "Name"/>
            <input 
            onKeyPress={search}
            value= {searchBox}
            onChange={(e) => {
                setsearchBox(e.target.value)
            }}
            placeholder ="search"/>
            <Dte>{dateBuilder(new Date())}</Dte>
            <Lca>New york city, us</Lca>
            <Card>15°c</Card>
            <Dec>Cloudy</Dec>
            <Dv>{outPut.map(({ id, count }) => (
                    <div key = {id}>
                        <div 
                        style={{
                            fontSize: "100px",
                            fontWeight: "bold",
                        }}
                        > 
                            
                            {id} : {count}{" "}</div>
                            </div>))}
            </Dv>
        </Container>
        )}
 
     </div>    
    )
}

export default Head

const Container = styled.div`
display: flex;

flex-direction: column;
justify-content:center;
align-items: center;
&:before{
    content:"";
    background: url("/images/down.jpg") center center / cover fixed
    no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}


input{
    display: flex;
height: 50px;
width: 20vw;
// margin-left: 40vw;
border-radius:10px;
// justify-content: center;
// align-items: center;
border: 2px solid black;
cursor: pointer;
}
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

const Dv = styled.div`

`
