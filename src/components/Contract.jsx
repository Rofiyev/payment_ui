import { layout, styles } from "../util/styles";
import card from '../image/card.png';

const Contract = () => {
  return (
    <section id="product" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading_2}`}>Bir necha oson qadamda <br className="sm:block hidden" /> shartnoma tuzish</h1>
        <p className={`${styles.paragraph} mt-5 max-w-[500px]`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
      </div>
      <div className={`${layout.sectionImage}`}>
        <img src={card} alt="card" className={`w-[100%] h-[100%] object-cover`} />
      </div>
    </section>
  )
}

export default Contract