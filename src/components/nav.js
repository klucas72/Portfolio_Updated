import React from 'react';

export default function Nav() {

    return (

        <nav nameClass="navbar navbar-expand-lg">
            <div nameClass="container-fluid">
                <a nameClass="navbar-brand" href="#">Explore</a>
                <button nameClass="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span nameClass="navbar-toggler-icon"></span>
                </button>
                <div nameClass="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul nameClass="navbar-nav me-auto mb-2 mb-lg-0">
                        <li nameClass="nav-item">
                            <a nameClass="nav-link active" aria-current="page" href="#about_me">About Me</a>
                        </li>
                        <li nameClass="nav-item">
                            <a nameClass="nav-link" href="#work">Work</a>
                        </li>
                        <li nameClass="nav-item">
                            <a nameClass="nav-link" href="#contact_me">Contact Me</a>
                        </li>
                    </ul>
                    <form nameClass="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-light" type="submit">Search</button>
                        </input>
                    </form>
                </div>
            </div>
        </nav>
    )
};
