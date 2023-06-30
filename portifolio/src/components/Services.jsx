import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs'

import { motion } from 'framer-motion'

import { fadeIn } from '../variants';

const services = [
  {
    name: 'UI/UX Design',
    description: 'aliquam? Illo omnis, voluptates dicta dolorem eius quam eveniet totam cum dolorum mollitia. Expedita beatae commodi doloremque laboriosam incidunt amet!',
    link: 'learn more'
  },
  {
    name: 'Desenvolvedor',
    description: 'aliquam? Illo omnis, voluptates dicta dolorem eius quam eveniet totam cum dolorum mollitia. Expedita beatae commodi doloremque laboriosam incidunt amet!',
    link: 'learn more'
  }
]

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row '>

          <motion.div
            variants={fadeIn('rigth', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
            <h2 className='h2 text-accent mb-6'>what i do</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              i'm a Freelance front-end developer with over 2 years of experience.
            </h3>
            <button className='btn btn-sm'>see my Work</button>
          </motion.div>

          <motion.div
            variants={fadeIn('left', .5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'>
            {/* services list */}
            <div >
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                    </div>

                    <div className='flex flex-col flex-1 items-end'>
                      <a href="#" className='btn w-9 h-9 mb-[43px] flex items-center justify-center'>
                        <BsArrowUpRight />
                      </a>

                      <a className='text-gradient text-sm' href="#">
                        {link}
                      </a>

                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default Services;
