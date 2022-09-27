import React from 'react';
import './hero.css'
import Header from "../Header/header";
const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header/>

                {/*The Best Ad*/}

                <div className="the-best-ad">
                    <div></div>
                    <span>The Best Fitness School</span>
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

                </div>
            </div>
            <div className="right-h"></div>
        </div>

    )
}
export default Hero;