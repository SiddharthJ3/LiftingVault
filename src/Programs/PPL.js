import React from "react";
import "./styles.css"
import NavBar from "../Components/NavBar";
import { Fade } from "react-reveal";

function PPL() {
    return (
        <>
            <NavBar />
            <section className="display">
                <div className="program1">
                    <Fade right>
                        <h1 className="program--header"><u>Push Pull Legs</u></h1>
                    </Fade>
                </div>

                <div className="program2">
                    <Fade right>
                        <p>PPL (Push, Pull, Legs) split is a popular workout routine that involves dividing your training into three main categories: push exercises, pull exercises, and leg exercises. The push workout focuses on exercises that involve pushing movements, such as chest presses and shoulder presses. The pull workout focuses on exercises that involve pulling movements, such as pull-ups and rows. The leg workout focuses on exercises that target the lower body, such as squats and deadlifts.</p>
                        <br />
                        <p>This type of workout split is popular because it allows for balanced training of all major muscle groups while also providing adequate rest and recovery time for each muscle group. It is also a flexible routine that can be adjusted to suit individual goals and fitness levels.</p>
                        <br />
                        <p>Push Workout: The push workout focuses on exercises that involve pushing movements, such as bench press, overhead press, push-ups, and triceps dips. These exercises primarily target the chest, shoulders, and triceps.</p>
                        <br />
                        <p>Pull Workout: The pull workout focuses on exercises that involve pulling movements, such as pull-ups, rows, curls, and chin-ups. These exercises primarily target the back, biceps, and rear shoulders.</p>
                        <br />
                        <p>Leg Workout: The leg workout focuses on exercises that target the lower body, such as squats, deadlifts, lunges, and leg curls. These exercises primarily target the glutes, hamstrings, quads, and calves.</p>
                        <br />
                    </Fade>
                </div>

                <Fade right>
                    
                <div className="tablesPPL">
                    <div>
                        <table class="tg">
                            <thead>
                                <tr>
                                    <th class="tg-0pky">Exercise</th>
                                    <th class="tg-0pky">Sets</th>
                                    <th class="tg-0pky">RPE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="tg-0pky">Incline Bench Press</td>
                                    <td class="tg-0pky">x4</td>
                                    <td class="tg-0pky">8-9</td>
                                </tr>
                                <tr>
                                    <td class="tg-0pky">Seated Cable Press</td>
                                    <td class="tg-0pky">x3</td>
                                    <td class="tg-0pky">6-7</td>
                                </tr>
                                <tr>
                                    <td class="tg-0pky">Peck-Deck Fly</td>
                                    <td class="tg-0pky">x4</td>
                                    <td class="tg-0pky">7</td>
                                </tr>
                                <tr>
                                    <td class="tg-0pky">Overhead Dumbbell Press</td>
                                    <td class="tg-0pky">x3</td>
                                    <td class="tg-0pky">8-9</td>
                                </tr>
                                <tr>
                                    <td class="tg-0pky">Side Raises</td>
                                    <td class="tg-0pky">x4</td>
                                    <td class="tg-0pky">7</td>
                                </tr>
                                <tr>
                                    <td class="tg-0pky">SkullCrushers</td>
                                    <td class="tg-0pky">x3</td>
                                    <td class="tg-0pky">7</td>
                                </tr>
                                <tr>
                                    <td class="tg-0lax">Triceps Pushdowns</td>
                                    <td class="tg-0lax">x3</td>
                                    <td class="tg-0lax">6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Exercise</th>
                                    <th>Sets</th>
                                    <th>RPE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Pull Ups </td>
                                    <td>x4</td>
                                    <td>8-9</td>
                                </tr>
                                <tr>
                                    <td>Bent-Over Rows </td>
                                    <td>x4</td>
                                    <td>8-9</td>
                                </tr>
                                <tr>
                                    <td>Latpulldowns </td>
                                    <td>x3</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Single-Arm Rows </td>
                                    <td>x3</td>
                                    <td>8-9</td>
                                </tr>
                                <tr>
                                    <td>Bicep Curls </td>
                                    <td>x4</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Hammer Curls </td>
                                    <td>x3</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Rear Delt Fly</td>
                                    <td>x3</td>
                                    <td>6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Exercise</th>
                                    <th>Sets</th>
                                    <th>RPE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Squats</td>
                                    <td>x4</td>
                                    <td>8-9</td>
                                </tr>
                                <tr>
                                    <td>Leg Press</td>
                                    <td>x4</td>
                                    <td>8-9</td>
                                </tr>
                                <tr>
                                    <td>RDL</td>
                                    <td>x3</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Quad Extensions</td>
                                    <td>x3</td>
                                    <td>8-9</td>
                                </tr>
                                <tr>
                                    <td>Hamstring Curls </td>
                                    <td>x3</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Calve Raises</td>
                                    <td>x3</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Lunges </td>
                                    <td>x3</td>
                                    <td>6</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                </Fade>
            </section>
        </>
    )
}

export default PPL;