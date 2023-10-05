import React from 'react';
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import img1 from '../assets/portfolio-img1.png'
import img2 from '../assets/portfolio-img2.png'
import img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return <section className='section' id='work'>
    <div className="container mx-auto">
      <motion.div
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.3 }}
        className='flex flex-col lg:flex-row gap-x-10 '>
        <div className='flex-1 flex flex-col mb-10 lg:mb-0 '>

          <div className='flex-1 flex flex-col  '>

            <h2 className='h2 leading-tight text-accent'>ÚLTIMOS TRABALHOs:</h2>
            <p className='max-w-sm mb-8'>Aqui estão meus projetos pessoais mais desafiadores como desenvolvedor frontend. Eles são especiais para mim, não apenas por serem desafios superados, mas também por serem verdadeiras obras de arte.</p>

          </div>

          <a href="https://www.youtube.com/watch?v=WAVdn4VXbPQ&t=0s" target="_blank">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>

              <div className='group-hover:bg-black/70 w-full h-full absolute  transition-all duration-300'></div>

              <img className='group-hover:scale-125 transition-all duration-500'
                src={img1}
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 '>
                <span className='text-gradient'>FRONT-END</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 '>
                <span className='text-3xl text-white'>Auto escola</span>
              </div>
            </div>
          </a>

        </div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5 }}
          className='flex-1 flex flex-col gap-y-10'>


          <a href="https://www.youtube.com/watch?v=asBw3nQ1XOg"
            target="_blank">

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute  transition-all duration-300'></div>
              <div></div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={img2}
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 '>
                <span className='text-gradient'>FRONT-END</span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 '>
                <span className='text-3xl text-white'>Mercado</span>
              </div>

            </div>

          </a>


          <a href="https://www.youtube.com/watch?v=pQSs87NUCtA" target="_blank">

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute  transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500'
                src={img3}
              />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 '>
                <span className='text-gradient'>FRONT-END</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 '>
                <span className='text-3xl text-white'>Boxe</span>
              </div>
            </div>

          </a>


        </motion.div>
      </motion.div>
    </div>
  </section>;
};

export default Work;
