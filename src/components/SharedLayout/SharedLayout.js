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
          className={({ isActive }) => `${isActive ? css.active : css.NavLink}`}
          to={'/'}
        >
          Home
        </NavLink>
        {isLoggedIn ? (
          <div className={css.isLogin}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? css.activeNavLinkContact : css.NavLinkContact}`
              }
              to={'/contacts'}
            >
              Contacts
            </NavLink>
            <UserMenu />
          </div>
        ) : (
          <div>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? css.activeNavLinkRegister : css.NavLinkRegister}`
              }
              to={'/register'}
            >
              Register
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? css.active : css.NavLink}`
              }
              to={'/login'}
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
