import React, {useState} from 'react';
import './testimonial.css'
import {testimonialsData} from "../../data/testimonialsData";
import rightArrow from "../../assets/rightArrow.png"
import leftArrow from '../../assets/leftArrow.png'
const Testimonial = () => {

    const [selcted,setselected]=useState(0)
    const tLength = testimonialsData.length;
    return (
        <div className="testimonial">
            <div className="left-t">
                <span>Testimonial</span>
                <span className="stroke-text">What They </span>
                <span className="">Say About Us </span>

                <span>
                    {testimonialsData[selcted].review}
                </span>

                <span>
                    <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selcted].name}
                </span>{" "}
                   - {testimonialsData[selcted].status}
                </span>


            <div className="right-t">
                <img src={testimonialsData[selcted].image}/>

                <div className="arrows">
                    <img src={leftArrow}/>
                    <img src={rightArrow}/>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonial;