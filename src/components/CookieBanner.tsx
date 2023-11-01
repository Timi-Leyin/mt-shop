import React from 'react'

const CookieBanner = () => {
  return (
    <div className='fixed flex bg-black z-[20] justify-end items-end bg-opacity-60 backdrop-blur-md top-0 left-0 w-screen h-screen'>
        <div className="bg-white p-7 rounded-md shadow h-max my-5 mx-10">
    <h3 className='text-5xl'>Accept Cookie</h3>
    <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ut vitae officiis iste magnam ipsam doloribus enim eos quas corrupti eaque praesentium molestiae quis odit assumenda hic quam architecto sapiente excepturi perspiciatis, facilis ullam explicabo saepe! Mollitia veritatis ut illum eligendi harum dolorum asperiores veniam, nemo sapiente. Excepturi, deserunt enim.</p>
    
    
    <div className="flex gap-3 py-4">
        <button className="bg-yellow-700 text-white p-4">Disagree</button>
        <button className="bg-black text-white p-4">Agree</button>
    </div>
     </div>
    </div>
  )
}

export default CookieBanner