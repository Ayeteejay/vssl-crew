import Image from "next/image"
import Link from "next/link"
import getData from "../components/Strapi";
import Hero from "../components/Hero"
import Value from "../components/Value"
import Prefooter from "../components/Prefooter"
import Ship from '../../../public/images/our-values/ship.svg'
import Shark from '../../../public/images/our-values/shark.svg'
import Mountains from '../../../public/images/our-values/mountains.svg'
import Scurvy from '../../../public/images/our-values/scurvy.png'
import Compass from '../../../public/images/our-values/north-star.png'
import Bubbles from "../components/Bubble"
import Bones from '../../../public/images/our-values/bone-thugs.png'
import Skull from '../../../public/images/our-values/skull.svg'
import Bottle from '../../../public/images/our-values/absinthe.svg'

const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";

export default async function OurValues(){
    const data = await getData("/api/our-value?populate[hero][populate]=*&populate[values][populate]=*&populate[we_are_one_crew_easter_egg][populate]=*&populate[prefooter][populate]=*&populate[up_spirits_easter_egg][populate]=*");
    return (
        <div>
            <div className="container">
                <Hero data={data.hero}/>         
                <section id="we-are-one-crew" className="grid md:grid-cols-2 md:gap-x-20 md:pb-20">
                    <div>
                        <Value data={{classes: {bullets:null, container:"mb-10 md:mb-28", text:"before:bg-smoke", number:null}, content:data.values[0]}}/>
                        <div className="relative hidden md:block">
                            <Image src={`${PORT}${data.values[0].images.data[4].attributes.url}`} width={data.values[0].images.data[4].attributes.width} height={data.values[0].images.data[4].attributes.height} alt={data.values[0].images.data[4].attributes.alternativeText} className="w-96 md:mt-16 border-r-[20px] border-bronze relative z-10"/>
                            <Image src={Scurvy} width={200} height={"auto"} alt="Illustration of Scurvy" className="absolute -top-14 left-20 rotate-12 transition-all duration-1000 hover:-top-28 hover:rotate-0"/>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-end">
                        <div className="col-span-2 w-4/5 relative">
                            <Image src={`${PORT}${data.values[0].images.data[0].attributes.url}`} width={data.values[0].images.data[0].attributes.width} height={data.values[0].images.data[0].attributes.height} alt={data.values[0].images.data[0].attributes.alternativeText}/>
                            <Link href={data.we_are_one_crew_easter_egg.href}>
                                <Image src={Ship} width={"auto"} height={100} alt="Illustration of ship" className="cursor-pointer bg-bronze absolute -bottom-5 left-0 transition-all duration-500 hover:bg-iron"/>
                            </Link>
                        </div>
                        <Image src={`${PORT}${data.values[0].images.data[1].attributes.url}`} width={data.values[0].images.data[1].attributes.width} height={data.values[0].images.data[1].attributes.height} alt={data.values[0].images.data[1].attributes.alternativeText} className="col-span-2 md:w-4/5 mb-auto translate-y-5 md:translate-y-0 translate-x-10"/>
                        <div className="mb-auto sm:-translate-y-32 lg:-translate-y-10 xl:-translate-y-20 relative">
                            <Image src={`${PORT}${data.values[0].images.data[2].attributes.url}`} width={data.values[0].images.data[2].attributes.width} height={data.values[0].images.data[2].attributes.height} alt={data.values[0].images.data[2].attributes.alternativeText}/>
                            <Image src={Mountains} width={"auto"} height={50} alt="Illustration of mountains" className="absolute -bottom-20 sm:top-[115%] left-10 sm:left-0"/>
                        </div>
                        <div className="sm:-translate-x-10 sm:-translate-y-40 lg:-translate-y-24 xl:-translate-y-12 lg:w-4/5 mb-auto relative">
                            <Image src={`${PORT}${data.values[0].images.data[3].attributes.url}`} width={data.values[0].images.data[3].attributes.width} height={data.values[0].images.data[3].attributes.height} alt={data.values[0].images.data[3].attributes.alternativeText} className="relative z-10"/>
                            <Image src={Shark} width={"auto"} height={75} alt="Illustration of shark" className="hidden lg:block absolute top-5 left-[100%] animate-swim"/>
                        </div>
                    </div>
                </section>
            </div>
            <section id="communication-is-our-compass" className="pb-5 pt-40 md:pb-20 md:pt-32 relative overflow-hidden">
                <div className="max-w-screen-sm mx-auto relative">
                    <Value data={{classes: {bullets:{text:null, bullet_background:"bg-ink"}, container:"relative z-10 mb-10 md:mb-28 bg-bronze p-10", text:"text-ink before:bg-smoke", number:"text-smoke border-ink"}, content:data.values[1]}}/>
                    <div className="absolute -top-[100px] md:-top-[150px] left-1/2 -translate-x-1/2">
                        <Image src={Compass} width={300} height={"auto"} alt="Illustration of compass" className="animate-compass"/>
                    </div>
                </div>
                <Bubbles/>
            </section>
            <div className="container">
                <section id="quality-is-our-course" className="grid items-center mb-10 md:grid-cols-2 md:gap-x-20 md:mb-5">
                    <div className="grid grid-cols-2 md:grid-cols-1">
                        <Image src={`${PORT}${data.values[2].images.data[0].attributes.url}`} width={data.values[2].images.data[0].attributes.width} height={data.values[2].images.data[0].attributes.height} alt={data.values[2].images.data[0].attributes.alternativeText} className="col-span-2 md:col-span-1 w-4/5 md:w-full md:pr-20"/>
                        <Image src={`${PORT}${data.values[2].images.data[1].attributes.url}`} width={data.values[2].images.data[1].attributes.width} height={data.values[2].images.data[1].attributes.height} alt={data.values[2].images.data[1].attributes.alternativeText} className="col-span-2 md:col-span-1 w-3/5 -translate-y-10 md:w-3/5 ml-auto md:-translate-y-20"/>
                        <div className="col-span-2 md:col-span-1 w-3/5 translate-x-10 -translate-y-20 md:ml-auto md:-translate-y-28 md:-translate-x-20 relative">
                            <Image src={`${PORT}${data.values[2].images.data[2].attributes.url}`} width={data.values[2].images.data[2].attributes.width} height={data.values[2].images.data[2].attributes.height} alt={data.values[2].images.data[2].attributes.alternativeText} className="relative z-10 transition-all duration-500 hover:translate-y-32 hover:opacity-0"/>
                            <Image src={Bones} width={300} height={"auto"} alt="Beers are on Dave!" className="absolute top-0 left-0"/>
                        </div>
                    </div>
                    <Value data={{classes: {bullets:null, container:"mb-10 md:mb-0", text:"before:bg-smoke"}, content:data.values[2]}}/>
                </section>
            </div>
            <section id="all-hands-on-deck" className="bg-cover bg-no-repeat bg-center py-10 md:py-24" style={{ backgroundImage: `url(${PORT}${data.values[3].images.data[0].attributes.url})` }}>
                <div className="container">
                    <Value data={{classes: {bullets:null, container:"mb-10 md:mb-0", text:"before:bg-smoke"}, content:data.values[3]}}/>
                </div>
            </section>
            <div className="container">
                <section id="up-spirits" className="grid items-center mb-20 md:mb-0 md:grid-cols-2 md:gap-x-20 md:my-28">
                    <div className="grid grid-cols-5 mt-8 md:mt-0 mb-20">
                        <Image src={`${PORT}${data.values[4].images.data[0].attributes.url}`} width={data.values[4].images.data[0].attributes.width} height={data.values[4].images.data[0].attributes.height} alt={data.values[4].images.data[0].attributes.alternativeText} className="col-span-3 mt-auto"/>
                        <Image src={`${PORT}${data.values[4].images.data[1].attributes.url}`} width={data.values[4].images.data[1].attributes.width} height={data.values[4].images.data[1].attributes.height} alt={data.values[4].images.data[1].attributes.alternativeText} className="col-span-2 mt-auto translate-y-10"/>                    
                        <div className="col-span-5 grid grid-cols-5">
                            <div className="col-span-2"></div>
                                <Link href={data.up_spirits_easter_egg.href}>
                                    <Image src={Skull} width={125} height={"auto"} alt="Illustration of skull" className="p-5 bg-bronze transition-all duration-300 hover:rotate-45 col-span-2"/>
                                </Link>
                            <div className="col-span-1"></div>
                        </div>                       
                        <Image src={`${PORT}${data.values[4].images.data[2].attributes.url}`} width={data.values[4].images.data[2].attributes.width} height={data.values[4].images.data[2].attributes.height} alt={data.values[4].images.data[2].attributes.alternativeText} className="col-span-4"/>
                        <Image src={Bottle} width={125} height={"auto"} alt="Illustration of skull" className="p-5 transition-all duration-300 hover:rotate-45 col-span-1"/>
                        <Image src={`${PORT}${data.values[4].images.data[3].attributes.url}`} width={data.values[4].images.data[3].attributes.width} height={data.values[4].images.data[3].attributes.height} alt={data.values[4].images.data[3].attributes.alternativeText} className="col-span-3 border-r border-t border-[20px] border-bronze md:translate-x-10"/>
                        <Image src={`${PORT}${data.values[4].images.data[4].attributes.url}`} width={data.values[4].images.data[4].attributes.width} height={data.values[4].images.data[4].attributes.height} alt={data.values[4].images.data[4].attributes.alternativeText} className="col-span-2 mt-16 relative"/>
                    </div>
                    <Value data={{classes: {bullets:{text:"text-bronze", bullet_background:"text-smoke"}, container:"bg-smoke p-10 sm:px-10 sm:py-16 lg:p-16", number:"border-ink", text:"text-ink before:bg-ink"}, content:data.values[4]}}/>
                </section>
            </div>
            <Prefooter data={{illustration:data.prefooter.illustration.data, lithograph:data.prefooter.lithograph.data, quote: data.prefooter.quote,}}/>   
        </div>
    )
}