import React from 'react'
import { styles } from '../util/styles'
import Button from './Button'

const CTA = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} md:flex-row flex-col rounded-[20px] gap-10 box-shadow bg-dark-gradeint`}>
      <div className={`flex flex-1 flex-col`}>
        <h2 className={`${styles.heading_2}`}>Xizmatlarni sinab ko'rish</h2>
        <p className={`${styles.paragraph} max-w-[550px]`}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-0`}>
      <Button styles={''} text={'Boshlash'} />
      </div>
    </div>
  )
}

export default CTA