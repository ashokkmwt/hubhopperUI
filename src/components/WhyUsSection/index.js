import React from 'react'
import styles from "./index.module.css"
import cx from 'classnames';
// import PlatformsIMG from "../../assets/images/platforms.png";
import studioImg from "../../assets/images/studio-app.png";
import listenerImg from "../../assets/images/listener.png";
import analyticsImg from "../../assets/images/analytics.png";
import audioImg from "../../assets/images/audio-editor.png";
import podcasterImg from "../../assets/images/podcaster-web.png";
import playerImg from "../../assets/images/player.png";
import ForbesImg from "../../assets/images/forbes.png";
import YOURSTORY from "../../assets/images/story.png";
import fortuntImg from "../../assets/images/fortune.png";



export default function WhyUsSection() {


    const whyusboxes = [
        {
            image: studioImg,
            title: "Create on-the go",
            paragraph: "Listen to and create your podcast from anywhere, at any time, with Hubhopper mobile app."
        },
        {
            image: listenerImg,
            title: "Free listener platform",
            paragraph: "Hubhopper offers thousands of podcasts to its users. Find a podcast for every mood."
        },
        {
            image: analyticsImg,
            title: "Advanced Analytics",
            paragraph: "Keep an eye on your podcast performance. Track your progress based on trends, listens, location and more!"
        },
        {
            image: audioImg,
            title: "Audio Editor",
            paragraph: "Record, trim, combine and add music to your audio files with our free audio editor."
        }, {
            image: podcasterImg,
            title: "Personalized website",
            paragraph: "Create a personalized space for your podcast through the Hubhopper podcast microsite. Let’s promote your podcast to the world."
        },
        {
            image: playerImg,
            title: "Embed Player Plugin",
            paragraph: "A customized player with a number of features that will fit any website perfectly."
        }
    ];

    return (
        <div className={styles.whyUsSection}>
            <div className={styles.whyusTop}>
                <h2>Why us?</h2>
                <p>Hubhopper is the one-stop destination for all needs of a podcaster.</p>
            </div>
            <div className={styles.whyusMiddle}>


                {whyusboxes.map((box, index) => {
                    const { image, title, paragraph } = box
                    return (
                        <div key={index} className={styles.mainBox}>
                            <div className={styles.mainBoxImage}>
                                <img src={image} />
                            </div>
                            <h1>{title}</h1>
                            <p>{paragraph}</p>
                        </div>
                    );
                })}
            </div>

            <div className={styles.middleContainer}>
                <div className={cx(styles.middleBox, styles.box1)}>
                    <img width={120} height={95} src={studioImg} alt="studio image" />
                    <div className={styles.textContainer}>
                        <h1>Hubhopper app</h1>
                        <p>Listen to and create your podcast from anywhere, at any time, with Hubhopper mobile app.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box2)}>
                    <img width={120} height={95} src={listenerImg} alt="listenerImg image" />
                    <div className={styles.textContainer}>
                        <h1>Free listener platform</h1>
                        <p>Hubhopper offers thousands of podcasts to its users. Find a podcast for every mood.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box1)}>
                    <img width={120} height={95} src={analyticsImg} alt="analyticsImg image" />
                    <div className={styles.textContainer}>
                        <h1>Advanced Analytics</h1>
                        <p>Keep an eye on your podcast performance. Track your progress based on trends, listens, location and more!</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box2)}>
                    <img width={120} height={95} src={audioImg} alt="audioImg image" />
                    <div className={styles.textContainer}>
                        <h1>Audio Editor</h1>
                        <p>Record, trim, combine and add music to your audio files with our free audio editor.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box1)}>
                    <img width={120} height={95} src={podcasterImg} alt="podcasterImg image" />
                    <div className={styles.textContainer}>
                        <h1>Personalized website</h1>
                        <p>Create a personalized space for your podcast through the Hubhopper podcast microsite. Let’s promote your podcast to the world.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box2)}>
                    <img width={120} height={95} src={playerImg} alt="playerImg image" />
                    <div className={styles.textContainer}>
                        <h1>Embed Player Plugin</h1>
                        <p>A customized player with a number of features that will fit any website perfectly.</p>
                    </div>
                </div>
            </div>

            <div className={styles.whyusBottom}>
                <h2>As seen on</h2>
                <div className={styles.whyusLogos}>
                    <img className={styles.forbes} src={ForbesImg} alt='ForbesImg' />
                    <img className={styles.yourstory} src={YOURSTORY} alt='yourstory img' />
                    <img className={styles.fortune} src={fortuntImg} alt='fortunt img' />
                </div>
            </div>
        </div>

    )
}
