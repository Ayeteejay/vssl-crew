import { v4 as uuidv4 } from "uuid";
import Image from "next/image"
import CreateUrl from "./Port"
import { AccentuatedText } from "./Text"

export function Bullets({ bullets, classes }) {
    return (
        <ol className="pl-12">
            {bullets.map((bullet, index) => {
                return (
                    <li key={uuidv4()} className={`flex items-center gap-x-3 mb-3 elza transition-all duration-400 md:hover:scale-105 ${classes?.text}`}>
                        <div className="w-7">
                            <span className={`bg-bronze w-7 h-7 rounded-full flex items-center justify-center ${classes?.bullet_background}`}>{index + 1}</span>
                        </div>                        
                        <p>{bullet.children[0].text}</p>
                    </li>
                )
            })}
        </ol>
    );
}

export default function Value({ data }) {
    const { bullets: bulletClasses = { text: null, bullet_background: null }, text: textClasses = null, number: numberClasses = null, container: containerClasses = null } = data.classes || {};
    return (
        <section className={`${containerClasses}`}>
            <span className={`uppercase rift text-xl text-bronze border-b ${numberClasses}`}>No. {data.content.id}</span>
            <Image src={CreateUrl(data.content.image.data.attributes.url)} width={data.content.image.data.attributes.width} height={data.content.image.data.attributes.height} alt={data.content.image.data.attributes.alternativeText} className="mx-auto md:mx-0"/>
            <AccentuatedText data={{classes:`mt-10 mb-6 ${textClasses}`, content:data.content.content}}/>
            <Bullets bullets={data.content.bullets[0].children} classes={bulletClasses}/>
        </section>
    );
}
