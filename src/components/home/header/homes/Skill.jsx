import React from 'react'

export const Skill = ({ className }) => {
    const Progress = ({ done, title }) => {
        return (
            <div className="progress">
                <div className="progress-done" style={{ opacity: 1, width: `${done}%` }}>
                    <h4>{title}</h4>
                    <h4>{done}%</h4>
                </div>
            </div>
        )
    }
    const data = [
        {
            title: "Every Day is a New Challenge",
            para: "I am a programmer who skilled at Web Developer, Android Developer.",
            para1: "I also learning about Artificial Intelligence And Hardware.",
        },
    ]
    return (
        <section className={`skill ${className}`}>
            <div className="container">
                <div className="heading">
                    <h3>WHY CHOOSE ME</h3>
                    <h1>Some of my skills</h1>
                </div>
                <div className="content flex">
                    <div className="left topMargin">
                        <Progress done="70" title="HTML" />
                        <Progress done="80" title="CSS" />
                        <Progress done="90" title="JAVASCIPT" />
                        <Progress done="80" title="REACT JS" />
                    </div>
                    <div className="right mtop">
                        {data.map((val) => {
                            return (
                                <>
                                    <h1>{val.title}</h1>
                                    <p>{val.para}</p>
                                    <p>{val.para1}</p>
                                    <button className="primary-btn btn-led">
                                        Contact Me
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
