import React from 'react'

const LinkItem = ({ title, links }) => {
  return (
    <div className='flex flex-col xs:my-0 my-4 min-w-[150px]'>
      <h4 className='font-montserrat font-medium text-[18px] leading-[20px] text-white'>{title}</h4>

      <ul className="list-none my-4">
        {links.map((link, i) => (
          <li key={i} className={`font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer ${i !== links.lenght - 1 ? 'mb-4' : 'mb-0'}`}>{link.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default LinkItem