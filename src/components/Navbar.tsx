"use client"
import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion'
import styles from '../styles/index'
import {navVariants} from '../utils/motion'
import searchSVG from '../../public/search.svg'
import menuSVG from '../../public/menu.svg'

const Navbar = () => {
  return (
    <motion.nav
    variants={navVariants}
    initial = {"hidden"}
    whileInView={"show"}
    className= {`${styles.xPaddings} py-8 relative`}>
      
      <div className="absolute w-[50%] inset-0 gradient-01"/>
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
          <Image src={searchSVG} alt="search" 
          className='w-[24px] h-[24px] object-contain'
          />
          <h2 className='font-extrabold text-[24px] leading-[30px] text-white' >METAVERSUS</h2>
          <Image src={menuSVG} alt='menuSVG' className='w-[24px] h-[24px] object-contain' />

          
        </div>





      
    </motion.nav>
  )
}

export default Navbar
