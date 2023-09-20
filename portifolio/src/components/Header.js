import React from 'react';

import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className='py-8'>

    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href="#">
          <img src={Logo} alt="Logo" />
        </a>
        <a 
        target='_blank'
        href='https://api.whatsapp.com/send?phone=5511998252377&text=Ol%C3%A1%2C%20vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es'
        className='btn btn-sm flex items-center justify-center'>Trabalhe comigo</a>
      </div>
    </div>
  </header>;
};

export default Header;
