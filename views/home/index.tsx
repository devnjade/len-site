import Layout from "layout";
import React from "react";
import styles from './index.module.scss';
import Image from "next/image";

const HomeView: React.FC = () => {
  return (
    <Layout header>
      <section className={styles.intro}>
        <Image 
          layout="fill"
          src="https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif"
          alt="Intro"
          objectFit="cover"
          style={{
            opacity: .1,
          }}
        />
        <p>The <br /> Web3 <br /> Metaverse</p>
      </section>
      <section className={styles.info}>
        <p className={styles.text}>be times for <br /> the new world <br /> start here!</p>
        <p className={`${styles.text} ${styles['text--second']}`}>earn, play, buy, sell, build, all the things you couldnt do in your physical form</p>
        <p className={`${styles.text} ${styles['text--second']}`}>earn & add other ERC20 tokens available on the ethereum / len chain</p>
      </section>
      <section className={styles.contact}>
        <div className={styles.links}>
          <button><span>mail us</span></button>
          <button><span>collab</span></button>
          <button><span>dev docs</span></button>
          <button><span>twitter</span></button>
          <button><span>insta</span></button>
          <button><span>len chain</span></button>
        </div>
        <p className={styles.copyright}>2022. Len Technologies</p>
      </section>
    </Layout>
  )
}

export default HomeView;