"use client"
import Image from "next/image"


import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring
} from "framer-motion"
import { useState } from "react"


const Skills = ({skills}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const springConfig = { stiffness: 100, damping: 5 }

  const x = useMotionValue(0) 

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  )

  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  )

  const handleMouseMove = event => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth) 
  }

  

  return (
    <div className="flex flex-row items-center justify-center gap-5 mb-10 w-full mt-10">
      {skills.map((testimonial, idx) => (
        <div
          className="-mr-4  relative group"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10
                  }
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap"
                }}
                className="absolute -top-16  translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
                
              </motion.div>
            )}
          </AnimatePresence>
          <Image
  onMouseMove={handleMouseMove}
  height={100}
  width={100}
  src={testimonial.image}
  alt={testimonial.name}
  className="object-contain !m-0 !p-2 object-center rounded-full h-20 w-20 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
/>
        </div>
      ))}
    </div>
  )
}

export default Skills