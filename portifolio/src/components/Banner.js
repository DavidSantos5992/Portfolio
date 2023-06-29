import React from 'react';

import Image from '../assets/avatar.svg'
import { FaGithub, FaLinkedin, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Banner = () => {
  return (
    <section id='home' className='section'>

      <div className='container mx-auto'>
        <div className=''>
          <div>
            <h1>David <span>Santos: </span>
            </h1>
            <div className='mb-6 text-[36px] lg:Text-[60px] font-secondary font-semibold uppercase leading-[1'>
              <span className=' text-white mr-4'>Sou Desenvolvedor Front-end, e trabalho com as seguintes tecnologias: </span>
              <TypeAnimation sequence={[ 'ReactJs', 2000, 'VueJs', 200,'JavaScript', 200,'TailWindCSS', 200]}
              speed={50} className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </div>
          </div>
          <div>
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Banner;
