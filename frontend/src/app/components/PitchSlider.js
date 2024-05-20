"use client"
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SmokeNextArrow, SmokePreviousArrow } from "./Utilities";
import CreateUrl from "./Port";

export default function PitchSlider({data}){
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow:<SmokeNextArrow/>,
        prevArrow:<SmokePreviousArrow/>
      };
    return (
        <Slider {...settings} className="mt-16 sm:mt-20 md:mt-24 relative">
            {data.images.map((image) => {
                return (
                    <Image key={image.id} src={`${CreateUrl(image.attributes.url)}`} width={image.attributes.width} height={image.attributes.height} alt={image.attributes.alternativeText} />
                )
            })}
        </Slider>
    )
}