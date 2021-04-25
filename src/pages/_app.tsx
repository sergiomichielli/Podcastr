import '../styles/global.scss'

import styles from '../styles/app.module.scss';

import { Header } from '../components/Header/Index'
import { PlayerContextProvider } from '../contexts/PlayerContext';
import { DarkPlayerContextProvider } from '../contexts/PlayerContextDarkTheme';
import React from 'react';
import { Player } from '../Player/Index';

function MyApp({ Component, pageProps }) {
  return (
      <DarkPlayerContextProvider>
        <PlayerContextProvider>
          <div className={styles.wrapper}>
            <main>
              <Header />
              <Component {...pageProps} />
            </main>
            <Player />
          </div>
        </PlayerContextProvider>
      </DarkPlayerContextProvider>
  )
}

export default MyApp