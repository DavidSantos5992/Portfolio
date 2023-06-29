import React from 'react';
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5
  });

  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center  lg:gap-20 lg:gap-y-0 h-screen' >

          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='bg-about bg-contain bg-no-repeat w-[640px] h-[640px] mix-blend-lighten bg-top'>

          </motion.div>

          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{ once: false, amount: 0.3 }}
          className='flex-1'>

            <h2 className='h2 text-axccent'>about.me</h2>
            <h3 className='h3 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h3>
            <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sunt, nisi perspiciatis rerum quaerat dolor? Tenetur deserunt tempore illum quam debitis minima delectus! Facere tempora numquam id, officia voluptate accusantium!</p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

              <div>
                <div>
                  <div className='text-[40px font-primary text-gradient mb-2'>

                    {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                    k+
                  </div>
                  <div className='font-primary text-sm tracking-[2px'>
                    Projectos <br />
                    Comppletos
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className='text-[40px font-primary text-gradient mb-2'>

                    {inView ? <CountUp start={0} end={13} duration={3} /> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px'>
                    years of <br />
                    experience
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className='text-[40px font-primary text-gradient mb-2'>

                    {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                    k+

                  </div>
                  <div className='font-primary text-sm tracking-[2px'>
                    Clientes  <br />
                    satisfeitos
                  </div>
                </div>
              </div>



            </div>

            <div className='flex gap-8 items-center'>
              <button className='btn btn-lg'>Fale comigo</button>
              <a href="#" className='text-gradient btn-link'>
                Meu Portifolio
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default About;
