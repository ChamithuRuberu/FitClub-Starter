import React from 'react';
import './plan.css'
import {plansData} from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png"

const Plan = () => {
    return(

        <div className="container">
            <div className="plans-container">
                <div className="blur plans-blur-1"></div>
                <div className="blur plans-blur-2"></div>
            </div>

            <div className="Program-header" style={{gap:'2rem'}}>
                <span className="stroke-text">ready to start</span>
                <span >start your journey</span>
                <span className="stroke-text">Now with us</span>
            </div>


            <div className="plans">

                {plansData.map((plan,i)=>(

                  <div className={"plan"}>
                      {plan.icon}
                      <span>{plan.name}</span>
                      <span>{plan.price}</span>

                      <div className={"features"}>
                          {plan.features.map((feature,index)=>(
                              <div className={"feature"}>
                                  <img src={whiteTick}/>
                                  <span key={i}>{feature}</span>
                              </div>
                          ))}
                      </div>
                      <div>
                          <span>See more benifits -></span>
                      </div>
                      <button className="btn">Join Now</button>
                  </div>
                ))}
            </div>
        </div>
    )
}
export default Plan;