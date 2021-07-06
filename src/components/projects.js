import React from 'react';

export default function projects() {

    const linkStyle = { style: "width: 18rem" }

    return (
        <div className="row">
            <div id="blank_space" className="col-md-12 col-sm-12"></div>
            <div className="row">
                <div id="work" className="col-md-2 col-sm-12">
                    Work Product
                </div>
                <div id="work_example" className="col-md-10 col-sm-12">
                    <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                        <img src="../../public/day planner.png" className="card-img-top" alt="electronic day event calendar"></img>
                        <div className="card-body">
                            <h5 className="card-title">Day Planner App</h5>
                            <p className="card-text">Application created to log and save day's events to a web calendar</p>
                            <a href="https://klucas72.github.io/homework-week-6/" className="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                        <img src="../../public/weather app.png" className="card-img-top" alt="5 day weather forecast application"></img>
                        <div className="card-body">
                            <h5 className="card-title">5 Day Weather Forecast App</h5>
                            <p className="card-text">Application created to show 5 day weather forecast as well a current conditions
                            </p>
                            <a href="https://klucas72.github.io/5-Day-forecast-application/" className="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                        <img src="../../public/recipe finder.png" className="card-img-top"
                            alt="web application to find recipes based on cuisine"></img>
                        <div className="card-body">
                            <h5 className="card-title">Recipe Finder App</h5>
                            <p className="card-text">Application created to find recipes and cocktails based on cuisine and meal time
                            </p>
                            <a href="https://sranson.github.io/recipe-finder/" className="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div className="row">
                        <div id="blank_space2" className="col-md-12 col-sm-12"></div>
                        <div id="work2" className="col-md-2 col-sm-12"></div>
                        <div id="work_example2" className="col-md-10 col-sm-12">
                            <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                                <img src="../../public/Tech Blog.png" className="card-img-top"
                                    alt="web application to find recipes based on cuisine"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Tech Blog App</h5>
                                    <p className="card-text">Application created to post, list and show blog posts of users logged in.
                                        Allows users to create accounts and post items to their dashboard as well.
                                    </p>
                                    <a href="https://kll-tech-blog.herokuapp.com/" className="btn btn-dark">app link</a>
                                </div>

                                <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                                    <img src="../../public/Note Taker App.png" className="card-img-top"
                                        alt="web application to find recipes based on cuisine"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taker Application</h5>
                                        <p className="card-text">Application created to document, store and post notes and to-do lists for
                                            yourself.
                                            User is able to create, update and delete notes as needed.
                                        </p>
                                        <a href="https://klucas72-note-taker-app.herokuapp.com/" className="btn btn-dark">app link</a>
                                    </div>

                                    <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                                        <img src="../../public/cohoots dashboard.png" className="card-img-top"
                                            alt="web application to find recipes based on cuisine"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">CoHoots Ecommerce site</h5>
                                            <p className="card-text">Application created to upload t-shirt designs then vote on which is best to
                                                choose which design to make.
                                            </p>
                                            <a href="https://cohoots.herokuapp.com/" className="btn btn-dark">app link</a>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}