import React, {useState, useEffect} from 'react';
import { GetStaticProps, GetStaticPaths  } from 'next';
import {type tazamaDataType} from '../../shared/Data/tazamaData';
import { useRouter } from 'next/router';
import path from 'path';
import fs from 'fs/promises';

import type { NextPage } from 'next'
import styles from './tazama.module.scss';
import TabComponent from '../../features/Tazama/TabComponent/';
import Nav from '../../shared/Nav';
import Footer from '../../../public/icons/footer.svg';
import {tazamaData} from '../../shared/Data/tazamaData';

const Videos: NextPage = ({data}: any) => {    
    return (
      <div className={styles.container}>
        <Nav/>
        <TabComponent videoData={data?.videos}/>
        <div className={styles.footer}>
          <Footer />
        </div>                
      </div>
    )
}

async function getData() {
  const filePath = path.join(process.cwd(), 'src', 'shared', 'Data', 'tazamaData.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export async function getServerSideProps() {
  const res = await getData();
  const data = await res
  return { props: { data } }
}
  
export default Videos;
