import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineHome} from 'react-icons/ai'

const Sidenav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav);

    }
  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] '/>
        {
            nav ? ( //if our nav state is true
                <div className='fixed w-full h-screen bg-white/90'>
                    <a href="#main" className='2-[75%] flex justify-center'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a href="#"></a>
                </div> // true output
            )
            :( //if our nav state is not true
                <div></div> // false output
            )
        }
    </div>
  )
}

export default Sidenav