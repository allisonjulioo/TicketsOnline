import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';
import logoLight from '@/assets/logo-light.png';
import favicon from '@/assets/movie-tickets.png';
import './styles.scss';

export default () => {
  const [active, setActive] = useState('Início');
  const [compress, setCompress] = useState(true);
  const menu = [
    { name: 'Início', icon: 'FaHome', url: '/' },
    { name: 'Tendências', icon: 'FaBolt', url: '/' },
    { name: 'Em breve', icon: 'FaClock', url: '/' },
    { name: 'Favoritos', icon: 'FaHeart', url: '/' },
    { name: 'Assistir depois', icon: 'FaBell', url: '/' },
    { name: 'Admin', icon: 'FaCalculator', url: '/admin/dashboard' },
  ];
  return (
    <div id='side-menu' className='compress'>
      <div className='branding'>
        <img src={logoLight} className='dt' alt='Tickets' />
        <img src={favicon} className='mb' alt='Tickets' />
      </div>
      <ul className='menu'>
        {menu.map((menu, index) => {
          const icon = React.createElement(FontAwesome[menu.icon]);
          return (
            <Link
              to={menu.url}
              key={index}
              onClick={() => {
                setActive(menu.name);
                setCompress(!compress);
              }}
              className={active === menu.name ? 'active' : ''}
            >
              {icon} <span>{menu.name}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
