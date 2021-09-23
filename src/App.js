import React from 'react';
import Cardlist from './Cardlist';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () => {
    return (
        <div className="tc">
         <Navbar/> 
         <div className="f3 lh-copy"><h1><u>Featured Projects</u></h1></div>  
        <Cardlist/>
        <div className="f3 lh-copy"><h1><u>Upcoming Projects</u></h1></div> 
        <Cardlist/> 
        <Footer/>
        </div>
    );
}
export default App;