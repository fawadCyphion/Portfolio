import Skills from '@/components/skills'
import React from 'react'
import { TypeSkills } from './typeSkills'

const SkillView = () => {
    const frontendSkills = [
        {
          id: 1,
          name: "HTML",
          image:
            "https://cdn.worldvectorlogo.com/logos/html-1.svg"
        },
        {
          id: 2,
          name: "CSS",
          image:
            "https://cdn.worldvectorlogo.com/logos/css-3.svg"
        },
        {
          id: 3,
          name: "JavaScript",
          image:
            "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
        },
        {
          id: 4,
          name: "TypeScript",
          image:
            "https://cdn.worldvectorlogo.com/logos/typescript.svg"
        },
        {
          id: 5,
          name: "React.js",
          image:
            "https://cdn.worldvectorlogo.com/logos/react-2.svg"
        },
        {
          id: 6,
          name: "Redux",
          image:
            "https://cdn.worldvectorlogo.com/logos/redux.svg"
        },
        {
          id: 7,
          name: "Next.js",
          image:
            "https://cdn.worldvectorlogo.com/logos/next-js.svg"
        }
      ]
    const backendSkills = [
        {
          id: 1,
          name: "Node.js",
          image:
            "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
        },
        {
          id: 2,
          name: "Express.js",
          image:
            "https://cdn.worldvectorlogo.com/logos/express-109.svg"
        },
        {
          id: 3,
          name: "JavaScript",
          image:
          "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
        },
        {
          id: 4,
          name: "Python",
          image:
            "https://cdn.worldvectorlogo.com/logos/python-5.svg"
        },
        {
          id: 5,
          name: "MongoDB",
          image:
            "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
        },
        {
          id: 6,
          name: "SQL",
          image:
            "https://cdn.worldvectorlogo.com/logos/amazon-database.svg"
        }
      ]
    
  return (
    <>
    <TypeSkills/>
    <div className='flex justify-around'>
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <h1 className='text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center'>Frontend</h1>
    <Skills skills={frontendSkills}/>
    </div>
    <div className="flex flex-col items-center justify-center h-[15rem]  ">
      <h1 className='text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center'>Backend</h1>
    <Skills skills={backendSkills}/>
    </div>

    </div>

    </>
  )
}

export default SkillView