import react from "react"
import './landingpage.css'
import BgVideo from '../media/landingpage.mp4'
import { NavLink } from "react-router-dom"
import PreLoader from "./PreLoader"

const Landingpage = () => {
    return (
        <>
        <PreLoader />
        <div className="landingpage">
            <video id="video" src={BgVideo} autoPlay muted loop class="video-bg" />
            <div className="bg-overlay"></div>
            
            <div className="title-content">
                <div className="title">
                    <div>Explore</div>
                    <div>Our</div>
                    <div>Programs</div>
                </div> 
                <div className="btn">
                    <NavLink style={{textDecoration: 'none', color: 'white'}} to="/Vault"><p>The Vault</p></NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landingpage;

// {/* <div className="content">
//                 <span className="stroke-text">Explore</span>
//                 <span className="stroke-text">Our</span>
//                 <span className="stroke-text">Programs</span>
//             </div>
//             <div className="home-btn">Into The Vault</div>
//         </div>
//     ) */}


// content {
//     width: 65%;
//     height: 10px;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: space-evenly;
//     z-index: 2;
//     font-size: 6em;
//     bottom: 0;
// }


// .stroke-text {
//     font-family: 'Teko', sans-serif;
//     font-family: 'Tourney', cursive;
// }

// .home-btn {
//     width: 8em;
//     height: 2em;
//     font-size: 20px;
//     border: 2px solid white;
//     border-radius: 0.25em;
//     background-color: black;
//     z-index: 1;    
//     display: flex;
//     justify-content:baseline;
//     align-items: center;
//     cursor: pointer;
//     top: 0;
//     padding: 1px;
//     font-family: 'Teko', sans-serif;
//     font-family: 'Tourney', cursive;
// }

// .

