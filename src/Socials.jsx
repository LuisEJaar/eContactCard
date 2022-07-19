import React from "react"

export default function Socials () {
    return (
        <div className="pt-1 socials card-body">
            <div className="socials fs-1 d-flex justify-content-between px-5">
                <a aria-label="twitterIcon" href="https://twitter.com/LuisEJaar" target="_blank"><i className="bi bi-twitter "></i></a>
                <a aria-label="instagramIcon" href="https://www.instagram.com/the_boodler/?hl=en" target="_blank"><i className="bi bi-instagram"></i></a>
                <a aria-label="githubIcon" href="https://github.com/LuisEJaar" target="_blank"><i className="bi bi-github"></i></a>
            </div>
        </div>
    )
}