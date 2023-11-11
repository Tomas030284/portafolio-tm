import React from 'react'
import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Inicio = () => {
  return (
    <div className="home">
      <h1>
        Hello, I'm <strong>Tomás Mogrovejo Acosta </strong>, a FullStack
        developer based in Lima. I offer my <strong>programming</strong> and{" "}
        <strong>development</strong> services for a wide range of web projects.
      </h1>

      <h2 className='title'>
        I can help you create your website or web application, increasing
        visibility and relevance on the internet.{" "}
        <Link to="/contacto">Contact Me</Link>
      </h2>

      <section className="lastest-works">
        <h2 className="heading">Some of My Projects</h2>
        <p>Here are some of my web development works.</p>

        <ListadoTrabajos limite="3"/>


      </section>
    </div>
  );
}
