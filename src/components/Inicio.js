import React from 'react'
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hello, I'm <strong>Tomás Mogrovejo Acosta </strong>, a FullStack
        developer based in Lima. I offer my{" "}
        <strong>programming</strong> and <strong>development</strong> services for a wide range
        of web projects.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más visibilidad y
        relevancia en internet. <Link to="/contacto">Contact Me</Link>
      </h2>

      <section className="lastest-works">
        <h2 className='heading'>Some of My Projects</h2>
        <p>Here are some of my web development works.</p>

        <div className="works"></div> 
      </section>
    </div>
  );
}
