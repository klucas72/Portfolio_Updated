import React from 'react';

export default function contact() {

    const linkStyle = { style: "width: 18rem;" }

    return (

        <div id="contact_info" class="col-md-10 col-sm-12">
            <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                <div className="card-header">Phone</div>
                <div className="card-body">
                    <p className="card-text">(404) 550-5082</p>
                </div>
            </div>

            <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                <div className="card-header">email</div>
                <div className="card-body">
                    <p className="card-text">klucas72@hotmail.com</p>
                </div>
            </div>

            <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                <div className="card-header">LinkedIn Profile</div>
                <div className="card-body">
                    <a href="https://www.linkedin.com/in/kristopher-lucas-1467355/" class="btn btn-dark">LinkedIn
                        profile</a>
                </div>
            </div>

            <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                <div className="card-header">Resume</div>
                <div className="card-body">
                    <a href="./assets/RESUME.pdf" class="btn btn-dark">Resume
                        Link</a>
                </div>
            </div>
            <div className="card text-white bg-secondary mb-3" style={linkStyle}>
                <div className="card-header">GitHub Profile</div>
                <div className="card-body">
                    <a href="https://github.com/klucas72" class="btn btn-dark">GitHub Profile Link</a>
                </div>
            </div>
        </div>
    )
};