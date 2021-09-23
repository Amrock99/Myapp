import React, { Component } from "react";
import './Navbar.css'

class Navbar extends Component{
    render(){
        return (
            <header class="sans-serif">
            <div class="cover bg-left bg-center-l">
              <div class="bg-black-80 pb5 pb6-m pb7-l">
                <nav class="dt w-100 mw8 center"> 
                  <div class="dtc w2 v-mid pa3">
                    <a href="/" class="dib w2 h2 pa1 ba b--white-90 grow-large border-box">
                      <svg class="link white-90 hover-white" data-icon="" viewBox="0 0 32 32" ><path d="M16 0 C6 0 2 4 2 14 L2 22 L6 24 L6 30 L26 30 L26 24 L30 22 L30 14 C30 4 26 0 16 0 M9 12 A4.5 4.5 0 0 1 9 21 A4.5 4.5 0 0 1 9 12 M23 12 A4.5 4.5 0 0 1 23 21 A4.5 4.5 0 0 1 23 12"></path></svg>
                    </a>
                  </div>
                    <a class=" tl f6 fw4 hover-white no-underline white-70 dn dib-ns pv5 ph1" href="/" >APSICO</a>
                 <div class="dtc v-mid tr pa3">
                    <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Smart Stake</a> 
                    <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Raffle</a> 
                    <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Farm</a> 
                    <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Pool</a> 
                    <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Featured Projects</a> 
                    <a class="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" href="/" >Milestones</a> 
                    <a class="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" href="/" >Links and Contacts</a>  
                    <a class="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba" href="/" >Sign Up</a> 
                  </div>
                </nav> 
                <div class="tc-l mt4 mt5-m mt6-l ph3">
                  <h1 class="f2 f1-l fw2 white-90 mb0 lh-title f-headline measure">Decentralized,Community-backed IDO Platform for Binance Smart Chain (BSC) Projects</h1>
                  <h2 class="fw1 f3 white-80 mt3 mb4 ">A Bright, Unique, and Engaging IDO platform to empower the most innovative crypto projects by leveraging the power of community</h2>
                  <a class="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Go to App</a>
                  <span class="dib v-mid ph3 white-70 mb3"></span>
                <a class="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="/">Subscribe to upcomming polls</a>
                </div>
              </div>
            </div> 
          </header>

        );
    }
}
export default Navbar;
