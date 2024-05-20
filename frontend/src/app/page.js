import Image from 'next/image'
import Link from 'next/link'
import getData from './components/Strapi'
import Prefooter from './components/Prefooter'
import Collage from './components/Collage'
import { H4, H2, H1, StandardText } from './components/Text'
import Flag from '../../public/images/vssl-flag-logo.svg'
import Plunder from '../../public/images/home/plunder.jpg'
import Swords from '../../public/images/home/swords.svg'
import Captain from '../../public/images/home/captain.jpg'
import Awards from '../../public/images/home/awards.jpg'
import Surf from '../../public/images/home/surfs-out.jpg'
import Magic from '../../public/images/home/magic.jpg'
import Piranha from '../../public/images/home/piranha.jpg'
import Shark from '../../public/images/home/shark.svg'
import Drinking from '../../public/images/home/drinking.jpg'
import Camera from '../../public/images/home/camera.jpg'
import Scurvy from '../../public/images/home/scurvy.png'
import Beach from '../../public/images/home/beach.jpg'
import Waves from '../../public/images/home/waves.svg'
import Dagger from '../../public/images/home/dagger.svg'
import Palms from '../../public/images/home/palms.svg'
import Sailor from '../../public/images/home/sailor.jpg'
import SurfsUp from '../../public/images/home/surfs-up.jpg'
import View from '../../public/images/home/view.jpg'

const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";

const PageRow = ({data}) => {
  return (
    <Link href={data.link.href} className='md:w-[550px] text-center relative group h-52 md:h-60'>      
      <div className='relative z-10 h-full flex flex-col justify-center px-5'>
        <H4 data={{classes:"mb-3 transition-all duration-500 group-hover:text-bronze",header:data.header}}/>
        <StandardText data={{content:data.content}}/>
      </div>
      <Image src={`${PORT}${data.image.data.attributes.url}`} width={data.image.data.attributes.width} height={data.image.data.attributes.height} alt={data.image.data.attributes.alternativeText} className="absolute top-0 left-0 opacity-0 group-hover:opacity-50 transition-all duration-500 h-full"/>      
    </Link>
  )
}

export default async function Home(){
  const data = await getData("/api/home?populate[page_navigation][populate]=*&populate[prefooter][populate]=*");
  return (
    <>
      <div className="container">
        <section id="hero">
          <div className="mt-10 md:mt-0 grid md:grid-cols-7 md:gap-x-20 items-start">
          <div className='md:my-20 md:col-span-3 relative'>
            <Image src={Flag} width={"auto"} height={50} alt='VSSL flag logo'/>           
            <H4 data={{header:data.subheader}}/>
            <H1 data={{header:data.header}}/>
          </div>
          <div className='mt-36 md:mt-0 md:col-span-4 bg-cover bg-no-repeat bg-center grid md:grid-cols-3 md:py-20 md:px-16' style={{backgroundImage:`url(${Plunder.src})`}}>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 items-center">
              <Image src={Swords} width={208} height={"auto"} alt="Array of swords and daggers" className="z-10 translate-x-20 md:translate-x-10 w-52 md:w-full"/>
              <Image src={Captain} width={400} height={500} alt="Captain with coins on eyes" className="z-20 mt-10 md:mt-0 w-48 md:w-full border-b-[15px] border-bronze"/>
              <Image src={Awards} width={600} height={520} alt="Two awards on the ground" className="-translate-y-8 md:translate-y-0"/>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 items-start md:mt-10">
              <Image src={Surf} width={600} height={438} alt="Surfer riding wave" className="md:-translate-y-5"/>
              <Image src={Magic} width={450} height={389} alt="Magical items and crystals" className="-translate-y-28 md:translate-y-10"/>
              <Image src={Piranha} width={500} height={337} alt="Dried piranha" className="hidden md:block col-span-1 ml-0 translate-y-0 -translate-x-10 w-80 border-r-[15px] border-bronze"/>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-7 md:gap-x-20 items-start">
          <div className='order-2 md:order-1 relative md:col-span-3'>
            <Image src={Scurvy} width={1000} height={1000} alt="Scurvy" className="w-96"/>
            <H2 data={{header:data.intro_header}}/>
            <StandardText data={{classes:"mt-5",content:data.intro_content}}/>
            <Image src={Waves} width={200} height={"auto"} alt="Illustration of waves" className="hidden md:block absolute -right-32 -bottom-24"/>
          </div>
          <div className="order-1 md:order-2 md:col-span-4 grid items-center md:items-start grid-cols-3 md:grid-cols-3 mt-10">
            <Image src={Shark} width={256} height={187} alt="Illustration of back portion of a shark" className="-translate-y-14 md:-translate-y-20 md:w-40"/>
            <Image src={Drinking} width={600} height={400} alt="Bottles of liquor" className="translate-y-4 md:translate-y-20 md:translate-x-10 border-l-[15px] z-20 border-bronze"/>
            <Image src={Camera} width={467} height={749} alt="Person holding camera" className="md:-translate-y-20 z-10"/>
            <Image src={Beach} width={350} height={498} alt="View of the beach through palm trees" className="hidden md:block md:translate-x-20 md:-translate-y-10"/>
          </div>          
        </div>
        </section>

      <section id="culture" className='my-16 md:my-40'>
        <div className='relative bg-bronze mx-auto md:w-[600px] py-14 px-10 md:p-14 md:animate-drift'>
          <Image src={Dagger} width={150} height={"auto"} alt="Illustration of dagger" className="mb-4"/>
          <H2 data={{header:data.culture_header}}/>
          <StandardText data={{classes:"mt-5 text-ink",content:data.culture_content}}/>
          <Image src={Palms} width={100} height={"auto"} alt="Illustration of palm tree" className="absolute -bottom-20 -left-10"/>
        </div>      
      </section>

      <section id="pages" className='relative pt-10 md:pt-5'>
          <Image src={View} width={200} height={"auto"} alt="Person looking at art" className="hidden lg:block translate-x-60 mb-10"/>
        <div className="absolute top-20 w-full h-full hidden lg:block">
          <Image src={Sailor} width={150} height={"auto"} alt="Sailor with gold coins on eyes" className="sticky top-32"/>
          <Image src={SurfsUp} width={175} height={"auto"} alt="Surfer out on waves" className="sticky left-[100%] top-80 animate-drift"/>
        </div>
        <div className='flex flex-col items-center'>
        {data.page_navigation.map((page) => {
          return (
            <PageRow key={page.id} data={{header:page.header, content:page.content, image:page.image, link:page.link}}/>
          )
        })}
        </div>      
      </section>
      <Collage/>
      <Prefooter data={{illustration:data.prefooter.illustration.data, lithograph:data.prefooter.lithograph.data, quote: data.prefooter.quote,}}/>        
      </div>
    </>
  )
}