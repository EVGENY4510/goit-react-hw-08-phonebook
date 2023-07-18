import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import UserMenu from 'components/UserMenu/UserMenu';
import css from './layout.module.css';

export default function SharedLayout() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <div className={css.nav}>
        <NavLink
          className={css.NavLink}
          to={'/'}
          style={({ isActive }) => ({ color: isActive ? 'aqua' : 'black' })}
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <div className={css.isLogin}>
            <NavLink
              className={css.NavLinkContact}
              to={'/contacts'}
              style={({ isActive }) => ({ color: isActive ? 'aqua' : 'black' })}
            >
              Contacts
            </NavLink>
            <UserMenu />
          </div>
        ) : (
          <div>
            <NavLink
              className={css.NavLinkRegister}
              to={'/register'}
              style={({ isActive }) => ({ color: isActive ? 'aqua' : 'black' })}
            >
              Register
            </NavLink>
            <NavLink
              className={css.NavLink}
              to={'/login'}
              style={({ isActive }) => ({ color: isActive ? 'aqua' : 'black' })}
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}
