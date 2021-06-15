import React,{useEffect} from 'react'


const AboutPage = () =>{
    useEffect(() => {
        console.log("About page mounted")
        return () => {
        console.log("About page UNmounted")
       
        }
    }, []);
    return(<h1 style = {{color:"blue",fontSize:"30px"}}>About Page</h1>);
}
export default AboutPage;