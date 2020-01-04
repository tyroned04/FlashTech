import React, {useState} from "react";
import {Collapse} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import "./css/App.css";
import "./css/Services.css";

import talent from "./assets/talent_staffing.png";
import b_solutions from "./assets/business_sols.png";
import t_solutions from "./assets/tech_sols.png";

function ServicesTalent() {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    const toggleA = () => { setIsOpenA(!isOpenA); setIsOpenB(false); setIsOpenC(false); }
    const toggleB = () => { setIsOpenA(false); setIsOpenB(!isOpenB); setIsOpenC(false); }
    const toggleC = () => { setIsOpenA(false); setIsOpenB(false); setIsOpenC(!isOpenC); }

    return(
        <div className="services_wrapper">
            <div className="services_talent">
                <div className="services_talent_cover">
                    <div className="talent_head">
                        <ScrollAnimation animateIn="fadeInLeft">
                            <h1 className="services_h1">Talent Staffing</h1>
                            <img className="services_img" src={talent} alt="Talent Staffing" />
                        </ScrollAnimation>
                    </div>
                    
                    <ScrollAnimation animateIn="fadeInDown">
                    <div className="talent_body">
                    
                        <button className="talent_button" onClick={toggleA}>Talent Acquisition</button>
                        <button className="talent_button" onClick={toggleB}>Training and Development</button>
                        <button className="talent_button" onClick={toggleC}>IT Support</button>
                    </div>
                    </ScrollAnimation>

                    <div className="talent_desc">
                        <Collapse isOpen={isOpenA}>
                            <h3 className="services_h3">Talent Acquisition</h3>
                            <hr className="services_hr" />
                            <p className="talent_p">Our team goes through an extensive process to find skilled
                                individuals who we believe would be fit for our training programs. </p>
                        </Collapse>

                        <Collapse isOpen={isOpenB}>
                            <h3 className="services_h3">Training and Development</h3>
                            <hr className="services_hr" />
                            <p className="talent_p">Our training and development programs cover a wide array of technologies
		                        including recent web frameworks, database management, and system migrations.</p>
                        </Collapse>

                        <Collapse isOpen={isOpenC}>
                            <h3 className="services_h3">Training and Development</h3>
                            <hr className="services_hr" />
                            <p className="talent_p">With our team of experts, we find that taking some individuals on as support
		                        technicians has been a great way to have those individuals ready for future
		                        work with companies like yours when needed.</p>
                        </Collapse>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

function ServicesBusiness() {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    const toggleA = () => { setIsOpenA(!isOpenA); setIsOpenB(false); setIsOpenC(false); }
    const toggleB = () => { setIsOpenA(false); setIsOpenB(!isOpenB); setIsOpenC(false); }
    const toggleC = () => { setIsOpenA(false); setIsOpenB(false); setIsOpenC(!isOpenC); }

    return(
        <div className="services_wrapper">
            <div className="services_business">
                <div className="services_business_cover">
                    <div className="business_head">
                        <ScrollAnimation animateIn="fadeInLeft">
                            <h1 className="services_h1">Business Solutions</h1>
                            <img className="services_img" src={b_solutions} alt="Business solutions" />
                        </ScrollAnimation>
                    </div>
                    
                    <ScrollAnimation animateIn="fadeInDown">
                    <div className="business_body">
                        <button className="business_button" onClick={toggleA}>Business Analysis and Scaling</button>
                        <button className="business_button" onClick={toggleB}>Process Improvement</button>
                        <button className="business_button" onClick={toggleC}>Quality Assurance and Testing</button>
                    </div>
                    </ScrollAnimation>

                    <div className="talent_desc">
                        <Collapse isOpen={isOpenA}>
                            <h3 className="services_h3">Business Analysis and Scaling</h3>
                            <hr className="services_hr" />
                            <p className="business_p">At FlashTech, our professional analysts are always researching to determine
		                        the best solutions to solve your business problems and initiatives.</p>
                        </Collapse>

                        <Collapse isOpen={isOpenB}>
                            <h3 className="services_h3">Process Improvement</h3>
                            <hr className="services_hr" />
                            <p className="business_p">Our trained individuals become key developers throughout the development life
		                        cycle. From strategizing and planning to utilizing agile methodologies, our team
		                        has a great track record for accomplishing software milestones on time.</p>
                        </Collapse>

                        <Collapse isOpen={isOpenC}>
                            <h3 className="services_h3">Quality Assurance and Testing</h3>
                            <hr className="services_hr" />
                            <p className="business_p">Insuring quality is one of the core principles of our trained talent. Our process
		                        emphasizes the prevention of defects and having a multitude of tests to manage the
		                        quality and overall state of the product.</p>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ServicesTechnology() {
    const [isOpenA, setIsOpenA] = useState(false);
    const [isOpenB, setIsOpenB] = useState(false);
    const [isOpenC, setIsOpenC] = useState(false);

    const toggleA = () => { setIsOpenA(!isOpenA); setIsOpenB(false); setIsOpenC(false); }
    const toggleB = () => { setIsOpenA(false); setIsOpenB(!isOpenB); setIsOpenC(false); }
    const toggleC = () => { setIsOpenA(false); setIsOpenB(false); setIsOpenC(!isOpenC); }

    return(
        <div className="services_wrapper">
            <div className="services_technology">
                <div className="services_technology_cover">
                    <div className="technology_head">
                        <ScrollAnimation animateIn="fadeInLeft">
                            <h1 className="services_h1">Technology Solutions</h1>
                            <img className="services_img" src={t_solutions} alt="Technology solutions" />
                        </ScrollAnimation>
                    </div>
                    
                    <ScrollAnimation animateIn="fadeInDown">
                    <div className="technology_body">
                        <button className="technology_button" onClick={toggleA}>Applications Development</button>
                        <button className="technology_button" onClick={toggleB}>Website Development</button>
                        <button className="technology_button" onClick={toggleC}>Quality Engineering</button>
                    </div>
                    </ScrollAnimation>

                    <div className="technology_desc">
                        <Collapse isOpen={isOpenA}>
                            <h3 className="services_h3">Applications Development</h3>
                            <hr className="services_hr" />
                            <p className="technology_p">At FlashTech, our expert team hires talent skilled in application development,
		                        migration, and modernization.</p>
                        </Collapse>

                        <Collapse isOpen={isOpenB}>
                            <h3 className="services_h3">Website Development</h3>
                            <hr className="services_hr" />
                            <p className="technology_p">Most individuals who are hired have experience in website development. Recently,
		                        we have placed more emphasis on mobile-first design and quality frameworks.</p>
                        </Collapse>

                        <Collapse isOpen={isOpenC}>
                            <h3 className="services_h3">Quality Engineering</h3>
                            <hr className="services_hr" />
                            <p className="technology_p">FlashTech insures that quality engineering practices are an on-going process. Some of
		                        the practices include analysing requirements, test reporting, testing defects, and
		                        regression testing.</p>
                        </Collapse>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

class Services extends React.Component {
    render() {
        return(
            <div>
                <ServicesTalent />
                <ServicesBusiness />
                <ServicesTechnology />
            </div>
        );
    }
}


export default Services;