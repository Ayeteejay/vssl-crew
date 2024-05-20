"use client"
import { useState, useEffect } from "react"
import Image from "next/image";
import Compass from '../../../public/images/the-crew/compass.svg'

export default function EasterEgg({messages}){
    const [clickCounter, setClickCounter] = useState(0);
    const [messageArray, setMessageArray] = useState([]);
    
    useEffect(() => {        
        const newMessageArray = messages.map((message) => {
            return message.children[0].text;
        });
        setMessageArray(newMessageArray);        
    }, [messages]);         

    const handleClientManagementEasterEggClick = () => {        
        setClickCounter(clickCounter +1);
        if(clickCounter >= messageArray.length){
            console.log(messageArray[messageArray.length-1])
        }else{
            console.log(messageArray[clickCounter]);
        }        
    }
    return (
        <Image src={Compass} width={200} height={"auto"} alt="Illustration of compass" className={"w-16 -translate-y-10 translate-x-24 lg:translate-x-16 cursor-pointer transition-all duration-500 hover:-rotate-45 hover:scale-125"} onClick={handleClientManagementEasterEggClick}/>
    )
}