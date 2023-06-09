import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

//Components
import HomeContent from '@/components/HomeContent'
import SideNav from '@/components/SideNav'
import AboutContent from '@/components/AboutContent'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jimmy Lam's Website</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent/>
      <SideNav/>
      <AboutContent/>
    </>
  )
}
