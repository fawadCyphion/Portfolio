import { HeroParallax } from '@/components/hero'
import Croom from "@/assets/croom.svg";
import CourseHub from "@/assets/coursehub.png";
import SwiftShop from "@/assets/swiftshop.png";
import TaskMate from "@/assets/Taskmate.png";
import React from 'react'

const HeroView = () => {

    const products = [
        {
          title: "CourseHub",
          link: "#",
          thumbnail:CourseHub.src
        },
        {
          title: "Swiftshop",
          link: "#",
          thumbnail:SwiftShop.src
        },
       
        {
          title: "Taskmate",
          link: "#",
          thumbnail:TaskMate.src
        },
        {
          title: "Croom",
          link: "#",
          thumbnail:Croom.src
        }
     
      ];
  return (
    <HeroParallax products={products}/>
  )
}

export default HeroView