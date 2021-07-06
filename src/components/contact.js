import React from 'react';

export default function contact() {

    return (

        <div id="contact_info" class="col-md-10 col-sm-12">
            <div nameClass="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div nameClass="card-header">Phone</div>
                <div nameClass="card-body">
                    <p nameClass="card-text">(404) 550-5082</p>
                </div>
            </div>

            <div nameClass="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div nameClass="card-header">email</div>
                <div nameClass="card-body">
                    <p nameClass="card-text">klucas72@hotmail.com</p>
                </div>
            </div>

            <div nameClass="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div nameClass="card-header">LinkedIn Profile</div>
                <div nameClass="card-body">
                    <a href="https://www.linkedin.com/in/kristopher-lucas-1467355/" class="btn btn-dark">LinkedIn
                        profile</a>
                </div>
            </div>

            <div nameClass="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div nameClass="card-header">Resume</div>
                <div nameClass="card-body">
                    <a href="./assets/RESUME.pdf" class="btn btn-dark">Resume
                        Link</a>
                </div>
            </div>
            <div nameClass="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div nameClass="card-header">GitHub Profile</div>
                <div nameclass="card-body">
                    <a href="https://github.com/klucas72" class="btn btn-dark">GitHub Profile Link</a>
                </div>
            </div>
        </div>
    )
};