import Image from "next/image"
import { QuoteText } from "./Text"
import { Landscape } from "./LandscapeImage"

const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";

export default function Prefooter({data}){
    return (
        <section>
            <div className="container max-w-screen-md flex flex-col md:flex-row items-center mt-0 pt-0 mb-16 md:my-20">
                <Image src={`${PORT}${data.illustration.attributes.url}`} width={data.illustration.attributes.width} height={data.illustration.attributes.height} alt={data.illustration.attributes.alternativeText} className="inline-block"/>
                <QuoteText data={{classes:null, quote: data.quote}}/>
            </div>
            {data.lithograph &&
            <Landscape data={{src:data.lithograph.attributes.url}}/>
            }
        </section>
    )
}