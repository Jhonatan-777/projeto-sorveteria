import React from 'react';
import './style.css';

export default function Rodape()
{
  return (
    <footer>
      <div className="limitar-secao container-footer">
        <img src="../assets/logo.png" alt='logo gelateria' />

        <div className="container-info">
          <h3>Endereço</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>

        <div className="container-info">
          <h3>Contato</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>

        <div className="container-info">
          <h3>Horários</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>

      <div className="container-footer-direitos">
        <p>Gelateria. Orgulhosamente desenvolvido por <a href="https://github.com/Jhonatan-777" target="_blank" rel="noreferrer">Jhonatan.</a></p>
      </div>
    </footer>
  )
}