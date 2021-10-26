import React, { Fragment } from 'react';

const About = () => {
    return (
        <Fragment>
            <div id="about" className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>About</h2><br />
                        <h4>Talent Search Services is an integrated IT talents and HR ecruitment service provider headquartered in Bangalore, India.</h4><br />
                        <p>
                        Talent Serach Services”, is a pioneer in rendering HR Solutions across the Globe. It is a combined venture of leading and experienced HR Professionals.
                        The company laid its roots from basics of HR Management, thereby bringing a unique approach to cater the requirements of our Clients. We recruit across various verticals for multinational corporations as well as leading business houses. Over the past years, we have been able to shape the careers of numerous professionals. 
                        Our strong beliefs and values define what we stand for and determine how we work.Our rigorous screening procedure ensures quality output within specific timeframes. You can completely rely on us to handle even the most critical requirements in shortest possible time, which is of paramount importance in these evolving times. 
                        We keep abreast of the rapid developments that take place in the corporate arena and constantly review and upgrade ourselves to tackle these developments in the most effective manner.
                        </p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-signal logo"></span>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <h2>Our Values</h2><br />
                        <h4><strong>MISSION:</strong> Our mission is “To mutually build a globally respected Human Capital Solutions Company that provides best-in-class human capital solutions,
which will add value to client organizations”.</h4><br />
                        <h4><strong>VISION:</strong> Our vision is to create a better for many people everyday.</h4>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default About;
