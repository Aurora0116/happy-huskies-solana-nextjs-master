import Head from 'next/head'
import type { NextPage } from 'next';
import HeroBanner from '../components/HeroBanner';
import AboutUs from '../components/AboutUs';
import SledTrail from '../components/SledTrail';
import ViewHusky from '../components/ViewHusky';
import SledRace from '../components/SledRace';
import { HuskyToken } from '../components/HuskyToken';
import { MiniGames } from '../components/MiniGames';
import { StayTuned } from '../components/StayTuned';
import MintForm from '../components/MintForm';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Husky</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <HeroBanner />
      <AboutUs />
      <SledTrail />
      <ViewHusky />
      {/* <HuskyToken /> */}
      {/* <MiniGames /> */}
      {/* <SledRace /> */}
      {/* <StayTuned /> */}
      <MintForm />
    </>
  )
}

export default Home
