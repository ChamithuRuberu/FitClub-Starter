import React from 'react';
import './program.css'
import {programsData} from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png"
const Program = () => {

    return(
        <div className="Programs" id="programs">
            <div className="Program-header">
                <span className='stroke-text'>Explore</span>
                <span>Programs</span>
                <span className='stroke-text'>To shape you</span>
            </div>

            <div className="program-category">
                {programsData.map((program)=>(
                    <div className="category">
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="Join-Now"><span>Join Now</span><img src={RightArrow}/></div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Program;