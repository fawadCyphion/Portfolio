import { FloatingNav } from "@/components/nav"
import ContactForm from "@/views/contactForm"
import HeroView from "@/views/hero.view"
import { ProjectView } from "@/views/project.view"
import SkillView from "@/views/skill.view"

const index = () => {


  return (
  <>
    <FloatingNav/>
    <HeroView/>
    <SkillView/>
    <ProjectView/>
    <ContactForm/>
  </>
    
  )
}

export default index