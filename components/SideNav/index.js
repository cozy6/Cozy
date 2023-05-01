import styles from './SideNav.module.css'
import Link from 'next/link'

export default function SideNav(){
    return(
        <>
        <div className={styles.side_nav}>
            <div className={styles.link_container}>
                <ul>
                    <li className={styles.nav_link}><Link href="#home">/home</Link></li>
                    <li className={styles.nav_link}><Link href="#about">/about</Link></li>
                    <li className={styles.nav_link}><Link href="#works">/works</Link></li>
                    <li className={styles.nav_link}><Link href="#experience">/experience</Link></li>
                </ul>
                <ul className={styles.social_icons}>
                    <li><i class="ri-mail-line ri-3x"></i></li>
                    <li><i class="ri-github-fill ri-3x"></i></li>
                    <li><i class="ri-linkedin-box-fill ri-3x"></i></li>
                </ul>
            </div>
        </div>
        </>
    )
}