import { H1 } from "./Text";
import Image from "next/image";
import CreateUrl from "./Port";

export default function Hero({ data }) {
  return (
    <section className="relative flex flex-col items-center max-w-2xl mx-auto pt-5 pb-20 mb-36 md:pt-28 md:pb-32 md:mb-48">
      <H1 data={{ classes: "top-2/4", header: data.header }} />
      <div className="w-96">
        <Image
          priority={true}
          src={CreateUrl(data.lithograph.data.attributes.url)}
          alt={data.lithograph.data.attributes.alternativeText}
          width={data.lithograph.data.attributes.width}
          height={data.lithograph.data.attributes.height}
          className="relative z-10"
        />
        <div className="after:content-[''] after:h-80 after:w-[1px] after:block after:bg-bronze after:absolute after:-bottom-24 after:left-2/4 after:z-0"></div>
      </div>
      {data.illustration.data && (
        <Image
          src={CreateUrl(data.illustration.data.attributes.url)}
          width={data.illustration.data.attributes.width}
          height={data.illustration.data.attributes.height}
          alt={data.illustration.data.attributes.alternativeText}
          className="hidden w-24 animate-spin-slow absolute left-24 bottom-16 md:block z-20"
        />
      )}
    </section>
  );
}
