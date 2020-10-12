import React, {useState} from "react";
import {Collapse} from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";

import "./css/App.css";
import "./css/Careers.css";

/*
const [isOpenA, setIsOpenA] = useState(false);
const [isOpenB, setIsOpenB] = useState(false);
const [isOpenC, setIsOpenC] = useState(false);

const toggleA = () => { setIsOpenA(!isOpenA); setIsOpenB(false); setIsOpenC(false); }
const toggleB = () => { setIsOpenA(false); setIsOpenB(!isOpenB); setIsOpenC(false); }
const toggleC = () => { setIsOpenA(false); setIsOpenB(false); setIsOpenC(!isOpenC); }

return(


<div className="talent_body">
    <button className="talent_button" onClick={toggleA}>Talent Acquisition</button>
    <button className="talent_button" onClick={toggleB}>Training and Development</button>
    <button className="talent_button" onClick={toggleC}>IT Support</button>
</div> 
*/

function JobInfo(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {setIsOpen(!isOpen);}

    let jobMore = [];

    let allResps = [];
    let resps = [];
    
    let allReqs = [];
    let reqs = [];

    for (let i = 0; i < props.jobs.length; i++) {
        for (let j = 0; j < props.resps.length; j++) {
            resps.push(<li><b>> </b>{props.jobs[i].resps[j]}</li>);
        }

        allResps.push(resps);
        resps = [];
    }

    for (let i = 0; i < props.jobs.length; i++) {
        for (let j = 0; j < props.reqs.length; j++) {
            reqs.push(<li><b>> </b>{props.jobs[i].reqs[j]}</li>);
        }
        
        allReqs.push(reqs);
        reqs = [];
    }


    for (let i = 0; i < props.jobs.length; i++) {
        jobMore.push(
            <Collapse className="jobs_collapse" isOpen={isOpen}>
                <h6 className="careers_h6">Responsibilities</h6>
                <ul className="careers_ul">
                   {allResps[i]}
                </ul>

                <h6 className="careers_h6">Required</h6>
                <ul className="careers_ul">
                    {allReqs[i]}
                </ul>

                <h6 className="careers_h6">Benefits</h6>
                <ul className="careers_ul">
                    <li><b>> </b>401K</li>
                    <li><b>> </b>Health insurance</li>
                    <li><b>> </b>Vision insurance</li>
                    <li><b>> </b>Dental insurance</li>
                    <li><b>> </b>Paid-time off</li>
                </ul>
            </Collapse>
        );
    }

    return(
        <div className="more_context">
            <p><b>Apply</b> by sending your resume to <a href="mailto:info.flashtechsolutions@gmail.com">info.flashtechsolutions@gmail.com</a></p>
            <div className="more_button">
                <button onClick={toggle}>More</button>
            </div>
            {jobMore[props.num]}
            
        </div>

    );

}

class Careers extends React.Component {
    render() {
        const jobA = {
            moreButton: "More",
            name: "Junior .Net Developer",
            location: "Atlanta, GA",
            date: "01/06/2020 - 02/18/2020",
            desc: "FlashTech requires a junior developer to build and enhance a data-driven software product aimed at continually improving airline performance and decision making.",

            resps: [
                "Creating and modifying responsive web applications, and client applications using a variety of technologies and languages centered around a Microsoft stack",
                "Testing web applications and client applications",
                "Troubleshooting problems in the production environment",
            ],

            reqs: [
                "Bachelor’s degree in Software Engineering, Computer Science, Information Technology or another related technical discipline, or 4 years of equivalent experience",
                "Must have excellent problem solving skills",
                "2+ years experience with C#, ASP MVC, .NET 4.5+",
                "4+ years experience with HTML, CSS, JavaScript",
                "Must have excellent communication skills (verbal, written, and interpersonal)",
                "A working knowledge of code source control concepts",
            ],
        };

        const jobB = {
            name: "Senior .Net Developer",
            location: "Atlanta, GA",
            date: "01/06/2020 - 02/18/2020",
            desc: "FlashTech requires a senior developer to build and enhance a data-driven software product aimed at continually improving airline performance and decision making.",
        
            resps: [
                "Creating and modifying responsive web applications, and client applications using a variety of technologies and languages centered around a Microsoft stack",
                "Testing web applications and client applications",
                "Troubleshooting problems in the production environment",
            ],

            reqs: [
                "Bachelor’s degree in Software Engineering, Computer Science, Information Technology or another related technical discipline, or 6 years of equivalent experience",
                "Must have excellent problem solving skills",
                "2+ years experience with C#, ASP MVC, .NET 4.5+",
                "4+ years experience with HTML, CSS, JavaScript",
                "Must have excellent communication skills (verbal, written, and interpersonal)",
                "A working knowledge of code source control concepts",
                "Ability to analyze requirements, and translate business requirements into product designs and write technical specifications and other forms of documentation",
                "Suggests technical alternatives and improves/streamlines processes and systems. Must complete project assignments and special projects commensurate with job expectations",
            ],
        }

        const jobC = {
            name: "Junior Fullstack Developer",
            location: "Atlanta, GA",
            date: "01/06/2020 - 02/18/2020",
            desc: "FlashTech requires a junior web designer to build and enhance a data-driven software product aimed at continually improving airline performance and decision making.",
        
            resps: [
                "Creating and modifying responsive web applications, and client applications using a variety of technologies and languages centered around a Microsoft stack",
                "Testing web applications and client applications",
                "Troubleshooting problems in the production environment",
            ],

            reqs: [
                "Excellent front-end skills, including HTML and the use of CSS preprocessors and modern principles of JavaScript development",
                "Must have excellent problem solving skills",
                "4+ years experience with HTML, CSS, JavaScript",
                "Must have excellent communication skills (verbal, written, and interpersonal)",
                "A working knowledge of code source control concepts",
                "Work with UX Design to develop innovative user interactions including the support a responsive UI and visual transitions to optimize the user experience",
            ],
        }


        const jobs = [jobA, jobB, jobC];
        let items = [];

        for (let i = 0; i < jobs.length; i++) {
            items.push(
                <div className="careers_content">
                    <ScrollAnimation animateIn="zoomIn">
                        <div className="careers_head">
                            <h3>{jobs[i].name}</h3>
                            <h6>{jobs[i].location}</h6>
                            <h6>{jobs[i].date}</h6>
                            <hr />
                        </div>
                        
                        <div className="careers_body">
                            <h6>Description</h6>
                            <p>{jobs[i].desc}</p>
                        </div>

                        <JobInfo jobs={jobs} resps={jobs[i].resps} reqs={jobs[i].reqs} num ={i} />
                    </ScrollAnimation>
                </div>

            );
        }

        return(
            <div className="careers_wrapper">
                <div className="careers_banner">
                    <div className="careers_banner_light">
                    <div className="invisible"></div>
                        <ScrollAnimation animateIn="fadeInRight">
                            <div className="careers_title">
                                <h2 className="careers_h2">Careers</h2>
                                <p>FlashTech employs skilled individuals from across the nation. Our culture <br />
                                    is rooted in our core values and permeates in everything that we do. Employees' benefits include <br/>
                                    competitive-pay, 401k, health insurance, dental insurance, vision insurance, and paid-time off. </p> 
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
                
                <div className="job_listings">
                    {items}
                </div>
            </div>
        );
    }
}

export default Careers;