import React  from "react";
import './Card.css'

const Card = () => {
        return (
        <div className="bg-lightest-blue dib br3 pa3 ph1 ma3 grow bw2 shadow-5 tc">
        <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/1.png" alt="" height="50px"></img>
        <div className="tl"><h1>Bitcoin</h1></div>
        <div className="tl"><p>Total rise </p></div>
        <div className="gg"><p>$5000</p></div>
        <p className="tc">Min Allocation &emsp;Max Allocation&emsp;&emsp;Access</p>
        <div className="gg"><p>0 TBA POLS</p></div>
        </div>
        );
    }
export default Card;