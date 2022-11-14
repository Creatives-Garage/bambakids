import React, {useState, useEffect} from 'react';
import type { NextPage } from 'next'
import styles from './tazama.module.scss';
import TabComponent from '../../features/Tazama/TabComponent/TabComponent';
import Nav from '../../shared/Nav';
import Footer from '../../../public/icons/footer.svg';
import {tazamaData} from '../../shared/Data/tazamaData';

const Home: NextPage = () => {    
    return (
      <div className={styles.container}>
        <Nav/>
        <TabComponent videoData={tazamaData}/>
        <div className={styles.footer}>
          <Footer />
        </div>                
      </div>
    )
  }
  
  export default Home