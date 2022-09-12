import React from 'react'
import styles from "./index.module.css"
import cx from 'classnames';
import GoogleImg from "../../assets/icons/googlelogo.svg";
import paytmLogo from "../../assets/icons/paytm.png";
import spotifyLogo from "../../assets/icons/spotify.png";
import xiaomiLogo from "../../assets/icons/xiaomi.png";
import hungamaLogo from "../../assets/icons/hungama.png";
import musicLogo from "../../assets/icons/music.png";
import PhonePeLogo from "../../assets/icons/phonepe.png";
import WYNKMUSIClogo from "../../assets/icons/wynk.png";
import gaanaLogo from "../../assets/icons/gaana-logo.png";


export default function HeroSection() {
    return (
        <div className={styles.heroSection}>
            <div className={styles.logInSection}>
                <div className={styles.hsLeft}>
                    <p style={{ fontSize: 35, fontWeight: 600 }} >Everything <span style={{ color: "orange" }}>podcasting.</span></p>
                    <p>Discover & create new podcasts</p>
                    <p style={{ fontWeight: 400 }}>With Hubhopper Studio, create your podcast for free or discover a new podcast to listen to. Distribute to the top audio platforms and become a part of India’s largest podcasting community.</p>
                </div>
                <div className={styles.hsRight}>
                    <div className={styles.hsRightContainer}>
                        <h3 className={styles.text}>Sign up for free</h3>
                        <h5 className={styles.text}>Already have an account?  <span style={{ color: "#fe8337", textDecoration: "underline" }}>Click here to login</span></h5>
                        <input className={cx(styles.text, styles.textInput)} placeholder='Full Name' />
                        <input className={cx(styles.text, styles.textInput)} placeholder='E-mail Address' />
                        <input className={cx(styles.text, styles.textInput)} placeholder='Password(min 8 characters)' />
                        <input className={cx(styles.text, styles.textInput)} placeholder='Confirm Password' />
                        <h4 className={cx(styles.text, styles.textBg)} style={{ backgroundColor: "#fe8337" }}>Start My Podcast</h4>
                        <h5 className={styles.text}>or</h5>
                        <span className={cx(styles.textBg, styles.textBg1)}>
                            <img width={18} height={18} src={GoogleImg} alt="googlelogo" />
                            <span>Continue with google</span>
                        </span>
                        <p className={styles.text} style={{ textAlign: "center" }} >By signing up, you agree to the Terms & Conditions  and the  Privacy Policy.</p>
                    </div>
                </div>
            </div>
            <div className={styles.scrollBar}>
                <img className={styles.scrollLogo} src={paytmLogo} alt="paytm img" />
                <img className={styles.scrollLogo} src={spotifyLogo} alt="spotify img" />
                <img className={styles.scrollLogo} src={xiaomiLogo} alt="xiaomi img" />
                <img className={styles.scrollLogo} src={hungamaLogo} alt="hungama img" />
                <img className={styles.scrollLogo} src={musicLogo} alt="music img" />
                <img className={styles.scrollLogo} src={PhonePeLogo} alt="PhonePe img" />
                <img className={styles.scrollLogo} src={WYNKMUSIClogo} alt="WYNKMUSIC img" />
                <img className={styles.scrollLogo} src={gaanaLogo} alt="gaana img" />
                <img className={styles.scrollLogo} src={paytmLogo} alt="paytm img" />
            </div>
        </div>
    )
}
