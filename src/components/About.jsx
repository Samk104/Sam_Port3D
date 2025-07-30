/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import React from 'react'
import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn , textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard =({index,title,icon}) => {
  return(
   <Tilt className='xs:w-[250px] w-full'>
    <motion.div
    variants={fadeIn("right","spring",0.5*index, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>

    </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("","",0.1,1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
   I’m an innovative computer science graduate with a strong academic foundation and over two years of hands-on software development experience. My journey cuts across industry and academia - from building web and mobile apps that power real-world products to publishing award-winning research in machine learning.<br /> <br />
   But before all that, I was the kid who opened up calculators just to see what made them tick. If it moved, clicked, or lit up, I probably took it apart. That same instinct still drives me to explore how things work and make them work better.<br/> <br/>
   I’m drawn to complex problems, the kind that demand rapid learning, creative thinking, and flexibility across domains. Whether I’m building applications, experimenting with AI, or collaborating with a team, I bring curiosity, adaptability, and a builder’s mindset. With experience across languages, frameworks, and cloud platforms, I’m always ready to jump in, learn fast, and build something meaningful.


    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) =>
        <ServiceCard key={service.title} index= {index} {...service}/>
      )}

    </div>
    </>
  )
}

export default SectionWrapper(About, "about")