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

            <h2 className='h2 leading-tight text-accent'>my latest
              work
            </h2>
            <p className='max-w-sm'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aspernatur, quisquam numquam iste tenetur dicta ipsam, nulla atque placeat debitis, non a natus vitae nisi maxime expedita consequuntur qui! Tempora!</p>
            <button className='btn btn-sm '> view all</button></div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute  transition-all duration-300'></div>
            <div></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500'
              src={img1}
            />
            {/* pppp */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 '>
              <span className='text-gradient'>ui/ux design</span>
            </div>
            {/* title */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 '>
              <span className='text-3xl text-white'>project title</span>
            </div>
          </div>
        </div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.5}}
          className='flex-1 flex flex-col gap-y-10'>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute  transition-all duration-300'></div>
            <div></div>
            <img className='group-hover:scale-125 transition-all duration-500'
              src={img2}
            />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 '>
              <span className='text-gradient'>ui/ux design</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 '>
              <span className='text-3xl text-white'>project title</span>
            </div>
          </div>
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute  transition-all duration-300'></div>
            <div></div>
            <img className='group-hover:scale-125 transition-all duration-500'
              src={img3}
            />
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 '>
              <span className='text-gradient'>ui/ux design</span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 '>
              <span className='text-3xl text-white'>project title</span>
            </div>
          </div>

        </motion.div>
      </motion.div>
    </div>
  </section>;
};

export default Work;
