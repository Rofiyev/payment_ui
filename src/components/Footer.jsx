import { styles } from '../util/styles';
import logo from '../image/logo.png';
import { footerLinks, socialsMedia } from '../util/constants';
import LinkItem from './LinkItem';

const Footer = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logo} alt="Logo" className='w-[130px] h-[90px] object-cover cursor-pointer' />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>To'lovlarni oson, ishonchli va xavsiz qilishni yangi usuli</p>
        </div>

        <div className="w-full flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map(link => (
            <LinkItem key={link.title} {...link} />
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className='font-montserrat font-normal text-center text-[18px] leading-[27px] text-white'>Copyright &copy; 2023 Rof1yevPay. Barcha huquqlar himoyalangan</p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialsMedia.map(({ link, icon }, i) => (
            <a href={link} key={i}>
              <img src={icon} alt={link} className={`w-[21px] h-[21px] object-contain cursor-pointer ${i !== socialsMedia.length - 1 ? 'mr-6' : 'mr-0'}`} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer