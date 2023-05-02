import styles from './HomeContent.module.css'
import Image from 'next/image'

//dependencies
import 'remixicon/fonts/remixicon.css'

export default function HomeContent (){
    return(
        <>
        <div className={styles.profile_section}>
            {/* <Image
            className={styles.profile_img}
            src={"/Assets/img/profile_img.jpeg"}
            alt={"profile_img"}
            height="280"
            width="280"
            /> */}
        <div className={styles.profile_description}>  
            <h1 className={styles.typed_out}>Welcome, to my website!</h1>
            <p className={styles.profile_text}>I'm a Front End Developer from Ontario, Canada. Utlizing software such as Figma and XD I am able to prototype modern webpages/applications and build them using Next.js as well as HTML & CSS.</p>  
        </div>
        </div>
        <button className={styles.home_button}><i class="ri-mail-line"></i>Get in touch!</button>
        </>
    )
}