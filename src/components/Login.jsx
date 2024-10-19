import React from 'react'

function Login() {
  return (
    <div className='flex flex-row justify-center mx-3'>
        <button className='btn px-6 py-2 text-lg bg-[#82e7f0] rounded-md border-[1.5px] border-gray-900 mt-5 font-plex'>Login</button>
        <button className='btn px-6 py-2 text-lg bg-[#FFC300] rounded-md border-[1.5px] border-gray-900 mt-5 ml-[40px] font-plex'>Daftar</button>
    </div>
  )
}

export default Login