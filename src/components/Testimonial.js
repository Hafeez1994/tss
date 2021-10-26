import React, { Fragment } from 'react';
const Testimonial = () => {
    return (
        <Fragment>
            <div id="portfolio" class="container-fluid text-center bg-grey">
                <h2>What our customers say</h2>
                <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <h4>"This company is the best. I am so happy with the result!"<br /><span>Suresh Roe, Vice President, Wipro</span></h4>
                        </div>
                        <div className="item">
                            <h4>"Very professional services, Im happy with their help and support.!!"<br /><span>Rahul, HR Head, HCL</span></h4>
                        </div>
                        <div className="item">
                            <h4>"Happy with this company for their excellent work"<br /><span>Mohameed Hafeez, Senior HR, Phinominal Tech</span></h4>
                        </div>
                    </div>
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Testimonial;