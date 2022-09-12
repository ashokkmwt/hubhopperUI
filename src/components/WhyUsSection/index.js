import React from 'react'
import styles from "./index.module.css"
import cx from 'classnames';
import _studio from "../../assets/images/studio-app.png";
import _listener from "../../assets/images/listener.png";
import _analytics from "../../assets/images/analytics.png";
import _audio from "../../assets/images/audio-editor.png";
import _podcaster from "../../assets/images/podcaster-web.png";
import _player from "../../assets/images/player.png";
import _Forbes from "../../assets/images/forbes.png";
import YOURSTORY from "../../assets/images/story.png";
import _fortunt from "../../assets/images/fortune.png";



export default function WhyUsSection() {


    const whyusboxes = [
        {
            image: _studio,
            title: "Create on-the go",
            paragraph: "Listen to and create your podcast from anywhere, at any time, with Hubhopper mobile app."
        },
        {
            image: _listener,
            title: "Free listener platform",
            paragraph: "Hubhopper offers thousands of podcasts to its users. Find a podcast for every mood."
        },
        {
            image: _analytics,
            title: "Advanced Analytics",
            paragraph: "Keep an eye on your podcast performance. Track your progress based on trends, listens, location and more!"
        },
        {
            image: _audio,
            title: "Audio Editor",
            paragraph: "Record, trim, combine and add music to your audio files with our free audio editor."
        }, {
            image: _podcaster,
            title: "Personalized website",
            paragraph: "Create a personalized space for your podcast through the Hubhopper podcast microsite. Let’s promote your podcast to the world."
        },
        {
            image: _player,
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
                    const { title, paragraph } = box
                    return (
                        <div key={index} className={styles.mainBox}>
                            <div className={styles.mainBoxImage}>
                                <img src={box.image} alt="" />
                            </div>
                            <h1>{title}</h1>
                            <p>{paragraph}</p>
                        </div>
                    );
                })}
            </div>

            <div className={styles.middleContainer}>
                <div className={cx(styles.middleBox, styles.box1)}>
                    <img width={120} height={95} src={_studio} alt="studio" />
                    <div className={styles.textContainer}>
                        <h1>Hubhopper app</h1>
                        <p>Listen to and create your podcast from anywhere, at any time, with Hubhopper mobile app.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box2)}>
                    <img width={120} height={95} src={_listener} alt="listener" />
                    <div className={styles.textContainer}>
                        <h1>Free listener platform</h1>
                        <p>Hubhopper offers thousands of podcasts to its users. Find a podcast for every mood.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box1)}>
                    <img width={120} height={95} src={_analytics} alt="analytics" />
                    <div className={styles.textContainer}>
                        <h1>Advanced Analytics</h1>
                        <p>Keep an eye on your podcast performance. Track your progress based on trends, listens, location and more!</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box2)}>
                    <img width={120} height={95} src={_audio} alt="audio" />
                    <div className={styles.textContainer}>
                        <h1>Audio Editor</h1>
                        <p>Record, trim, combine and add music to your audio files with our free audio editor.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box1)}>
                    <img width={120} height={95} src={_podcaster} alt="podcaster" />
                    <div className={styles.textContainer}>
                        <h1>Personalized website</h1>
                        <p>Create a personalized space for your podcast through the Hubhopper podcast microsite. Let’s promote your podcast to the world.</p>
                    </div>
                </div>
                <div className={cx(styles.middleBox, styles.box2)}>
                    <img width={120} height={95} src={_player} alt="player" />
                    <div className={styles.textContainer}>
                        <h1>Embed Player Plugin</h1>
                        <p>A customized player with a number of features that will fit any website perfectly.</p>
                    </div>
                </div>
            </div>

            <div className={styles.whyusBottom}>
                <h2>As seen on</h2>
                <div className={styles.whyusLogos}>
                    <img className={styles.forbes} src={_Forbes} alt='Forbes' />
                    <img className={styles.yourstory} src={YOURSTORY} alt='yourstory' />
                    <img className={styles.fortune} src={_fortunt} alt='fortunt' />
                </div>
            </div>
        </div>

    )
}
