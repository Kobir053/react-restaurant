import React,{useEffect} from "react";
import './about.css';
import img_1 from '../img/img-1.jpg';
import img_2 from '../img/img-2.jpg';
import img_3 from '../img/img-3.jpg';
import img_4 from '../img/img-4.jpg';
import img_5 from '../img/img-5.jpg';
import img_6 from '../img/img-6.jpg';
import img_7 from '../img/img-7.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function AboutUs () {

    useEffect(()=>{
        AOS.init();
    },[])

    return (
        <div id="about-div">
            <h1 id="latwo">LATWO</h1>
            <div id="main-container">
                <div className="container left" data-aos='fade-down' data-aos-easing="linear" data-aos-duration='1000'>
                    <div className="our-details-div">
                        <h1>Revolutionize your dining experience with LATWO<span>.</span></h1>
                        <p>LATWO's AI digital waiter and Chatbot recommend the perfect order and handle payment seamlessly.</p>
                    </div>
                    <div id="image-div">
                        <img id="img-1" className="img" src={img_1}/>
                    </div>
                </div>

                <div className="container right" data-aos='fade-down' data-aos-easing="linear" data-aos-duration='1000'>
                    <div id="image-div">
                        <img id="img-2" className="img" src={img_2}/>
                    </div>
                    <div className="our-details-div">
                        <h1>Personalized menu recommendations<span>.</span></h1>
                        <p>LATWO's AI digital waiter provides personalized menu recommendations based on your preferences,order history and dietary restrictions.</p>
                    </div>
                </div>

                <div className="container left" data-aos='fade-right' data-aos-duration='1000'>
                    <div className="our-details-div">
                        <h1>Assistance with informed choices<span>.</span></h1>
                        <p>Our chatbot assist customers with informed choices, providing details about dishes, ingredients, allergies, and more.</p>
                    </div>
                    <div id="image-div">
                        <img id="img-3" className="img" src={img_3}/>
                    </div>
                </div>

                <div className="container right" data-aos='fade-left' data-aos-duration='1000'>
                    <div id="image-div">
                        <img id="img-4" className="img" src={img_4}/>
                    </div>
                    <div className="our-details-div">
                        <h1>Seamless payment processing<span>.</span></h1>
                        <p>With LATWO, payment processing is seamless. Our digital waiter handles payment, tipping, and even splits the bill between diners.</p>
                    </div>
                </div>

                <div className="container left" data-aos='zoom-in-right' data-aos-duration='1000'>
                    <div className="our-details-div">
                        <h1>Targeted sales to each customer<span>.</span></h1>
                        <p>LATWO enhances the restaurant experience by using AI to suggest items to each customer based on their preferences and past orders. This increases sales and customer satisfaction.</p>
                    </div>
                    <div id="image-div">
                        <img id="img-5" className="img" src={img_5}/>
                    </div>
                </div>

                <div className="container right" data-aos='zoom-in-left' data-aos-duration='1000'>
                    <div id="image-div">
                        <img id="img-6" className="img" src={img_6}/>
                    </div>
                    <div className="our-details-div">
                        <h1>Savesmanpower and eliminateshuman error.<span>.</span></h1>
                        <p>With LATWO, the need for traditional waitstaff is reduced, eliminating human error and saving costs of labor. Customers can order directly from their mobile device, increasing convenience and efficiency.</p>
                    </div>
                </div>

                <div className="container down"  data-aos='flip-left' data-aos-duration='1000'>
                    <div className="our-details-div">
                        <h1>Enhance customer experience.<span>.</span></h1>
                        <p>LATWO uses machine learning algorithms to personalize customer experiences, making them feel valued and respected. With a better understanding of their preferences, your restaurant can customize the menu or offer personalized recommendations, making your customers feel special and coming back for more.</p>
                    </div>
                    <div id="image-div">
                        <img id="img-7" className="img" src={img_7}/>
                    </div>
                </div>
            </div>
            
        </div>
    )
}