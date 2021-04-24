import '../styles/global.scss';

import { Header } from '../components/Header/Index'
import { Player } from '../Player/Index';

import styles from '../styles/app.module.scss';
import React from 'react';
import { PlayerContextProvider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
    return (
      <PlayerContextProvider>
    <div className={styles.wrapper}>
    <main>
      <Header />
      <Component {...pageProps} />
    </main>
    <Player />
    </div>
    </PlayerContextProvider>
  )
}

export default MyApp