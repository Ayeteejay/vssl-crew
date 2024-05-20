import Image from "next/image"
import Brushes from '../../../public/images/home/brushes.jpg'
import Knuckles from '../../../public/images/home/knuckles.jpg'
import Flame from '../../../public/images/home/fire.jpg'
import Sink from '../../../public/images/home/sink.jpg'
import Shades from '../../../public/images/home/shades.jpg'
import Hoodie from '../../../public/images/home/hoodie.jpg'
import Boat from '../../../public/images/home/boat.jpg'
import Fish from '../../../public/images/home/monster.svg'
import Diver from '../../../public/images/home/juan.svg'

export default function Collage(){
    return (
      <section id="closing" className='py-20 md:pt-52 md:pb-5 relative'>              
        <div className="relative z-10">
            <div className='grid grid-cols-3 items-end'>
                <div className="md:w-60 ml-auto">
                    <Image src={Brushes} width={500} height={"auto"} alt="Brushes and paint" className="w-20 md:w-32 ml-auto"/>
                    <Image src={Knuckles} width={500} height={"auto"} alt="Tattooed peron's knuckles" className="w-40 md:w-full border-b-[15px] border-l-[15px] border-bronze"/>
                </div>
                <Image src={Sink} width={500} height={"auto"} alt="Hand coming out of water" className="w-full"/>
                <Image src={Hoodie} width={500} height={"auto"} alt="Backside of person wearing hoodie" className="w-28 md:w-40"/>
            </div>
            <div className="grid grid-cols-3 md:mr-32">
                <Image src={Flame} width={400} height={"auto"} alt="Bonfire at night" className="w-40 ml-auto"/>
                <Image src={Shades} width={500} height={"auto"} alt="Person wearing shades" className=""/>
                <div>
                    <Image src={Boat} width={500} height={"auto"} alt="Boat docked" className="w-80"/>
                    <a href="https://youtu.be/qb2ttbg0oy8" target="_blank" className="group inline-block">
                        <Image src={Fish} width={500} height={"auto"} alt="Illustration of a fish" className="w-20 md:w-28 transition-all duration-300 group-hover:-rotate-6"/>
                    </a>
                </div>
            </div>
        </div>
        <div className="absolute top-0 z-0 translate-x-32 sm:translate-x-60 translate-y-20 lg:translate-x-[450px]">
            <Image src={Diver} width={500} height={"auto"} alt="Juan the diver" className="w-40 md:w-80 animate-float"/>
        </div>    
      </section>
    )
}