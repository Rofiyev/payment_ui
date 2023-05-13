const styles = {
  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-14 py-4',
  padding: 'sm:px-16 px-6 sm:py-16 py-6',
  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
  container: 'xl:max-w-[1280px] w-full',
  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',
  flexBetween: 'flex justify-between items-center',
  paragraph: 'font-montserrat font-normal text-lightWhite text-[16px]',
  heading_1: 'font-montserrat font-semibold md:text-[72px] text-[42px] text-white sm:leading-[100px] leading-[60px]',
  heading_2: 'font-montserrat font-semibold xs:text-[42px] text-[24px] text-white xs:leading-[76.8px] leading-[45px] w-full',
}


const layout = {
  section: `flex lg:flex-row flex-col ${styles.paddingY} gap-10`,
  sectionReverse: `flex lg:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionImage: `flex-1 flex ${styles.flexStart} md:ml-10 ml-0 relative`,
  sectionImageReverse: `flex-1 flex ${styles.flexStart} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
}

export { styles, layout };