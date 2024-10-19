import React from 'react'

function Hero() {
  return (
    <div>
        <div className="card1 bg-[#eaeaea] w-[600px] mx-auto mt-10 p-2 border-[1.5px] border-gray-950 rounded-md">
            <h1 className='font-plex mx-2 text-gray-600'>Saweria membantu kamu mendapatkan dukungan finansial dari penggemar karyamu dengan moda pembayaran di bawah ini:</h1>
            <div className='flex flex-row'>
                <ul className='mt-4 ml-[50px] '>
                    <h1 className='text-md font-plex font-light mb-1 text-gray-800'>🇮🇩  Indonesia</h1>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>GOPAY</li>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>OVO</li>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>DANA</li>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>LINKAJA</li>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>QRIS</li>
                </ul>
                <ul className='mt-4 ml-[100px] '>
                    <h1 className='text-md font-plex font-light mb-1 ml-4 text-gray-800'>🇵🇭  Filipina</h1>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>MAYA</li>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>GCASH</li>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>SHOPEE PAY</li>
                    <li className='list-disc font-comfortaa font-semibold text-lg text-black'>GRABPAY</li>
                </ul>
                <img src="https://saweria.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchicken_money.a24d8223.svg&w=1920&q=75" className='w-[130px] ml-[50px] ' />
            </div>
            <h1 className='font-plex mx-2 text-gray-600 mt-2 mb-5'>Dana dapat dengan mudah dicairkan ke semua rekening bank dan e-wallet di Indonesia / Filipina</h1>
        </div>
    </div>
  )
}

export default Hero
