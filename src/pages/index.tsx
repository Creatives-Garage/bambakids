import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BambaKidsToggler from '../features/Home/BambaKidsToggler'
import Hero from '../features/Home/Hero'
import Button from '../shared/Button'
import Nav from '../shared/Nav'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Nav/>
      <Hero/>
      <BambaKidsToggler/>
    </div>
  )
}

export default Home
