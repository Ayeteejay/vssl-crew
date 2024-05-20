"use client"
import { useState } from "react"
import CreateUrl from "./Port"
import { H4, StandardText } from "./Text"
import Image from "next/image"
import Legend from '../../../public/images/the-crew/legend-pin.png';
import OneYear from '../../../public/images/the-crew/1-year-pin.svg';

export const CrewProfile = ({data}) => {    
    const [showModal, setShowModal] = useState(false);
    const badges = data.content.years_served >= 5 ? <Image src={Legend} width={"auto"} height={65} alt="One year badge"/> : Array.from({ length: data.content.years_served }).map((_, index) => (
        <Image key={index} src={OneYear} width={55} height={42} alt="One year badge" />
      ));
    const handleClick = () => setShowModal(prev => !prev)
    return (
        <div className={data.container_classes}>        
            <div className="group cursor-pointer" onClick={handleClick}>        
                <div className="h-[400px] sm:h-[300px] bg-cover bg-center bg-no-repeat transition-all duration-300 hover:grayscale" style={{backgroundImage:`url(${CreateUrl(data.primary.url)})`}}></div>    
                <p className="gin-regular text-2xl mt-3">{data.content.name}</p>
                <p className="elza text-base text-bronze">{data.content.title}</p>
            </div>
            <div className={`bg-smoke flex flex-col items-center justify-center fixed inset-0 m-5 md:m-auto md:h-[700px] md:w-[900px] z-40 transition-all duration-500 overflow-scroll ${showModal ? "translate-y-[40px] md:translate-y-0 opacity-100" : "-translate-y-[1000px] opacity-0"}`}>
                <div className="relative grid md:grid-cols-6 h-full w-full">
                    <button className="text-ink absolute top-[35px] right-[20px] group h-[35px] w-[35px]" onClick={handleClick}>
                        <span className="bg-bronze w-10 h-[1px] rotate-45 absolute top-0 right-0 transition-all duration-300 group-hover:rotate-90"></span>
                        <span className="bg-bronze w-10 h-[1px] -rotate-45 absolute top-0 right-0 transition-all duration-300 group-hover:rotate-0"></span>
                    </button>
                    <div className="hidden md:block md:col-span-2 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${CreateUrl(data.secondary.url)})`}} ></div>
                    <div className="md:col-span-4 p-10 md:p-16 flex flex-col justify-center md:min-h-full">                        
                        <H4 data={{classes:"text-ink mb-2", header:data.content.name}}/>     
                        <p className="elza text-xl uppercase font-bold text-bronze">{data.content.title}</p>                        
                        <StandardText data={{
                            content:data.content.about,
                            classes:"text-ink text-base mt-3 mb-6",
                        }}/>
                        <p className="elza text-base font-bold text-ink border-t border-ink pt-6">{data.content.question_one}</p>
                        <p className="elza text-base text-ink">{data.content.question_one_answer}</p>
                        <p className="elza text-base font-bold text-ink mt-4">{data.content.question_two}</p>
                        <p className="elza text-base text-ink border-b border-ink pb-6 mb-6">{data.content.question_two_answer}</p>
                        <div className="flex justify-start">         
                            {badges}                          
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={handleClick} className={`fixed top-0 left-0 h-full w-full z-30 ${showModal ? "block" : "hidden"}`}></div>
        </div>
    )
}
