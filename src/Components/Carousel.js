import React from "react";
import NavBar from "./NavBar";
import './carousel.css'
import { Fade } from "react-reveal";
import { Roll } from "react-reveal"
import { NavLink } from "react-router-dom";

function Carousel() {
    return (
        <>
            <NavBar />
            
            <header className="header">
            <Fade right>
                <h1>Strength.</h1>
            </Fade>
            <Fade right>
                <h1>Endurance.</h1>
            </Fade>
            <Fade right>
                <h1>Hypertrophy.</h1>
            </Fade>
            </header>

            <section className="section">
            <div className="list">
            <Roll right>
            <NavLink to="/PPL">
            <div className="list--div">
                     <h1 className="list--item">Push Pull Legs</h1>
                 </div>
            </NavLink>
            </Roll>
            <NavLink to="/PHAT">
            <Roll right>
            <div className="list--div">
                     <h1 className="list--item">Power/Hypertrophy Adaptive Training</h1>
                 </div>
            </Roll>
            </NavLink>
            <NavLink to="/Arnold">
            <Roll right>
            <div className="list--div">
                     <h1 className="list--item">Arnold Split</h1>
                 </div>
            </Roll>
            </NavLink>
            <NavLink to="/4day">
            <Roll right>
            <div className="list--div">
                     <h1 className="list--item">4-Day Split</h1>
                 </div>
            </Roll>
            </NavLink>
            
             </div>
            </section>
        </>
    )
}

export default Carousel;


// function Carousel() {

//     return (
//         <>
//         <NavBar />
//         <Particle />
//         <main>
//             <div className="list">
//                 <div className="list--div">
//                     <h1 className="list--item">Push Pull Legs</h1>
//                 </div>

//                 <div className="list--div">
//                     <h1 className="list--item">Power/Hypertrophy Adaptive Training</h1>
//                 </div>

//                 <div className="list--div">
//                     <h1 className="list--item">Arnold Split</h1>
//                 </div>

//                 <div className="list--div">
//                     <h1 className="list--item">4-Day Split</h1>
//                 </div>
//             </div>
//         </main>
//         </>
//     )
// }
