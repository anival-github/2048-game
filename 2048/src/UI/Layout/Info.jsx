import React from 'react';
import styles from './Info.module.css';

const Info = () => (
  <div className={styles.info}>
    Use
    <img className={styles.arrows} alt="arrows" src="https://images.vexels.com/media/users/3/153199/isolated/preview/c0facb164c02a5815d7efea4eb898a98-keyboard-arrow-keys-stroke-icon-by-vexels.png" />
    to play! Press Esc to start new game.
  </div>
);

export default Info;
