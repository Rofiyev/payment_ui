import { feedback } from '../util/constants';
import { styles } from '../util/styles';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <div id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className={`absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40`} />

      <div className="w-full flex justify-between items-center lg:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading_2}>Odamar biz haqimiza qanday fikrda</h2>
        <div className='w-full lg:mt-0 mt-6 lg:ml-3'>
          <p className={`${styles.paragraph} text-left flex flex-1`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium ipsam corporis, consectetur delectus iure dolores vero quaerat nemo aperiam architecto nam eum id? Eius delectus deserunt.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full relative z-[1]">
        {feedback.map((feedback, i) => (
          <FeedbackCard key={i} {...feedback} />
        ))}
      </div>

    </div>
  )
}

export default Testimonials;