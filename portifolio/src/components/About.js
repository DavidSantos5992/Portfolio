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
            className='bg-about bg-contain bg-no-repeat w-[640px] h-[640px] bg-top'
          >

          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >

            <h2 className='h2 text-axccent'>Perfil Pessoal :</h2>
            <h3 className='h3 mb-4'>Amo tecnologia desde a infância, mergulhei nela aos 12 anos.</h3>
            <p className='mb-6'>Fiz meu primeiro curso profissionalizante em um centro de ensino especializado, e agora, após um período de dois anos, estou empregado como desenvolvedor. Além disso, estou nos estágios finais do curso de Ciência da Computação.</p>

            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>

              <div>
                <div>
                  <div className='text-[40px font-primary text-gradient mb-2'>

                    {inView ? <CountUp start={0} end={30} duration={3} /> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px'>
                    Projetos <br />
                    Completos
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className='text-[40px font-primary text-gradient mb-2'>

                    {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                  </div>
                  <div className='font-primary text-sm tracking-[2px'>
                    Anos de <br />
                    experiência
                  </div>
                </div>
              </div>
              <div>
                <div>

                </div>
              </div>



            </div>

            <div className='flex gap-8 items-center'>

              <a
                target='_blank'
                href='https://api.whatsapp.com/send?phone=5511998252377&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
                className='btn btn-sm flex items-center justify-center'>Fale comigo
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
};

export default About;
