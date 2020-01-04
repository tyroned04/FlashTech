import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "./css/App.css";
import "./css/About.css";

import HAbout from "./assets/hero_about.png";
import arrowG from "./assets/about_arrow_g.png";
import arrowO from "./assets/about_arrow_o.png";

class About extends React.Component {
    render() {
        return(
            <div className="about_wrapper">
                <div className="hero_about">
                    <img src={HAbout} alt="Banner" />
                </div>

                <div className="about_content">
                    <ScrollAnimation animateIn="bounceInLeft">
                        <div className="about_head">
                            <img src={arrowO} alt="Arrow" />
                            <h5 className="about_h5">Our Beginning</h5>
                        </div>
                    </ScrollAnimation>
                    <hr className="about_hr" />
                    <div className="about_body">
                        <ScrollAnimation animateIn="fadeIn">
                            <p>FlashTech started as a passion project in 2009 in Atlanta, Georgia. We helped to pave the way for new technolgies, 
                                through our design methodologies and practices. FlashTech has provided a variety of small to medium sized businesses
                                with expertise and experienced individuals who have helped to increase their revenue and standing. </p>
                            
                            <p>Our culture at FlashTech has always been work hard, self motivate, and the energy will maintain morale amongst the team 
                                and environment. We have always been a team who has expected the best from ourselves towards our work. FlashTech has 
                                strived for excellence and deliver business results that exceed the expectations of our clients.</p>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="about_content">
                    <ScrollAnimation animateIn="bounceInLeft">
                        <div className="about_head">
                            <img src={arrowO} alt="Arrow" />
                            <h5 className="about_h5">Our Mission</h5>
                        </div>
                    </ScrollAnimation>
                    <hr className="about_hr" />
                    <div className="about_body">
                        <ScrollAnimation animateIn="fadeIn">
                            <p>Our mission is simple: <span className="about_mission">Build solutions, build relationships, build ourselves.</span> </p>
                            <p>With a motivated team of hard-working individuals, satisfied clients with are at the epicenter of our goals. We have developed
                                many relationships with a variety of small companies across the nation and will continue to do so in the upcoming years.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>

                <div className="about_content">
                    <ScrollAnimation animateIn="bounceInLeft">
                        <div className="about_head">
                            <img src={arrowO} alt="Arrow" />
                            <h5 className="about_h5">Our Values</h5>
                        </div>
                    </ScrollAnimation>
                    <hr className="about_hr" />
                    <div className="about_body ul_cont">
                        <ScrollAnimation animateIn="fadeIn">
                            <ul className="about_ul">
                                <li><img className="values_img" src={arrowG} alt="Values" />Relationships</li>
                                <li><img className="values_img" src={arrowG} alt="Values" />Diversity</li>
                                <li><img className="values_img" src={arrowG} alt="Values" />Excellence</li>
                                <li><img className="values_img" src={arrowG} alt="Values" />Trust</li>
                            </ul>

                            <ul className="about_ul">
                                <li><img className="values_img" src={arrowG} alt="Values" />Continuous Learning</li>
                                <li><img className="values_img" src={arrowG} alt="Values" />Integrity</li>
                                <li><img className="values_img" src={arrowG} alt="Values" />Sustainability</li>
                                <li><img className="values_img" src={arrowG} alt="Values" />Customer Satisfaction</li>
                            </ul>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;