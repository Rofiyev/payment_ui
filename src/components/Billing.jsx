import { layout, styles } from "../util/styles";
import bill from '../image/bill.png';
import google from '../image/google.svg';
import apple from '../image/apple.svg';

const Billing = () => {
  return (
    <div id="features" className={`${layout.sectionReverse}`}>
      <div className={layout.sectionImageReverse}>
        <img src={bill} alt="Bill" className={`w-[100%] h-[100%] relative z-[5]`} />

        <div className="absolute z-[3] -left-1/2 w-[50%] h-[55%] top-0 rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 w-[50%] h-[50%] bottom-0 rounded-full pink__gradient"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading_2}>Hisob-kitob va o'tkazmalarni <br className="sm:block hidden" /> osongina boshqaring</h2>
        <p className={`${styles.paragraph}`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, obcaecati sed vel totam voluptatem in quibusdam officia nulla sapiente quam! Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus!</p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={google} alt="Google Iocn" className="w-[150px] h-[41px] object-cover mr-5 cursor-pointer" />
          <img src={apple} alt="Apple Iocn" className="w-[150px] h-[41px] object-cover mr-5 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default Billing;