import React from 'react'

function Pricing() {
  return (
    <div className='relative'>
    <div className=' card2 py-2 px-2 bg-[#82e7f0] rounded-t-md w-[150px] border-[1.5px] border-black mt-10 3xl:ml-[1103px] xl:ml-[911px]  '>
      <h1 className='font-comfortaa text-sm text-center'>Pricing</h1>
    </div>
    <div className='card3 bg-[#eaeaea] w-[600px] mx-auto p-2 border-[1.5px] border-gray-950 rounded-md -mt-2'>
        <div className='flex flex-row'>
        <h1 className='font-plex ml-[50px] mb-2 text-md mt-2'>Setiap transaksi masuk akan terkena biaya sebesar 5%-6% (10% untuk Filipina) dengan batas minimum 150 rupiah / 1.5 peso   <br /><br /> <span>Pencairan dana menuju rekening bank/e-wallet streamer akan terkena biaya sebesar IDR 5.000 / PHP 50</span></h1>
        <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraccoon_happy.e82cc2b2.svg&w=384&q=75" className='w-[200px] ml-[10px]'  />
        </div>
    </div>
  </div>
  )
}

export default Pricing