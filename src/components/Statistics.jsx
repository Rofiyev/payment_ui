import React from 'react'
import { styles } from '../util/styles'
import { statistics } from '../util/constants'

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-3 pb-10`}>
      {statistics.map(({ id, title, value }) => (
        <div key={id} className={`flex-1 flex justify-start items-center flex-col`}>
          <h4 className={`font-montserrat font-semibold xs:text-[40px] text-[30px] text-white`}>{value}</h4>
          <p className={`font-montserrat font-normal xs:text-[20px] text-[16px] text-gradient uppercase ml-3 text`}>{title}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistics