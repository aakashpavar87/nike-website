import React from 'react'

const Button = ({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) => {
  return (
    <button
    className={
      `flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none rounded-full
      ${borderColor} 
      ? ${borderColor} ${backgroundColor} ${textColor}
      :  bg-coral-red text-white 
      ${fullWidth && 'w-full'}
      `}
    >{label} 
    {
      iconURL && <img src={iconURL} alt="icon-right" className='ml-2 rounded-full w-5 h-5' srcset="" />
    }
    </button>
  )
}
export default Button;