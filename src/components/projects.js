import React from 'react';
import dayPlanner from '../media/day planner.png';
import weatherApp from '../media/weather app.png';
import recipeFinder from '../media/recipe finder.png';


export default function projects() {

    // const linkStyle = { style: {{width: 18rem}} }

    return (
        <div className="row">
            <div id="blank_space" className="col-md-12 col-sm-12"></div>
            <div className="row">
                <div id="work" className="col-md-2 col-sm-12">
                    Work Product
                </div>
                <div id="work_example" className="col-md-10 col-sm-12">
                    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                        <img src={dayPlanner} className="card-img-top" alt="electronic day event calendar"></img>
                        <div className="card-body">
                            <h5 className="card-title">Day Planner App</h5>
                            <p className="card-text">Application created to log and save day's events to a web calendar</p>
                            <a href="https://klucas72.github.io/day_planner/" className="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                        <img src={weatherApp} className="card-img-top" alt="5 day weather forecast application"></img>
                        <div className="card-body">
                            <h5 className="card-title">5 Day Weather Forecast App</h5>
                            <p className="card-text">Application created to show 5 day weather forecast as well a current conditions
                            </p>
                            <a href="https://klucas72.github.io/5-Day-forecast-application/" className="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                        <img src={recipeFinder} className="card-img-top"
                            alt="web application to find recipes based on cuisine"></img>
                        <div className="card-body">
                            <h5 className="card-title">Recipe Finder App</h5>
                            <p className="card-text">Application created to find recipes and cocktails based on cuisine and meal time
                            </p>
                            <a href="https://sranson.github.io/recipe-finder/" className="btn btn-dark">app link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}