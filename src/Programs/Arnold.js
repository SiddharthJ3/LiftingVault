import React from "react";
import "./styles.css"
import NavBar from "../Components/NavBar";
import { Fade } from "react-reveal";

function Arnold() {
    return (
        <>
            <NavBar />
            <section className="display">
                <div className="program1">
                    <Fade right>
                        <h1 className="program--header"><u>Arnold Split</u></h1>
                    </Fade>
                </div>

                <div className="program2">
                    <Fade right>
                        <p>The Arnold split is a bodybuilding workout routine created and popularized by Arnold Schwarzenegger, a former professional bodybuilder and actor. The Arnold split is typically a 6-day workout split that focuses on working each muscle group twice per week.</p>
                        <br />
                        <p>The Arnold split is designed to maximize muscle growth and strength by using a combination of heavy compound lifts and isolation exercises. The routine typically consists of 3 days of upper body training and 3 days of lower body training.</p>
                        <br />
                        <p>The upper body days focus on chest and back, shoulders and arms, and back and arms, while the lower body days target legs and abs. Each workout typically includes 6-8 exercises and 3-4 sets per exercise.</p>
                        <br />
                        <h3>Day 1: Chest & Back</h3>
                        <ul>
                            <li>Bench Press</li>
                            <li>Incline Dumbbell Press</li>
                            <li>Bent-Over Rows</li>
                            <li>Weighted Pull Ups</li>
                            <li>DB Fly</li>
                            <li>Pullovers</li>
                        </ul>
                        <br />
                        <h3>Day 2: Legs</h3>
                        <ul>
                            <li>Deadlifts</li>
                            <li>Leg Press</li>
                            <li>RDL</li>
                            <li>Quad Extensions</li>
                            <li>Ham Curls</li>
                        </ul>
                        <br />
                        <h3>Day 3 : Shoulder & Arms</h3>
                        <ul>
                            <li>Tricep Pushdowns</li>
                            <li>Overhead Extensions</li>
                            <li>Bicep Curls</li>
                            <li>Hammer Curls</li>
                            <li>Overhead Press</li>
                            <li>Side Raises</li>
                            <li>Rear Delt Fly</li>
                        </ul>
                        <br />
                        <h3>Day 4: Chest & Back</h3>
                        <ul>
                            <li>Incline Bench Press</li>
                            <li>Seated Cable Press</li>
                            <li>Peck Deck Fly</li>
                            <li>T-Bar Rows</li>
                            <li>Latpulldowns</li>
                            <li>Cable Rows</li>
                            <li>Pullovers</li>
                        </ul>
                        <br />
                        <h3>Day 5: Legs</h3>
                        <ul>
                            <li>Squats</li>
                            <li>Leg Press</li>
                            <li>RDL</li>
                            <li>Hamstring Curls</li>
                            <li>Calf Raises</li>
                        </ul>
                        <br />
                        <h3>Day 6: Shoulder & Arms</h3>
                        <ul>
                            <li>Overhead Press</li>
                            <li>Side Raises</li>
                            <li>Rear Delt Fly</li>
                            <li>Cable Curls</li>
                            <li>Hammer Curls</li>
                            <li>Skullcrushers</li>
                            <li>Close Grip Bench Press</li>
                        </ul>
                    </Fade>
                </div>
            </section>
        </>
    )
}

export default Arnold;