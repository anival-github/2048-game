import React from 'react';
import styles from './Info.module.css';

const Info = () => (
  <div className={styles.info}>
    Use
    <br />
    to play!
    <img className={styles.arrows} alt="arrows" src="https://images.vexels.com/media/users/3/153199/isolated/preview/c0facb164c02a5815d7efea4eb898a98-keyboard-arrow-keys-stroke-icon-by-vexels.png" />
    Press Esc to start new game.
    <br />
    Get 2048 and keep the field not filled.
  </div>
);

export default Info;
