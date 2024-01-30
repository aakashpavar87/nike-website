import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button
    className='flex justify-center items-center gap-2 px-7 py-4 font-montserrat border text-lg leading-none bg-coral-red text-white rounded-full'
    >{label} 
    {
      iconURL && <img src={iconURL} alt="icon-right" className='ml-2 rounded-full w-5 h-5' srcset="" />
    }
    </button>
  )
}
export default Button;