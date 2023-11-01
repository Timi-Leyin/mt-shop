import { Send } from 'iconsax-react'
import React from 'react'

const Newsletter = () => {
  return (
    <div className='border border-gray-700 h-[60px] flex items-center p-4 w-max rounded-sm'>
        <input type="email" className='bg-transparent outline-none' placeholder='Enter Email Address' />
        <button>
            <Send />
        </button>
    </div>
  )
}

export default Newsletter