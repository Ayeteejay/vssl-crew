import { v4 as uuidv4 } from "uuid";

const randomNumber = (max) => {
  return Math.floor(Math.random() * max);
}

const Bubble = () => {    
    const size = randomNumber(150);
    const yCordinate = randomNumber(750);
    const xCordinate = randomNumber(1000);
    const floatAnimation = randomNumber(4) + 1;    
    return (
        <div className={`bg-smoke drop-shadow-xl rounded-full shadow-inner absolute animate-bubble-float-${floatAnimation}`} style={{height:`${size}px`, width:`${size}px`,top:`${yCordinate}px`, left:`${xCordinate}px`}}></div>
    )
}

export default function Bubbles() {
    return (
        <>
            {Array.from({ length: randomNumber(30) }, (_) => (
                <Bubble key={uuidv4()} />
            ))}
        </>
    );
}
