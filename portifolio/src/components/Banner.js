import React from 'react';

import Image from '../assets/avatar2.png'
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
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
              <span className=' text-white mr-4'>Sou Desenvolvedor Front-end, e trabalho com as seguintes tecnologias: <br /> </span>
              <TypeAnimation sequence={['React.Js', 2000, 'Next.Js', 1500, 'Vue.Js', 1500, 'JavaScript', 1500, 'TailWindCSS', 1500,]}
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
              Graduando em Ciência da Computação apaixonado por tecnologia, com 2 anos de experiência em front-end. Autodidata e ávido por aprender novas tecnologias.            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

              <a target='_blank'
                href='https://api.whatsapp.com/send?phone=5511998252377&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
                className='btn btn-sm flex items-center justify-center'
              >
                Fale comigo
              </a>

            </motion.div>

            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto'>

              <a target='_blank' href="https://github.com/DavidSantos5992">
                <FaGithub />
              </a>

              <a target='_blank' href="https://www.linkedin.com/in/david-henrique-b5704526b/">
                <FaLinkedin />
              </a>

            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] '>
            <img src={Image} alt="Perfiil David Santos" />
          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default Banner;
