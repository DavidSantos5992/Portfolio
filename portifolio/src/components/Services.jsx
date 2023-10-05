import React from 'react';

import { motion } from 'framer-motion'

import { fadeIn } from '../variants';

const services = [

  {
    name: 'Trigueiro Network',
    description: 'front-end especializado em interfaces de GTA RP, sou responsável por criar uma experiência visual incrível para os jogadores. Usando tecnologias como Vue.js, HTML5 e CSS3, crio interfaces dinâmicas e intuitivas que permitem aos jogadores desfrutar plenamente do jogo.',
    link: 'https://trigueirotech.com.br/'
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

            <h2 className='h2 text-accent mb-6'>experiência</h2>
            <h3 className='h3 max-w-[455px] mb-16'>
              sou um desenvolvedor front-end freelancer com mais de 1 ano de experiência
            </h3>
            <a href="https://github.com/DavidSantos5992" target="_blank">
              <button className='btn btn-sm'>

                meu trabalho
              </button>
            </a>
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
                  <div className='border-b border-white/20  mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                      <p className='font-secondary leading-tight'>{description}</p>
                      <a
                        className='text-gradient text-sm'
                        target='_blank'
                        href={link}>Empresa
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
