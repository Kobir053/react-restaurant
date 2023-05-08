import './App.css';
import Details from './components/Details'
// import Welcome from './components/Welcome';
import './components/about.css';
import { useEffect } from 'react';

import img_1 from './img/img-1.png';
import img_2 from './img/img-2.png';
import img_3 from './img/img-3.png';
import img_4 from './img/img-4.png';
import img_5 from './img/img-5.png';
import img_6 from './img/img-6.png';
import img_7 from './img/img-7.png';
import img_spots from './img/img-spots.png';
import img_latwo from './img/img-latwo.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(()=>{
    AOS.init();
},[])

  return (
    <div className="aboutDiv">
        {/* <Welcome/> 
        <Details/> */}
        <img id='img-latwo' src={img_latwo}/>
            <div id="main-container">
                <div className="container top" >
                    <div id='detail-1' className="our-details-div">
                        <h1>Revolutionize your dining experience with <br/><span><img id='span-latwo' src={img_latwo}/></span>ATWO<span>.</span></h1>
                        <p>LATWO's AI digital waiter and Chatbot recommend the perfect order and handle payment seamlessly.</p>
                    </div>
                    <div id='img-1-div' className="image-div">
                      <img id="img-1" className="img" src={img_1}/>
                    </div>
                </div>

                <div className="container right" >
                    <div id='img-2-div' className="image-div">
                        <img id="img-2" className="img" src={img_2}/>
                    </div>
                    <div id='detail-2' className="our-details-div">
                        <h1>Personalized menu recommendations<span>.</span></h1>
                        <p>LATWO's AI digital waiter provides personalized menu recommendations based on your preferences,order history and dietary restrictions.</p>
                    </div>
                </div>

                <div className="container left" >
                    <div id='detail-3' className="our-details-div">
                        <h1>Assistance with informed choices<span>.</span></h1>
                        <p>Our chatbot assist customers with informed choices, providing details about dishes, ingredients, allergies, and more.</p>
                    </div>
                    <div id='img-3-div' className="image-div">
                        <img id="img-3" className="img" src={img_3}/>
                    </div>
                </div>

                <div className="container right" >
                    <div id='img-4-div' className="image-div">
                        <img id="img-4" className="img" src={img_4}/>
                    </div>
                    <div id='detail-4' className="our-details-div">
                        <h1>Seamless payment processing<span>.</span></h1>
                        <p>With LATWO, payment processing is seamless. Our digital waiter handles payment, tipping, and even splits the bill between diners.</p>
                    </div>
                </div>

                <div className="container left" >
                    <div id='detail-5' className="our-details-div">
                        <h1>Targeted sales to each customer<span>.</span></h1>
                        <p>LATWO enhances the restaurant experience by using AI to suggest items to each customer based on their preferences and past orders. This increases sales and customer satisfaction.</p>
                    </div>
                    <div id='img-5-div' className="image-div">
                        <img id="img-5" className="img" src={img_5}/>
                    </div>
                </div>

                <div className="container right" >
                    <div id='img-6-div' className="image-div">
                        <img id="img-6" className="img" src={img_6}/>
                    </div>
                    <div id='detail-6' className="our-details-div">
                        <h1>Saves manpower and eliminates human error<span>.</span></h1>
                        <p>With LATWO, the need for traditional waitstaff is reduced, eliminating human error and saving costs of labor. Customers can order directly from their mobile device, increasing convenience and efficiency.</p>
                    </div>
                </div>

                <div className="container down"  >
                    <div id='detail-7' className="our-details-div">
                        <h1>Enhance customer experience<span>.</span></h1>
                        <p>LATWO uses machine learning algorithms to personalize customer experiences, making them feel valued and respected. With a better understanding of their preferences, your restaurant can customize the menu or offer personalized recommendations, making your customers feel special and coming back for more.</p>
                    </div>
                    <div id='img-7-div' className="image-div">
                        <img id="img-7" className="img" src={img_7}/>
                    </div>
                </div>
            </div>
            <Details/>
    </div>
  );
}

export default App;
