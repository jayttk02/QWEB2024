import { useNavigate } from 'react-router-dom'; 
import {useState} from "react";


export default function Header({current}){

    
    const navigate = useNavigate();   
    
    const banner = {
        zIndex:"1000",
    }

    const handleNavigate=(link)=>{
        navigate(link);
    }

    const linkStyle =(buttonName)=> {
        return {
            background: "none",
            border: "2px",
            cursor: "pointer",
            color: buttonName === current ? "#a89291": "black",
            textDecoration: buttonName === current ? "underline" : "none",

        }
    }

    return(
        <div style = {banner}>
            <button onClick={()=>handleNavigate("/")} style={linkStyle("home")}>About Us</button>
            <button onClick={()=>handleNavigate("/team")} style={linkStyle("team")}>Team</button>
            <button onClick={()=>handleNavigate("/events")} style={linkStyle("events")}>Events</button>
            <button onClick={()=>handleNavigate("/jobboard")} style={linkStyle("job")}>Job Board</button>
        </div>
    )
}