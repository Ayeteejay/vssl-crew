"use client"
import { useRef } from "react"
import { motion } from "framer-motion"

export default function Coin({src}){
    const constraintsRef = useRef(null);
    return (
        <motion.div ref={constraintsRef} className="absolute top-0 left-0 h-full w-full">       
            <motion.div dragTransition={{  power: 0.1,bounceStiffness: 200 }} dragElastic={0} className="z-40 absolute hidden md:block md:right-96 md:top-52 cursor-pointer w-32 h-32 bg-center bg-contain" drag dragConstraints={constraintsRef} style={{backgroundImage:`url(${src})`}}/>
        </motion.div>
    )
}