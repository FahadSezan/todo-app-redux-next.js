import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppContent from './components/AppContent';
import AppHeader from './components/AppHeader';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

import backImg from './images/back.jpg';
// const backImg = new URL('../public/images/banner.png', import.meta.url);

function App() {
  return (
    <>
      <div className="container py-5">
        {/* <PageTitle /> */}
        <div className="row">
          <div className="col-lg-6 pt-5">
            <img className="img-fluid mt-5 pt-5" src={backImg} alt="Backimg" />
          </div>
          <div className="col-lg-6">
            <PageTitle className="fs-1 text-center fw-bold text-muted">
              Todo List
            </PageTitle>
            <div className={styles.app__wrapper}>
              <AppHeader />
              <AppContent />
            </div>
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
