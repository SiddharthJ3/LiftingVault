import React from "react";
import "./styles.css"
import NavBar from "../Components/NavBar";
import { Fade } from "react-reveal";

function Fourday() {
    return (
        <>
            <NavBar />
            <section className="display">
                <div className="program1">
                    <Fade right>
                        <h1 className="program--header"><u>4 Day Split</u></h1>
                    </Fade>
                </div>

                <div className="program2">
                    <Fade right>
                        <p>A 4-day workout split is a popular training routine that involves working out 4 days a week, with each day dedicated to a specific muscle group or fitness goal.</p>
                        <br />
                        <p>Here is an example of a 4-day workout split:</p>
                        <br />
                        <h3>Day 1: Chest and Triceps</h3>
                        <ul>
                            <li>Bench Press</li>
                            <li>Incline Dumbbell Press</li>
                            <li>Cable Flyes</li>
                            <li>Skull Crushers</li>
                            <li>Tricep Pushdowns </li>
                        </ul>
                        <br />
                        <h3>Day 2: Back and Biceps</h3>
                        <ul>
                            <li>Deadlifts</li>
                            <li>Pull-Ups</li>
                            <li>Barbell Rows</li>
                            <li>Hammer Curls </li>
                            <li>Preacher Curls</li>
                        </ul>
                        <br />
                        <h3>Day 3 : Cardio And Mobility Day</h3>
                        <br />
                        <h3>Day 4: Legs</h3>
                        <ul>
                            <li>Squats</li>
                            <li>Leg Press</li>
                            <li>RDL</li>
                            <li>Hamstring Curls</li>
                            <li>Calf Raises</li>
                        </ul>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default Fourday;