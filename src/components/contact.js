import React from 'react';

export default function contact() {

    return (

        <div id="contact_info" class="col-md-10 col-sm-12">
            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">Phone</div>
                <div class="card-body">
                    <p class="card-text">(404) 550-5082</p>
                </div>
            </div>

            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">email</div>
                <div class="card-body">
                    <p class="card-text">klucas72@hotmail.com</p>
                </div>
            </div>

            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">LinkedIn Profile</div>
                <div class="card-body">
                    <a href="https://www.linkedin.com/in/kristopher-lucas-1467355/" class="btn btn-dark">LinkedIn
                        profile</a>
                </div>
            </div>

            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">Resume</div>
                <div class="card-body">
                    <a href="./assets/RESUME.pdf" class="btn btn-dark">Resume
                        Link</a>
                </div>
            </div>
            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
                <div class="card-header">GitHub Profile</div>
                <div class="card-body">
                    <a href="https://github.com/klucas72" class="btn btn-dark">GitHub Profile Link</a>
                </div>
            </div>
        </div>
    )
};