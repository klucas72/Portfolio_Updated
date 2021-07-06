import React from 'react';

export default function projects() {

    return (
        <div nameClass="row">
            <div id="blank_space" class="col-md-12 col-sm-12"></div>
            <div nameClass="row">
                <div id="work" class="col-md-2 col-sm-12">
                    Work Product
                </div>
                <div id="work_example" class="col-md-10 col-sm-12">
                    <div nameClass="card text-white bg-secondary mb-3" style="width: 18rem;">
                        <img src="./assets/day planner.png" class="card-img-top" alt="electronic day event calendar"></img>
                        <div nameClass="card-body">
                            <h5 nameClass="card-title">Day Planner App</h5>
                            <p nameClass="card-text">Application created to log and save day's events to a web calendar</p>
                            <a href="https://klucas72.github.io/homework-week-6/" class="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div nameClass="card text-white bg-secondary mb-3" style="width: 18rem;">
                        <img src="./assets/weather app.png" class="card-img-top" alt="5 day weather forecast application"></img>
                        <div nameClass="card-body">
                            <h5 nameclass="card-title">5 Day Weather Forecast App</h5>
                            <p nameClass="card-text">Application created to show 5 day weather forecast as well a current conditions
                            </p>
                            <a href="https://klucas72.github.io/5-Day-forecast-application/" class="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div nameClass="card text-white bg-secondary mb-3" style="width: 18rem;">
                        <img src="./assets/recipe finder.png" class="card-img-top"
                            alt="web application to find recipes based on cuisine"></img>
                        <div nameClass="card-body">
                            <h5 nameClass="card-title">Recipe Finder App</h5>
                            <p nameClass="card-text">Application created to find recipes and cocktails based on cuisine and meal time
                            </p>
                            <a href="https://sranson.github.io/recipe-finder/" class="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div nameClass="row">
                        <div id="blank_space2" class="col-md-12 col-sm-12"></div>
                        <div id="work2" class="col-md-2 col-sm-12"></div>
                        <div id="work_example2" class="col-md-10 col-sm-12">
                            <div nameClass="card text-white bg-secondary mb-3" style="width: 18rem;">
                                <img src="./assets/Tech Blog.png" class="card-img-top"
                                    alt="web application to find recipes based on cuisine"></img>
                                <div nameClass="card-body">
                                    <h5 nameClass="card-title">Tech Blog App</h5>
                                    <p nameClass="card-text">Application created to post, list and show blog posts of users logged in.
                                        Allows users to create accounts and post items to their dashboard as well.
                                    </p>
                                    <a href="https://kll-tech-blog.herokuapp.com/" class="btn btn-dark">app link</a>
                                </div>

                                <div nameClass="card text-white bg-secondary mb-3" style="width: 18rem;">
                                    <img src="./assets/Note Taker App.png" class="card-img-top"
                                        alt="web application to find recipes based on cuisine"></img>
                                    <div nameClass="card-body">
                                        <h5 nameClass="card-title">Note Taker Application</h5>
                                        <p nameClass="card-text">Application created to document, store and post notes and to-do lists for
                                            yourself.
                                            User is able to create, update and delete notes as needed.
                                        </p>
                                        <a href="https://klucas72-note-taker-app.herokuapp.com/" class="btn btn-dark">app link</a>
                                    </div>

                                    <div nameClass="card text-white bg-secondary mb-3" style="width: 18rem;">
                                        <img src="./assets/cohoots dashboard.png" class="card-img-top"
                                            alt="web application to find recipes based on cuisine"></img>
                                        <div nameClass="card-body">
                                            <h5 nameclass="card-title">CoHoots Ecommerce site</h5>
                                            <p nameClass="card-text">Application created to upload t-shirt designs then vote on which is best to
                                                choose which design to make.
                                            </p>
                                            <a href="https://cohoots.herokuapp.com/" class="btn btn-dark">app link</a>
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