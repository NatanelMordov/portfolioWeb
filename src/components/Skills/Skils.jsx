import React from 'react'
import styles from './SkilsStyles.module.css'
import { BE, FE, lan } from '../../data'
import checkLigth from '../../assets/checkLigth.svg'
import checkDark from '../../assets/checkDark.svg'
import { useTheme } from '../../ThemeContext';
import SkillList from '../SkillList'

const Skils = () => {

    const { theme } = useTheme();
    const checkMarkIcon = theme === 'light' ? checkLigth : checkDark;

  return (
    <section id='skills' className={styles.container}>
        <h2>Explore My</h2>  
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
        {FE.map((item,index)=>(
            <div key={index}>
             <SkillList src={checkMarkIcon} skill={item.title} />
            </div>      
        ))} 
        </div>
        <hr />
        <div className={styles.skillList}>
        {BE.map((item,index)=>(
            <div key={index} className={styles.skillList}>
              <SkillList src={checkMarkIcon} skill={item.title} />
            </div>      
        ))} 
        </div>
        <hr />
        <div className={styles.skillList}>
        {lan.map((item,index)=>(
            <div key={index} className={styles.skillList}>
             <SkillList src={checkMarkIcon} skill={item.title} />
            </div>      
        ))} 
        </div>
        <hr />
    </section>
  )
}

export default Skils