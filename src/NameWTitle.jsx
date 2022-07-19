import React from "react"

export default function NameWTitle () {
    return (
        <div className="pb-1 nameWTitle card-body d-flex flex-column align-items-center">
            <h1 className="fs-1">Luis Jaar</h1>
            <span className="fs-4 text-warning">Jr Full Stack Developer</span>
            <a target="_blank" href="https://github.com/LuisEJaar">github.com/LuisEJaar</a>
            <div className="pt-3">
                <a className="btn btn-secondary me-2" href="mailto:www.luisjaarcoding@gmail.com" target="_blank" role="button"><i className="bi bi-envelope"></i> Email</a>
                <a className="btn btn-primary ms-2" href="https://www.linkedin.com/in/luisjaarcoding/" target="_blank" role="button"><i className="bi bi-linkedin"></i> LinkedIn</a>
            </div>
        </div>
    )
}