import React from 'react';

import Image from '../assets/avatar2.png'
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-[78vh] flex items-center ' id='home' >

      <div className='container mx-auto'>

        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>

          <div className='flex-1 text-center font-secondary lg:text-left'>

            <motion.h1
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              David <span>Santos: </span>
            </motion.h1>

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 text-[36px] lg:Text-[60px] font-secondary font-semibold uppercase leading-[1'>
              <span className=' text-white mr-4'>Sou Desenvolvedor Front-end, e trabalho com as seguintes tecnologias: </span>
              <TypeAnimation sequence={['ReactJs', 2000, 'VueJs', 200, 'JavaScript', 200, 'TailWindCSS', 200]}
                speed={50} className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-8 max-w-lg mx-auto lg:mx-0 '
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum praesentium distinctio labore aperiam laborum ullam, quod laboriosam voluptatibus nobis blanditiis molestias rem itaque numquam officiis quidem velit ut fugiat. Libero?
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

              <button className='btn btn-lg'>Fale comigo</button>
              <a href="#" className='text-gradient btn-link'>Meu Portifolio</a>

            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto'>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
            <img src={Image} alt="" />
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default Banner;
