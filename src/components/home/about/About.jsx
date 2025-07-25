import React from 'react'
import contactImage from '../../../assets/contact-img.png'


export const About = ({ className }) => {
    const data = [
        {
            title: "Who I Am And What I Do",
            desc: "I'm a skilled programmer, fascinated to science and technology.",
            cover: contactImage,
        },
    ]
    return (
        <section className={`about topMargin ${className}`}>
            <div className="container flex">
                {data.map((value) => {
                    return (
                        <>
                            <div className="lef mtop">
                                <div className="heading">
                                    <h3>About Me</h3>
                                    <h1>{value.title}</h1>
                                </div>
                                <p>{value.desc}</p>
                                <button className="primary-btn btn-led">
                                    Learn About Me
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                            <div className="right">
                                <div className="img">
                                    <img src={value.cover} alt='' width='500px' height='400px' />
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
    )
}
