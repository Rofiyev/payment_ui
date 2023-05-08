import React from 'react'
import { styles } from '../util/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import robot from '../image/robot.png';
import Button from './Button';

const Home = () => {
  return (
    <section id='home' className={`flex lg:flex-row flex-col ${styles.paddingY}`}>
      {/* Info */}
      <div className={`flex-1 md:order-1 order-2 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center gap-3 py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient `}>
          <FontAwesomeIcon icon={faDollar} style={{ color: '#33bbcf', fontSize: '1.3rem' }} />
          <p className={`${styles.paragraph} capitalize`}><span className='text-white'>20%</span> chegirma <span className='text-white'>1 oylik</span> hisob uchun</p>
        </div>
        <div className={`w-full`}>
          <h1 className={`${styles.heading_1} capitalize`}>Yangi avlod <br /> <span className='text-gradient'>to'lov usuli</span></h1>
        </div>
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores aperiam aspernatur rem aliquam at neque ipsam culpa blanditiis quisquam porro?
        </p>
        <Button styles={'mt-5'} text={'Boshlash'} />
      </div>

      {/* Image */}
      <div className={`flex-1 md:order-2 order-1 ${styles.flexStart} md:my-0 my-10 relative`}>
        <img src={robot} alt="Robot" className='w-[500px] h-[100%] z-1' />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
      </div>
    </section>
  )
}

export default Home