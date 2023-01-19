// import { useNavigate } from 'react-router-dom';

import MenuItem from './MenuItem';
import { MenuList } from './MenuList';
import './Menu.css';

function Menu() {
  // const navigate = useNavigate();

  const handleOpenMenu = () => {
    document.getElementById('menu-layer').classList.add('show');
    document.querySelector('#menu-layer .menu').classList.add('active');
  };
  
  const handleCloseMenu = (e) => {
    if (e.target === e.currentTarget) {
      document.getElementById('menu-layer').classList.remove('show');
      document.querySelector('#menu-layer .menu').classList.remove('active');
    }
  };

  // const handlePressLogin = () => {
  //   navigate('/login');
  //   document.getElementById('menu-layer').classList.remove('show');
  // };

  // const handlePressSignUp = () => {
  //   navigate('/signup');
  //   document.getElementById('menu-layer').classList.remove('show');
  // };

  return(
    <div className='menu-box'>
      <button className='button-option' onClick={handleOpenMenu}>
        ☰
      </button>
      <div 
        id='menu-layer' 
        className='menu-layer'
        onClick={handleCloseMenu}
      >
        <div className='menu'>
          {/* <MenuItem name='Hệ thống báo cháy' /> */}
          {/* <div className='login-box'>
            <button 
              className='log-in-btn'
              onClick={handlePressLogin}
            >
              Đăng nhập
            </button>
            <button 
              className='sign-up-btn'
              onClick={handlePressSignUp}
            >
              Đăng ký
            </button>
          </div> */}
          <h2 style={{margin: '20px 0 0 20px', fontWeight: '700', color: 'rgb(219, 37, 119)'}}>
            Hệ thống báo cháy
          </h2>
          {MenuList.map((e, index) =>
            <MenuItem key={index} name={e.name} item={e.item} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;