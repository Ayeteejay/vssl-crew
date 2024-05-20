import Image from 'next/image'
import Hero from "../components/Hero"
import getData from '../components/Strapi'
import Coin from '../components/Coin'
import Prefooter from "../components/Prefooter"
import { H4, AccentuatedText } from "../components/Text"
import PitchSlider from '../components/PitchSlider'

const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";

export default async function About(){    
  const data = await getData("/api/about-vssl?populate[hero][populate]=*&populate[prefooter][populate]=*&populate[who_image][populate]&populate[pitch_gallery][populate]&populate[coin_top][populate]=*&populate[coin_middle][populate]=*&populate[coin_bottom][populate]=*&populate[coin_illustration][populate]=*&populate[commander_coin][populate]=*");
    return (                
        <div>
          <div className="container">                            
            <Hero data={data.hero}/>                   
            <section className="grid md:grid-cols-2">  
              <div>
                <H4 data={{classes:"mb-6", header:data.pitch_header}}/>
                <AccentuatedText data={{classes:"before:bg-smoke", content:data.pitch_content}}/> 
              </div>             
            </section>   
            <PitchSlider data={{images:data.pitch_gallery.data}}/>            
            <section className="my-10 grid items-center md:my-24 md:grid-cols-2">      
              <Image src={`${PORT}${data.who_image.data.attributes.url}`} width={data.who_image.data.attributes.width} height={data.who_image.data.attributes.height} alt={data.who_image.data.attributes.alternativeText} className="order-2 md:order-1"/>
              <div className="order-1 md:order-2 pb-16 pt-5 md:py-0 md:pl-20">
                <H4 data={{classes:"mb-6",header:data.who_header }}/>
                <AccentuatedText data={{ classes:"before:bg-smoke",content:data.who_content }}/> 
              </div> 
            </section>  
            <section className="my-10 grid items-center md:my-24 md:grid-cols-2 relative">      
              <div className="py-10 md:py-0 md:pr-20">
                <H4 data={{classes:"mb-6",header:data.coin_header}}/>
                <AccentuatedText data={{classes:"before:bg-smoke", content:data.coin_content}}/> 
              </div> 
              <div className="lg:ml-20 xl:ml-32 mt-8">
                <Coin src={`${PORT}${data.commander_coin.data.attributes.url}`}/>
                <Image src={`${PORT}${data.coin_top.data.attributes.url}`} width={data.coin_top.data.attributes.width} height={data.coin_top.data.attributes.height} alt={data.coin_top.data.attributes.alternativeText} className="w-64"/>
                <Image src={`${PORT}${data.coin_middle.data.attributes.url}`} width={data.coin_middle.data.attributes.width} height={data.coin_middle.data.attributes.height} alt={data.coin_middle.data.attributes.alternativeText} className="w-80 ml-auto -translate-y-10 md:translate-y-0 md:ml-0 md:translate-x-10"/>
                <Image src={`${PORT}${data.coin_bottom.data.attributes.url}`} width={data.coin_bottom.data.attributes.width} height={data.coin_bottom.data.attributes.height} alt={data.coin_bottom.data.attributes.alternativeText} className="w-2/3 sm:w-1/3 -translate-y-10 md:w-52 md:-translate-y-6"/>
                <Image src={`${PORT}${data.coin_illustration.data.attributes.url}`} width={data.coin_illustration.data.attributes.width} height={data.coin_illustration.data.attributes.height} alt={data.coin_illustration.data.attributes.alternativeText} className="ml-auto w-28 -translate-y-20 md:translate-y-0 md:ml-0 md:w-20 md:translate-x-10"/>
              </div>
            </section>  
          </div>
          <Prefooter data={{illustration:data.prefooter.illustration.data, lithograph:data.prefooter.lithograph.data, quote: data.prefooter.quote,}}/>        
          </div>             
    )
}