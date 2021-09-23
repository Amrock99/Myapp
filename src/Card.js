import React  from "react";
import './Card.css'

const Card = () => {
        return (
        <div className="bg-lightest-blue dib br3 pa3 ph1 ma3 grow bw2 shadow-5 tc">
        <div><a class="op tr f10 no-underline br-pill ph3 pv2 mb2 dib white bg-moon-gray " href="#0">Button Text</a></div>
        <div className="tl"><h2>Ethermon</h2></div>
        <br></br>
        <div className="tl"><p>Total rise </p></div>
        <div className="gg"><p>$5000</p></div>
        <p className="tc">Min Allocation &emsp;Max Allocation&emsp;&emsp;Access</p>
        <div className="gg"><p>0 TBA POLS</p></div>
        </div>
        );
    }
export default Card;
