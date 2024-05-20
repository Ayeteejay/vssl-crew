import Image from "next/image";
import Hero from "./components/Hero";
import getData from "./components/Strapi";
import SecondaryLink from "./components/SecondaryLink";

const PORT = process.env.NEXT_PUBLIC_LOCAL_STRAPI_PORT || "http://127.0.0.1:1337";
export default async function NotFound() {
  const data = await getData("/api/not-found?populate[hero][populate]=*&populate[prefooter][populate]=*&populate[image][populate]=*&populate[link][populate]=*");
  return (
    <>
      <div className="container">
        <Hero data={data.hero} />
        <section>
          <div className="relative w-60 h-60 md:w-96 md:h-96 mx-auto">
            <Image
              src={`${PORT}${data.image.data.attributes.url}`}
              alt={data.image.data.attributes.alternativeText}
              fill
            />
          </div>
          <div className="flex justify-center mt-10 pb-10 md:pb-20">
            <SecondaryLink
              href={data.link.href}
              target={data.link.target}
              title={data.link.title}
            />
          </div>
        </section>
      </div>
    </>
  );
}
