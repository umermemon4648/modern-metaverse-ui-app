import React from 'react'
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../src/segments'

const page = () => {
  return (

    // <Head>
    //     <title>Create Next App</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    <>

    <Hero/>
    <About/>
    <Explore/>
    <GetStarted/>
    <WhatsNew/>
    <World/>
    <Insights/>
    <Feedback/>


      {/* <p>Hello Dear</p>
      <p className='text-red-700' >Hello! Fellow Developer</p> */}
    
    
    
    </>
  )
}

export default page
