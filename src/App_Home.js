import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import talent from "./assets/talent_staffing.png";
import b_solutions from "./assets/business_sols.png";
import t_solutions from "./assets/tech_sols.png";

import "./css/App.css";
import "./css/Home.css";
import "../node_modules/animate.css";

class MainPrimary extends React.Component {
    render() {
        return(
            <div className="main_wrapper">
                <ScrollAnimation animateIn="fadeInDown">
                <h1 className="home_h1">Our Services</h1>
                </ScrollAnimation>
                <hr className="home_hr" />
                <main className="main_primary">
                
                <div className="services">
                    <ScrollAnimation animateIn="fadeInDown">
                    <h4 className="home_h4">Talent Staffing</h4>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn">
                    <div className="services_icon">
                        <img src={talent} alt="Talent" />
                    </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInUp">
                    <div className="services_context">
                    We search and employ the most talented engineers 
                    in the region to best serve your business needs.
                    </div>
                    </ScrollAnimation>
                </div>
               
                <div className="divider"></div>

                <div className="services">
                    <ScrollAnimation animateIn="fadeInDown" delay="500">
                        <h4 className="home_h4">Managed Solutions</h4>
                    </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeIn" delay="500">
                        <div className="services_icon">
                        <img src={b_solutions} alt="Business Solutions" />
                        </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInUp" delay="500">
                        <div className="services_context">
                        With our expert team of business analyists, we find
                        the best approach to improve your process and 
                        better scale your business.
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="divider"></div>

                <div className="services">
                    <ScrollAnimation animateIn="fadeInDown" delay="1000">
                        <h4 className="home_h4">Technology Solutions</h4>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeIn" delay="1000">
                        <div className="services_icon">
                        <img src={t_solutions} alt="Technology Solutions" />
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="fadeInUp" delay="1000">
                        <div className="services_context">
                        We provide a lot of services including application migrations
                        and website development, insuring quality and performance.
                        </div>
                    </ScrollAnimation>
                </div>
                </main>
            </div>
        );
    }
}

export default MainPrimary;