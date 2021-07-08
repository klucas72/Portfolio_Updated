import React from 'react';
import techBlog from '../media/Tech Blog.png';
import noteTaker from '../media/Note Taker App.png';
import cohoots from '../media/cohoots dashboard.png';

export default function Project2() {

    return (
        <div className="row">
            <div id="blank_space2" className="col-md-12 col-sm-12"></div>
            <div id="row" className="row">
                <div id="work2" className="col-md-2 col-sm-12"></div>
                <div id="work_example2" className="col-md-10 col-sm-12">
                    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                        <img src={techBlog} className="card-img-top"
                            alt="web application to find recipes based on cuisine"></img>
                        <div className="card-body">
                            <h5 className="card-title">Tech Blog App</h5>
                            <p className="card-text">Application created to post, list and show blog posts of users logged in.
                                Allows users to create accounts and post items to their dashboard as well.
                            </p>
                            <a href="https://kll-tech-blog.herokuapp.com/" className="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                        <img src={noteTaker} className="card-img-top"
                            alt="web application to find recipes based on cuisine"></img>
                        <div className="card-body">
                            <h5 className="card-title">Note Taker Application</h5>
                            <p className="card-text">Application created to document, store and post notes and to-do lists for
                                yourself.
                                User is able to create, update and delete notes as needed.
                            </p>
                            <a href="https://klucas72-note-taker-app.herokuapp.com/" className="btn btn-dark">app link</a>
                        </div>
                    </div>

                    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }}>
                        <img src={cohoots} className="card-img-top" alt="web application to find recipes based on cuisine"></img>
                        <div className="card-body">
                            <h5 className="card-title">CoHoots Ecommerce site</h5>
                            <p className="card-text">Application created to upload t-shirt designs then vote on which is best to
                                choose which design to make.
                            </p>
                            <a href="https://cohoots.herokuapp.com/" className="btn btn-dark">app link</a>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}