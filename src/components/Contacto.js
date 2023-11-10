import React from 'react'

export const Contacto = () => {
  return (
    <div className="page">
      <h1 className="heading">Contact</h1>

      <form
        className="contact"
        action="mailto:tomas.mogrovejo.acosta@gmail.com"
      >
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="LastName" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Reason for Contact" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
