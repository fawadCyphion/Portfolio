"use client"
import { LayoutGrid } from "@/components/projects"
import { TypewriterEffectSmooth } from "@/components/typeWriter"
import Croom from "@/assets/croom.svg";
import PrimeTuition from "@/assets/prime.png";
import SoftLogic from "@/assets/softlogic.png";
import CourseHub from "@/assets/coursehub.png";
import SwiftShop from "@/assets/swiftshop.png";
import TaskMate from "@/assets/Taskmate.png";
import React from "react"

export function ProjectView() {
  return (
    <>
      <div className=" h-auto flex justify-center mt-28">
        <TypewriterEffectSmooth words={[
          {
            text: "Compilation",
            className: "text-blue-500 dark:text-blue-500",
          },
          {
            text: "of",
          },
          {
            text: "My",
          },
          {
            text: "Development",
            className: "text-blue-500 dark:text-blue-500",
          },
          {
            text: "Work",
          }
        ]} />
      </div>
      <div className="h-screen py-20 w-full">
        <LayoutGrid cards={cards} />
      </div>
    </>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Taskmate</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4  text-neutral-200">

        This system is a backend application designed to manage tasks within an organization, built using Express.js, a web application framework for Node.js. It features role-based access control (RBAC), allowing different levels of permissions and functionalities based on the user's role, such as admin, manager, or employee. This architecture ensures that users can perform only the actions that are appropriate to their roles, enhancing the system's security and operational efficiency. The focus on the backend implies it's structured to easily integrate with various frontend technologies, offering flexibility in developing a comprehensive task management solution.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Swiftshop</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4  text-neutral-200">
        SwiftShop is an e-commerce platform built on the MERN stack, comprising MongoDB, Express.js, React, and Node.js, ensuring a robust and scalable foundation. It leverages Redux for state management, providing a predictable state container across the React frontend, which enhances user experience through efficient data flow and UI updates. The platform emphasizes security, incorporating best practices to protect user data and transactions. SwiftShop's architecture aims for efficiency in both development and operation, enabling rapid feature development and a seamless shopping experience.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Coursehub</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4  text-neutral-200">

        This platform is a backend system tailored for managing educational courses, utilizing Express.js for its server-side logic. It implements a role-based access control mechanism to differentiate between users such as students, instructors, and administrators, ensuring that each has access only to the appropriate functionalities. For example, students can enroll in courses, instructors can create and update course content, and administrators can manage user roles and permissions. Built on Node.js, this system promises high performance and scalability, making it suitable for educational institutions of any size. Its role-based structure enhances both security and usability, ensuring a smooth operation of the course management process.
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Croom</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4  text-neutral-200">
        Croom is a real-time chat application developed using the MERN stack, which includes MongoDB, Express.js, React, and Node.js. This technological combination ensures a full-stack JavaScript environment, facilitating smooth development and a seamless user experience. The application supports real-time communication, allowing users to exchange messages instantly thanks to the efficient data flow between the client and server, typically achieved using WebSocket or similar protocols within the MERN architecture. Croom is designed to be scalable and responsive, making it suitable for both personal and professional communication needs, fostering instant connectivity among its users.
      </p>
    </div>
  )
}
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Prime Tuition</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4  text-neutral-200">
        As a MERN stack developer, I spearheaded the development of an easy-to-use admin panel for organizing educational content. To streamline database operations, I integrated Sequelize with Express.js, React.js, and Node.js. My responsibilities included designing efficient database models and optimizing interactions for speed and reliability. Through meticulous work, I ensured the admin panel was user-friendly and dependable, providing educators with practical tools for content management without hassle.
      </p>
    </div>
  )
}
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">SoftLogic</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4  text-neutral-200">
        As a MERN stack developer at SoftLogic, I design and implement user interfaces using React.js, manage server-side logic with Node.js and Express.js, and handle data interactions effectively. I use SCSS for advanced styling and Framer Motion to incorporate engaging animations, enhancing the application’s responsiveness and visual appeal. My responsibilities include coding, debugging, and deploying applications, and collaborating with teams to ensure seamless, scalable user experiences. My role is crucial throughout the development lifecycle, from conception to deployment, optimizing both front and back-end components to deliver efficient, user-centric solutions.
      </p>
    </div>
  )
}

const cards = [
  { id: 1, content: <SkeletonOne />, className: "md:col-span-2", thumbnail: TaskMate },
  { id: 2, content: <SkeletonTwo />, className: "col-span-2", thumbnail: SwiftShop },
  { id: 3, content: <SkeletonThree />, className: "col-span-2", thumbnail: CourseHub },
  { id: 4, content: <SkeletonFour />, className: "md:col-span-6", thumbnail: Croom },
  { id: 5, content: <SkeletonFive />, className: "md:col-span-3", thumbnail: PrimeTuition },
  { id: 6, content: <SkeletonSix />, className: "md:col-span-3", thumbnail: SoftLogic }
];
