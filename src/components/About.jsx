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
     Innovative computer science student with a stellar academic performance, merging advanced technical expertise with substantial 
     research experience and over two years of hands-on software development. From crafting microservices-based apps in the corporate 
     world to pioneering fMRI analysis techniques in academia, I've consistently demonstrated a knack for rapid learning and 
     problem-solving across diverse domains. Recognized globally for tech talent and armed with a comprehensive 
     skill set in programming languages, frameworks, and cloud technologies, I'm eager to bring fresh ideas and efficiency to software 
     engineering roles. My proven track record, adaptability, and drive to create impactful solutions make me a valuable asset to 
     tech teams.
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