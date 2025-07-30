/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ieee } from "../assets";
import { SectionWrapper } from "../hoc";
import { research } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ResearchCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link1,
  source_code_link2,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl lg:w-[560px] w-full'
      >
        <div className='relative w-full h-[250px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link1, "_blank")}
              className='black-gradient w-20 h-10 p-2 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={ieee}
                alt='source'
                className='w-full h-full object-contain'
              />
            </div>
             <div
              onClick={() => window.open(source_code_link2, "_blank")}
              className='ml-auto black-gradient w-30 h-10 p-2 rounded-full flex justify-center items-center cursor-pointer text-sm'
            >
              Research Award
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <>
     
     <motion.div variants={textVariant()} className="mt-20">
        <h2 className={`${styles.sectionHeadText}`}>Research.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {research.map((research, index) => (
          <ResearchCard key={`research-${index}`} index={index} {...research} />
        ))}
      </div>

    </>
  );
};

export default SectionWrapper(Works, "");
