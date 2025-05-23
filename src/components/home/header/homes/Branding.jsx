import React from 'react';
import logo from '../../../../assets/Luen.jpg';
import Hero from './Hero';

export const Branding = ({ className }) => {
  const data = [
    {
      id: "01",
      heading: "Digital Branding",
      desc: "I always want to create quality products.",
    },
    {
      id: "02",
      heading: "Team Management",
      desc: "Working with team is also an important thing in programming.",
    },
    {
      id: "03",
      heading: "Creative Mind",
      desc: "Creativity will be the core to develop programs.",
    },
  ];

  return (
    <>
      <section className={`branding ${className}`} style={{ marginTop: "100px" }}>
        <div className='container grid'>
          {data.map((value) => (
            <div key={value.id} className='box flex'>
              <div className="text">
                <h1>{value.id}</h1>
              </div>
              <div className="para">
                <h2>{value.heading}</h2>
                <p>{value.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
      <img width={'100%'} src={logo} alt="Logo" />
      <iframe src="https://dluongta.github.io/3d-model.html" title="3D Model"></iframe>
      <iframe src="https://dluongta.github.io/fireworks.html" title="Fireworks Lighting"></iframe>
      <iframe src="https://vietnam-map-platform.vercel.app/" title="Vietnam Map Platform"></iframe>
      <Hero />
    </>
  );
};
