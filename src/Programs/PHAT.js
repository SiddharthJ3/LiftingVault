import React from "react";
import "./styles.css"
import NavBar from "../Components/NavBar";
import { Fade } from "react-reveal";

function PHAT() {
    return (
        <>
            <NavBar />
            <section className="display">
                <div className="program1">
                    <Fade right>
                        <h1 className="program--header"><u>PHAT</u></h1>
                    </Fade>
                </div>

                <div className="program2">
                    <Fade right>
                        <p>The PHAT (Power Hypertrophy Adaptive Training) workout split is a popular training program that combines powerlifting and bodybuilding techniques in order to develop strength and muscle mass. It typically involves a combination of heavy, low-rep exercises and lighter, higher-rep exercises.</p>
                        <br />
                        <p>The PHAT program is usually split into two different workout days: power days and hypertrophy days. Power days focus on heavy compound exercises like squats, deadlifts, and bench presses, while hypertrophy days emphasize higher-volume, isolation exercises like bicep curls, leg extensions, and lateral raises.</p>
                        <br />
                        <p>The PHAT workout split is designed to provide a well-rounded approach to strength and muscle development by incorporating both heavy lifting and targeted muscle-building exercises. It can be a challenging program, but it's a great choice for intermediate to advanced lifters who are looking to take their training to the next level.</p>
                        <br />
                        <h3>Day 1: Upper Body Power</h3>
                        <ul>
                            <li>Bench Press</li>
                            <li>Incline Dumbbell Press</li>
                            <li>Bent-Over Rows</li>
                            <li>Weighted Pull Ups</li>
                            <li>Barbell Curls</li>
                            <li>Tricep Pushdowns</li>
                        </ul>
                        <br />
                        <h3>Day 2: Lower Body Power</h3>
                        <ul>
                            <li>Deadlifts</li>
                            <li>Leg Press</li>
                            <li>RDL</li>
                            <li>Quad Extensions</li>
                            <li>Ham Curls</li>
                        </ul>
                        <br />
                        <h3>Day 3 : Back And Shoulders</h3>
                        <ul>
                            <li>Latpulldowns</li>
                            <li>Cable Rows</li>
                            <li>DB Rows</li>
                            <li>Pullovers</li>
                            <li>Overhead Press</li>
                            <li>Side Raises</li>
                            <li>Rear Delt Fly</li>
                        </ul>
                        <br />
                        <h3>Day 4: Legs</h3>
                        <ul>
                            <li>Squats</li>
                            <li>Leg Press</li>
                            <li>RDL</li>
                            <li>Hamstring Curls</li>
                            <li>Calf Raises</li>
                        </ul>
                        <br />
                        <h3>Day 5: Chest And Arms</h3>
                        <ul>
                            <li>Incline Bench Press</li>
                            <li>Seated Cable Press</li>
                            <li>Peck Deck Fly</li>
                            <li>Tricep Pushdowns</li>
                            <li>Skullcrushers</li>
                            <li>Cable Curls</li>
                            <li>Hammer Curls</li>
                        </ul>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default PHAT;