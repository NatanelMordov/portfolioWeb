import React from 'react'
import styles from './HeroStyles.module.css'
import hero from '../../assets/Hero.jpg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import github from '../../assets/github.svg'
import githubLight from '../../assets/ligth-github.svg'
import linkdinLight from '../../assets/ligth-linkdin.svg'
import linkdin from '../../assets/linkdin.svg'
import cv from '../../assets/NMcv.pdf'
import { useTheme } from '../../ThemeContext'

function Hero() {

    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const gitIcon = theme === 'light' ? github : githubLight;
    const linIcon = theme === 'light' ? linkdin : linkdinLight;

  return (
    <section id='hero' className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
             className={styles.hero} 
             src={hero} 
             alt='Profile img' />
            <img 
             className={styles.colorMode}
             src={themeIcon}
             onClick={toggleTheme}/>
        </div>
        <div className={styles.info}>
            <h1>Natanel Mordov</h1>
            <h2>Full-Stack Developer</h2>
            <span>
                <a href='https://github.com/NatanelMordov' target='_blank' ><img src={gitIcon} /></a>
                <a href='https://www.linkedin.com/in/natanel-mordov-171a081b5/' target='_blank' ><img src={linIcon} /></a>
            </span>
            <p className={styles.description}>
                Junior developer that seeking technology industry to prove my ability, develop and learn, and gain professional experience.
            </p >
            <a href={cv} download>
                <button className='hover'>Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero