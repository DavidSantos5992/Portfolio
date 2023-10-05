import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact = () => {
  return (
    <section className='section py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>

          <motion.div
            variants={fadeIn('left', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>ENTRe EM CONTATO</h4>
              <h2 className='text-[45px] lg:text-[90ox] leading-none mb-12'>vamos <br /> trabalhar  juntos</h2>
            </div>
          </motion.div>

          <motion.form

            variants={fadeIn('right', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='flex-1 items-center justify-center  border rounded-2xl flex flex-col gap-y-6 '>

            {/* <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='your name'
            />

            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              type="text"
              placeholder='your email'
            />

            <textarea placeholder='your message'
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
            ></textarea> */}

            <a
              target='_blank'
              href='https://api.whatsapp.com/send?phone=5511998252377&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
              className='btn btn-sm flex items-center justify-center'>Trabalhe comigo
            </a>
          </motion.form>

        </div>
      </div>
    </section>
  )
};

export default Contact;
