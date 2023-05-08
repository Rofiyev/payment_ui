const Button = ({ styles, text }) => {
  return (
    <button className={`py-2 px-6 font-montserrat font-semibold text-[18px] rounded-[10px] outline-none bg-blue-gradient ${styles}`} type='button'>{text}</button>
  )
}

export default Button