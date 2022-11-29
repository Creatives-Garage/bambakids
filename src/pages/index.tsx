import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AppDownloadSection from '../features/Home/AppDownloadSection'
import BambaKidsToggler from '../features/Home/BambaKidsToggler'
import Footer from '../features/Home/Footer'
import Hero from '../features/Home/Hero'
import Button from '../shared/Button'
import Nav from '../shared/Nav'
import styles from '../styles/Home.module.css'
import path from 'path';
import fs from 'fs/promises';

const Home: NextPage = ({videos}: any) => {
  const payload = videos?.videos;
  return (
    <div className={styles.container}>
      <Nav payload={payload}/>
      <Hero/>
      <BambaKidsToggler/>
      <AppDownloadSection />
      <Footer />
    </div>
  )
}

export default Home

async function getData() {
  const filePath = path.join(process.cwd(), 'src', 'shared', 'Data', 'tazamaData.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData.toString());

  return data;
}

export async function getServerSideProps(context: any) {
  const payload = await getData();
  return {
    props: {
      videos: payload,
    },
  };
}
