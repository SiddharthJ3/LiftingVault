import React from 'react'
import NavBar from './NavBar'
import Particle from './Particles'
import Baki from "../media/BakiHanma.jpeg"
import "./about.css"

function About() {
    return (
        <>
            <NavBar />
            <Particle />
            <div className='about-card'>
                <div>
                    <img src={Baki} alt="" className='about--img'/>
                </div>

                <div>
                    <h1 className='about--h1'>Siddharth Juyal</h1>
                </div>

                <div>
                    <p className='about--p'>
                    Welcome to Lifting Vault, your go-to source for choosing workout splits. This site is dedicated to helping you achieve your ideal strength and physique.
                    All of the program mentioned here are created by top-level atheletes and coaches. Each and every program is tried and tested and are made with experience and science. 
                    </p>
                    <p>
                        
                    </p>
                </div>
            </div>
        </>
        
    )
}

export default About;
