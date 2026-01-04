


import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h3 className="mb-8 text-center">Get in  touch</h3>
        <form
         action=""
         className='flex flex-col gap-5 w-full'
         >

            <input type="text" className='input' placeholder='Full Name' />
            <input type="text" className='input' placeholder='Email Address' />
            <input type="text" className='input' placeholder='Phone Number' />
            <textarea className='textarea mb-6' placeholder='Your Message' />

            <button type='submit' className='btn self-start '>
                Send Message 
            </button>

        </form>
    </div>
  )
}

export default ContactForm