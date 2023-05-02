import styles from './AboutContent.module.css'
import Image from 'next/image'

export default function AboutContent() {
    return (
        <>
            <div className={styles.content_container}>
                <div className={styles.left_content}>
                    <h1>/about</h1>
                    <p>As a British Columbia Institute of Technology student, I specialize in building professional and functional websites/applications. With a keen eye for design and a strong technical skillset, I am able to bring complex web designs to life and deliver intuitive user experiences.<br></br><br></br>

                        My expertise lies in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and popular front-end frameworks such as <b>Next.js</b>. As technology constantly grows, I am continually learning and expanding my skill set to stay up-to-date and fuel my interest in tech.<br></br><br></br>
                        When I'm not coding I'm following tech trends, or tinkering with personal coding projects.<br></br><br></br>

                        If you're looking for a talented and dedicated front-end developer to help bring your vision to life, I would love to connect and discuss how I can help.</p>
                </div>
                <div className={styles.right_container}>
                    <Image
                        className={styles.profile_img}
                        src={"/Assets/img/profile_img.jpeg"}
                        alt={"profile_img"}
                        height="250"
                        width="250"
                    />
                </div>
            </div>
        </>
    )
}