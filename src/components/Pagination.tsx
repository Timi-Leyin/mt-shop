import React from 'react'

const Pagination = () => {
  return (
    <div className='flex items-center gap-7 font-bold my-7 text-2xl'>
        <button className="p-5 h-[55px] bg-[darkorange] text-white">1</button>
        <button className="p-5 h-[55px] bg-[#eee]">2</button>
        <button className="p-5 h-[55px] bg-[#eee]">3</button>
        <p>...</p>
        <button className="p-5 h-[55px] bg-[#eee]">9</button>
        <button className="p-5 h-[55px] bg-[#eee]">10</button>
    </div>
  )
}

export default Pagination