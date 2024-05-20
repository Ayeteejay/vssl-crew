"use client"
import { motion } from "framer-motion"

const variants = {
  hidden: { opacity: 0},
  enter: { opacity: 1 },
}

export default function Template({ children }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear", duration:0.75 }}
    >
      {children}
    </motion.main>
  )
}
