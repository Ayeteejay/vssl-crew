"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react"
import Slider from "react-slick";
import CreateUrl from "./Port";
import { H4, StandardText } from "./Text"
import Image from "next/image"
import {SmokeNextArrow, InkNextArrow, SmokePreviousArrow, InkPreviousArrow} from './Utilities'
import Legend from '../../../public/images/the-crew/legend-pin.png';
import OneYear from '../../../public/images/the-crew/1-year-pin.svg';

export default function CrewSlider({data}){
    const [modalActive, setModalActive] = useState(false);    
    const [crewData, setCrewData] = useState(data.crew_members.map(member => ({
        ...member,
        showModal:false,
    })));
    const [slidesShown, setSlidesShown] = useState(data.slides_to_show);

    const showBadges = (yearsServed) => yearsServed >= 5 ? <Image src={Legend} width={"auto"} height={65} alt="One year badge"/> : Array.from({ length: yearsServed }).map((_, index) => (<Image key={index} src={OneYear} width={55} height={42} alt="One year badge" />));
    
    const handleShowModal = (memberId) => {
        const updatedCrewData = crewData.map(member => {
            if (member.id === memberId) {
                return {...member, showModal: true};
            }                    
            return {...member, showModal: false};
        });        
        setCrewData(updatedCrewData);        
        setModalActive(prev => !prev);
    }

    const closeAllModals = () => {
        setCrewData(crewData.map(member => {
            return {...member, showModal:false};
        }));
        setModalActive(false);
    }

    useEffect(() => {
        const handleResize = () => {            
            if(window.innerWidth < 576){
                setSlidesShown(1);
            }else if(window.innerWidth < 800){
                setSlidesShown(2)
            }
            else if(window.innerWidth < 1080){
                setSlidesShown(3);
            }
            else{
                setSlidesShown(data.slides_to_show);
            }
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [data.slides_to_show])

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesShown,
      slidesToScroll: 1,
      nextArrow:data.arrow_type === "smoke" ? <SmokeNextArrow/> : <InkNextArrow/>,
      prevArrow:data.arrow_type === "smoke" ? <SmokePreviousArrow/> : <InkPreviousArrow/>
    };
    return (
        <div className={`${data.container_classes}`}>
            <Slider {...settings}>
                {crewData.map((member) => {
                    return (                                              
                        <div key={member.id}  className="group cursor-pointer" onClick={() => handleShowModal(member.id)}>        
                            <div className="h-[400px] sm:h-[300px] bg-cover bg-center bg-no-repeat transition-all duration-300 hover:grayscale" style={{backgroundImage:`url(${CreateUrl(member.primary_profile.data.attributes.url)})`}}></div>        
                            <p className="gin-regular text-2xl mt-3">{member.name}</p>
                            <p className="elza text-base text-bronze">{member.title}</p>                            
                        </div>                                          
                    )
                })}        
            </Slider>
            {crewData.map((member) => {                
                return (
                    <div key={member.id} className={`bg-smoke flex flex-col items-center justify-center fixed inset-0 m-5 md:m-auto md:h-[700px] md:w-[900px] lg:w-[1000px] z-40 transition-all duration-500 overflow-scroll ${member.showModal ? "translate-y-[40px] md:translate-y-0 opacity-100" : "-translate-y-[1000px] opacity-0"}`}>
                        <div className="relative grid md:grid-cols-6 h-full w-full">
                            <button className="text-ink absolute top-[35px] right-[20px] group h-[35px] w-[35px]" onClick={closeAllModals}>
                                <span className="bg-bronze w-10 h-[1px] rotate-45 absolute top-0 right-0 transition-all duration-300 group-hover:rotate-90"></span>
                                <span className="bg-bronze w-10 h-[1px] -rotate-45 absolute top-0 right-0 transition-all duration-300 group-hover:rotate-0"></span>
                            </button>
                            <div className="hidden md:block md:col-span-2 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url(${CreateUrl(member.secondary_profile.data.attributes.url)})`}} ></div>
                            <div className="md:col-span-4 p-10 md:p-16 flex flex-col justify-center md:min-h-full">                        
                                <H4 data={{classes:"text-ink mb-2", header:member.name}}/>     
                                <p className="elza text-xl uppercase font-bold text-bronze">{member.title}</p>                        
                                <StandardText data={{
                                    content:member.about,
                                    classes:`text-ink mb-6 ${member.about[0].children[0].text.length >= 500 ? "text-xs" : "text-base mt-3"}`,
                                }}/>
                                <p className="elza text-base font-bold text-ink border-t border-ink pt-6">{member.question_one}</p>
                                <p className="elza text-base text-ink">{member.question_one_answer}</p>
                                <p className="elza text-base font-bold text-ink mt-4">{member.question_two}</p>
                                <p className="elza text-base text-ink border-b border-ink pb-6 mb-6">{member.question_two_answer}</p>
                                <div className="flex justify-start">         
                                    {showBadges(member.years_served)}                          
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <div onClick={closeAllModals} className={`fixed top-0 left-0 h-full w-full z-30 ${modalActive ? "block" : "hidden"}`}></div>
      </div>
    );
  }

