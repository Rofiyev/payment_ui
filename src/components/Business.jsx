import React from 'react'
import { layout, styles } from '../util/styles'
import Button from './Button'
import { features } from '../util/constants'
import FeaturesCard from './FeaturesCard'

const Business = () => {
  return (
    <div id='features' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading_2}`}>Biznes rivojlantiring, <br className="sm:block hidden" /> Pulni hal qilamiz.</h2>
        <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas illum voluptatibus voluptatum aliquam, et voluptate optio laborum enim temporibus ad dolores molestiae delectus nesciunt, rem debitis fugit doloremque repudiandae aut.
        </p>
        <Button styles={'mt-5'} text={'Ishni boshlash'} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((features, i) => (
          <FeaturesCard key={i} {...features} idx={i} />
        ))}
      </div>
    </div>
  )
}

export default Business