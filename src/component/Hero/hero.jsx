import React from 'react';
import './hero.css'
import Header from "../Header/header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";


const Hero = () => {
    return (
        <div className="hero">
            <div className="blur hero-blur"></div>

            <div className="left-h">
                <Header/>

                {/*The Best Ad*/}

                <div className="the-best-ad">
                    <div></div>
                    <span>The Best Fitness School In Piliyandala</span>
                </div>

                {/*Hero Heading*/}
                <div className="hero-text">

                    <div>
                        <span className="stroke-text">Shape</span>
                        <span> Your</span>
                    </div>

                    <div>
                        <span>ideal Body</span>
                    </div>

                    <div>
                        <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
                    </div>

                    <div className="figures">
                        {/*figure*/}
                        <div>
                            <span>+140</span>
                            <span>Expert Coaches</span>
                        </div>

                        <div>
                            <span>+978</span>
                            <span>Members Joined</span>
                        </div>

                        <div>
                            <span>+50</span>
                            <span>Fitness Programs</span>
                        </div>
                    </div>

                    {/*Hero Button*/}
                    <div className="hero-Button">
                    <button className="btn"> Get Started </button>
                    <button className="btn">Learn More </button>
                    </div>
                </div>
            </div>

            <div className="right-h">


                <div className="heart-rate">
                    <img src={Heart}alt=""/>
                        <span>Heart Rate</span>
                        <span>120 bpm</span>
                </div>

            <img src={hero_image}className="hero-image"/>


                <div className="calory">
                    <img src={calories} className="calories" alt="calories"/>
                    <div><span>Calories Burned</span>
                        <span>220 Kcal</span>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Hero;