"use client"
import React from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/index'
import {navVariants} from '../utils/motion'



const Navbar = () => {
  return (
    <motion.nav
    variants={navVariants}
    initial = {"hidden"}
    whileInView={"show"}
    className= {`${styles.xPaddings} py-8 relative`}

    >
      <p className='text-blue-800'>Navbar</p>
      
    </motion.nav>
  )
}

export default Navbar
