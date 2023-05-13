"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../styles/index';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TypingTest } from '@/components';
import arrowDownSVG from '../../public/arrow-down.svg';

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className={`gradient-02 z-0`} />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
      >
        <TypingTest title="| About Metaversus" textStyles={'text-center'} />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white`}
        >
          <span className="font-extrabold text-white">Metaverse</span> is a new thing in the future, where you can enjoy
          the virtual world by feeling like it's really real, you can feel what you feel in this metaverse world, because
          this is really <span className="font-extrabold text-white">the madness of the metaverse</span> of today, using
          only <span className="font-extrabold text-white">VR</span> devices you can easily explore the metaverse world
          you want, turn your dreams into reality. Let's{' '}
          <span className="font-extrabold text-white">the madness of the explore</span> the madness of the metaverse by
          scrolling down
        </motion.p>

        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)}>
          <Image src={arrowDownSVG} alt="arrowDownSVG" className="w-[18px] h-[28px] object-contain mt-[28px]" />
        </motion.div>
      </motion.div>
      jkjsaskjffsafsa
    </section>
  );
};

export default About;
