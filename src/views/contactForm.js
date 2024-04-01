import {  Button, ButtonField } from '@/components/button'
import { Input } from '@/components/input'
import { Label } from '@/components/label'
import React from 'react'

const ContactForm = () => {
  return (
    <div className='mt-16 w-full'>
        <h1 className='text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center'>Reach Out to Me</h1>
         <div className='flex flex-col justify-center items-center'>
      
         <div className='w-[30%] my-4'>
         <Label htmlFor="username" className="mb-2 block">
        Name
      </Label>
        <Input placeholder={"Name"}/>
        </div>
      
         <div className='w-[30%] my-4'>
         <Label htmlFor="email" className="mb-2 block">
        Email
      </Label>
        <Input type={"Email"} placeholder={"Email"}/>
        </div>
      
         <div className='w-[30%] my-4'>
         <Label htmlFor="username" className="mb-2 block">
         Message
      </Label>
        <Input type={"textarea"} placeholder={"Message"}/>
        </div>

         <div className='w-[30%] my-4 text-center'>
            <Button>Submit</Button>
        </div>
        </div>
    </div>
  )
}

export default ContactForm