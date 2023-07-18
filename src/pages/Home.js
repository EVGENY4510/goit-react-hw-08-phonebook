import React from 'react';
import css from './home.module.css';

export default function Home() {
  return (
    <div className={css.homeWrapper}>
      <p className={css.homeTitle}>Welcome to your online phonebook!</p>
    </div>
  );
}
