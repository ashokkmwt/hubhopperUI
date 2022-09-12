import React from 'react'
import styles from "./index.module.css"
import Platforms from "../../assets/images/platforms.png";
import iconbar from "../../assets/images/iconbarimage.png";
import _count from "../../assets/images/count.png";
import _girl from "../../assets/images/girl.png";

export default function FirstSection() {
    return (
        <>
            <div className={styles.firstSection}>
                <div className={styles.fsTop}>
                    <h1>You create, we do the rest.</h1>
                    <p>We make podcast creation fun and effortless for our creators.</p>
                </div>
                <div className={styles.howToUse}>
                    <h2>Are you a creator?</h2>
                    <p>We make podcast creation fun and effortless for our creators.</p>
                </div>
                <div className={styles.fsMiddle}>
                    <div className={styles.mainLeft}>
                        <img src={Platforms} alt="platforms" />
                    </div>
                    <div className={styles.mainRight}>
                        <div className={styles.mainRight1}>
                            <h3 className={styles.howToUseHead}>Create for Free</h3>
                            <br />
                            <p className={styles.howToUseHead}>We power our creators with free podcast hosting on Hubhopper Studio.</p>
                        </div>
                        <div className={styles.mainRight1}>
                            <h3 className={styles.howToUseHead}>Free Distribution to a Global Audience</h3><br />
                            <div className={styles.iconBar}>
                                <img width={220} src={iconbar} alt='iconbar' />
                                <img width={25} src={_count} alt='count' />
                            </div>
                            <p className={styles.howToUseHead}>Get your podcast on Indian & global audio platforms like Gaana, WynkMusic, Spotify, Google Podcasts, the list goes on!</p>
                        </div>
                        <div className={styles.mainRight1}>
                            <h3 className={styles.howToUseHead}>Listen to podcasts for Free</h3><br />
                            <p className={styles.howToUseHead}>Discover English, Hindi & Regional language podcasts. Enjoy a premium listening experience.</p>
                        </div>
                        <div className={styles.mainRight2}>Learn More > </div>
                    </div>
                    <div className={styles.howToUseImage}>
                        <img width={90} height={150} src={_girl} alt='girl' />
                    </div>
                </div>
            </div>


        </>
    )
}
