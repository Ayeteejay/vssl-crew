import { v4 as uuidv4 } from "uuid"
import Image from "next/image"
import getData from "../components/Strapi"
import { H4, AccentuatedText, Statistics, StandardText } from "../components/Text"
import { Divider } from "../components/Utilities"
import { CrewProfile } from "../components/CrewProfile"
import Hero from "../components/Hero"
import CrewSlider from "../components/CrewSlider"
import ClientManagementEasterEgg from "../components/ClientManagementEasterEgg"
import Prefooter from '../components/Prefooter'

const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";

export default async function Crew(){    
    const data = await getData("/api/the-crew?populate[hero][populate]=*&populate[prefooter][populate]=*&populate[statistic][populate]=*&populate[leadership][populate]=*&populate[client_management_top_left][populate]=*&populate[client_management_middle_left][populate]=*&populate[client_management_top_right][populate]=*&populate[client_management_bottom_right][populate]=*&populate[client_management][populate]=*&populate[mops_demand_gen][populate]=*&populate[technology][populate]=*&populate[creative][populate]=*&populate[creative_top_left][populate]=*&populate[creative_bottom_left][populate]=*&populate[creative_top_right][populate]=*&populate[creative_bottom_right][populate]=*&populate[accounting][populate]=*&populate[ghost][populate]=*&populate[culture][populate]=*&populate[mops_demand_gen_background][populate]=*&populate[creative_background][populate]=*");      
    return (
        <div>            
            <div className="container">
            <Hero data={data.hero}/>    
            <section id="intro">
                <StandardText data={{                  
                    classes:"max-w-screen-md mx-auto md:text-center text-xl leading-7",
                    content:data.intro_content,                    
                }}/> 
            </section>    
            <Divider/>
            <section id="numbers" className="grid lg:grid-cols-2 gap-y-5 md:gap-y-0">
                <H4 data={{header:data.numbers_header}}/>     
                <div className="grid sm:grid-cols-2 gap-6 sm:gap-10">
                    {data.statistic.map((number) => {
                        return (                  
                            <Statistics key={number.id} data={number}/>                                                  
                        )
                    })}
                </div>          
            </section>
            <section id="leadership" className="my-16 md:my-28 max-w-screen-sm mx-auto">
                <div className="bg-bronze p-10 md:p-14 text-ink">
                    <H4 data={{classes:"mb-4", header:data.leadership_header}}/>
                    <AccentuatedText data={{classes:"before:bg-smoke",content:data.leadership_content}}/> 
                </div>
                <div className="grid md:grid-cols-2 gap-y-7 md:gap-y-0 md:gap-x-7">
                    {data.leadership.map((member) => {
                        return (
                            <CrewProfile key={uuidv4()} data={{primary: member.primary_profile.data.attributes, secondary:member.secondary_profile.data.attributes, content:member}}/>        
                        )
                    })}
                </div>
            </section>
            <section id="client-management">
                <div className="items-center grid lg:grid-cols-2 gap-y-5 md:gap-y-0">
                    <div className="mt-10 md:mt-16 lg:mt-0 order-2 lg:order-1 grid grid-cols-2">                        
                        <Image src={`${PORT}${data.client_management_top_left.data.attributes.url}`} width={data.client_management_top_left.data.attributes.width} height={data.client_management_top_left.data.attributes.height} alt={data.client_management_top_left.data.attributes.alternativeText} className="mt-auto md:mt-0"/>
                        <Image src={`${PORT}${data.client_management_top_right.data.attributes.url}`} width={data.client_management_top_right.data.attributes.width} height={data.client_management_top_right.data.attributes.height} alt={data.client_management_top_right.data.attributes.alternativeText} className="mt-auto w-32 sm:w-48 lg:w-40"/>
                        <Image src={`${PORT}${data.client_management_middle_left.data.attributes.url}`} width={data.client_management_middle_left.data.attributes.width} height={data.client_management_middle_left.data.attributes.height} alt={data.client_management_middle_left.data.attributes.alternativeText} className="md:translate-x-20 lg:translate-x-0 lg:w-56"/>
                        <Image src={`${PORT}${data.client_management_bottom_right.data.attributes.url}`} width={data.client_management_bottom_right.data.attributes.width} height={data.client_management_bottom_right.data.attributes.height} alt={data.client_management_bottom_right.data.attributes.alternativeText} className={`border-l-[16px] border-b-[16px] border-bronze w-52 sm:w-64 lg:w-64 md:translate-x-20 lg:-translate-x-24 transition-all duration-500`}/>
                        <ClientManagementEasterEgg messages={data.client_management_easter_egg}/>
                    </div>
                    <div className="order-1 lg:order-2">
                        <H4 data={{classes:"mb-6", header:data.client_management_header}}/>
                        <AccentuatedText data={{classes:"before:bg-smoke",content:data.client_management_content}}/> 
                    </div>   
                </div>    
                <CrewSlider data={{
                    container_classes: "mt-12 md:mt-20",
                    crew_members: data.client_management,            
                    slides_to_show: 4,      
                    arrow_type: "smoke",        
                }}/>
            </section>
            </div>   
            <section id="mops-demand-gen" className='bg-center bg-cover bg-no-repeat mt-16 md:mt-20 md:py-28 lg:px-20 xl:px-72' style={{backgroundImage:`url(${PORT}${data.mops_demand_gen_background.data.attributes.url})`}}>
                <div className='container'>
                    <div className="bg-smoke p-10 md:p-14">
                        <H4 data={{
                            classes:"text-ink mb-6", 
                            header:data.mops_demand_gen_header }}/>
                        <AccentuatedText data={{                  
                            classes:"text-bronze before:bg-iron",
                            content:data.mops_demand_gen_content,                            
                        }}/> 
                        <CrewSlider data={{
                            container_classes: "mt-12 md:mt-20 text-ink",
                            crew_members: data.mops_demand_gen,            
                            slides_to_show: 3,              
                            arrow_type:"ink" 
                        }}/>                        
                    </div>
                </div>
            </section>
            <div className="container">
                <section id="technology" className='md:my-20'>
                    <H4 data={{
                        classes:"text-smoke mb-6", 
                        header:data.tech_header}}/>
                    <AccentuatedText data={{classes:"before:bg-smoke", content:data.tech_content}}/> 
                <div className="max-w-screen-sm mx-auto hidden md:grid md:grid-cols-2 gap-y-7 md:gap-y-0 md:gap-x-7 mt-10 md:mt-14">
                    {data.technology.map((member) => {
                        return (
                            <CrewProfile key={uuidv4()} data={{primary: member.primary_profile.data.attributes, secondary:member.secondary_profile.data.attributes, content:member}}/>   
                        )
                    })}
                </div>
                    <div className='pt-10 md:hidden'>
                        <CrewSlider data={{
                        container_classes: "mt-12 md:mt-20",
                        crew_members: data.technology,            
                        slides_to_show: 1,      
                        arrow_type: "smoke",        
                        }}/>
                    </div>
                </section>
                <section id="creative" className='items-center grid md:grid-cols-2 my-10 md:my-20'>
                    <div className='grid grid-cols-2'>
                        <Image src={`${PORT}${data.creative_top_left.data.attributes.url}`} width={data.creative_top_left.data.attributes.width} height={data.creative_top_left.data.attributes.height} alt={data.creative_top_left.data.attributes.alternativeText} className="w-52 mt-auto md:mt-0 md:w-72"/>

                        <Image src={`${PORT}${data.creative_top_right.data.attributes.url}`} width={data.creative_top_right.data.attributes.width} height={data.creative_top_right.data.attributes.height} alt={data.creative_top_right.data.attributes.alternativeText} className="w-60 md:w-80 translate-y-10 -translate-x-10 md:-translate-x-16 md:translate-y-10 z-10 border-r-[15px] border-bronze border-b-[15px]"/>

                        <Image src={`${PORT}${data.creative_bottom_left.data.attributes.url}`} width={data.creative_bottom_left.data.attributes.width} height={data.creative_bottom_left.data.attributes.height} alt={data.creative_bottom_left.data.attributes.alternativeText} className="translate-x-10 md:w-96 md:-translate-y-20 md:translate-x-10"/>

                        <Image src={`${PORT}${data.creative_bottom_right.data.attributes.url}`} width={data.creative_bottom_right.data.attributes.width} height={data.creative_bottom_right.data.attributes.height} alt={data.creative_bottom_right.data.attributes.alternativeText} className="w-20 translate-y-20 translate-x-10 md:w-32 md:translate-y-20 md:translate-x-20"/>
                    </div>
                    <div className='mt-16 md:mt-0'>
                        <H4 data={{
                            classes:"text-smoke mb-6", 
                            header:data.creative_header }}/>
                        <AccentuatedText data={{classes:"before:bg-smoke", content:data.creative_content}}/> 
                    </div>
                </section>
                </div>                    
                <div className='bg-center bg-cover bg-no-repeat mt-16 pb-20 md:mt-20 md:py-28' style={{backgroundImage:`url(${PORT}${data.creative_background.data.attributes.url})`}}>
                    <div className='container'>
                        <CrewSlider data={{
                        container_classes: "mt-12 md:mt-20",
                        crew_members: data.creative,            
                        slides_to_show: 4,      
                        arrow_type: "smoke",        
                        }}/>
                    </div>
                </div>
                <div className="container">

                    <section id="accounting" className='items-center grid md:grid-cols-5 md:gap-x-20 my-10 md:mb-20 md:mt-32'>
                        <div className='md:col-span-3'>
                            <H4 data={{
                                classes:"text-smoke mb-6", 
                                header:data.accounting_header }}/>
                            <AccentuatedText data={{classes:"before:bg-smoke", content:data.accounting_content}}/> 
                        </div>
                        {data.accounting.length > 1 ?
                                <CrewSlider data={{
                                    container_classes: "mt-20 md:col-span-2",
                                    crew_members: data.accounting,            
                                    slides_to_show: 1,      
                                    arrow_type: "smoke",        
                                }}/>
                            :                         
                            <div className="mt-16 md:mt-0 md:col-span-2">
                                {data.accounting.map((member) => {
                                    return (
                                        <CrewProfile key={uuidv4()} data={{primary: member.primary_profile.data.attributes, secondary:member.secondary_profile.data.attributes, content:member}}/>     
                                    )
                                })}
                            </div>
                            }
                    </section>

                    <section id="ghost-crew" className='items-center md:grid md:grid-cols-5 md:gap-x-20 my-10 md:my-20'>
                        <div className='md:col-span-3'>
                            <H4 data={{
                                classes:"text-smoke mb-6", 
                                header:data.ghost_header}}/>
                            <AccentuatedText data={{classes:"before:bg-smoke", content:data.ghost_content}}/> 
                        </div>                        
                        <CrewSlider data={{
                            container_classes: "mt-20 md:col-span-2",
                            crew_members: data.ghost,            
                            slides_to_show: 1,      
                            arrow_type: "smoke",        
                        }}/>
                    </section>

                    <section id="culture-crew" className='items-center md:grid md:grid-cols-5 md:gap-x-20 my-10 md:mt-20 md:mb-32'>
                        <div className='md:col-span-3'>
                            <H4 data={{
                                classes:"text-smoke mb-6", 
                                header:data.culture_header}}/>
                            <AccentuatedText data={{classes:"before:bg-smoke", content:data.culture_content}}/> 
                        </div>                        
                        {data.culture.length > 1 ?
                            <CrewSlider data={{
                                container_classes: "mt-20 md:col-span-2",
                                crew_members: data.culture,            
                                slides_to_show: 1,      
                                arrow_type: "smoke",        
                            }}/>
                        :                         
                        <div className="mt-16 md:mt-0 md:col-span-2">
                            {data.culture.map((member) => {
                                return (
                                    <CrewProfile key={uuidv4()} data={{primary: member.primary_profile.data.attributes, secondary:member.secondary_profile.data.attributes, content:member}}/>     
                                )
                            })}
                        </div>
                        }
                    </section>                    
                </div>        
                <Prefooter data={{illustration:data.prefooter.illustration.data, lithograph:data.prefooter.lithograph.data, quote: data.prefooter.quote,}}/>            
        </div>
    )
}