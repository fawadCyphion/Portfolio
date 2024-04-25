import { HeroParallax } from '@/components/hero'
import Croom from "@/assets/croom.svg";
import CourseHub from "@/assets/coursehub.png";
import SwiftShop from "@/assets/swiftshop.png";
import TaskMate from "@/assets/Taskmate.png";
import PrimeTuition from "@/assets/prime.png";
import SoftLogic from "@/assets/softlogic.png";
import React from 'react'

const HeroView = () => {

  const products = [
    {
      title: "CourseHub",
      link: "#",
      thumbnail: CourseHub.src
    },
    {
      title: "Swiftshop",
      link: "#",
      thumbnail: SwiftShop.src
    },

    {
      title: "Taskmate",
      link: "#",
      thumbnail: TaskMate.src
    },
    {
      title: "Croom",
      link: "#",
      thumbnail: Croom.src
    },
    {
      title: "PrimeTuition",
      link: "#",
      thumbnail: PrimeTuition.src
    },
    {
      title: "SoftLogic",
      link: "#",
      thumbnail: SoftLogic.src
    }

  ];
  return (
    <HeroParallax products={products} />
  )
}

export default HeroView