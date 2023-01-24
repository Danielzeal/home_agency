import Logo from '../../assets/logo.png'
import { RiCloseFill, RiMenuFill } from 'react-icons/ri'
import { useState } from 'react'

const Navbar = () => {
  const [nav, setNav] = useState('Home');
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <section className='flex justify-between h-24 items-center text-white max-w-6xl px-4 sm:px-8  mx-auto border-b-2'>
        <div>
          <img src={Logo} />
        </div>
        <div className='md:hidden' onClick={() => setToggleMenu(prev => !prev)}>
          <RiMenuFill size={34} />
        </div>
        <nav className='hidden arial-label="main" space-x-12 md:flex items-end h-full font-DmSans font-normal'>
          <li className={`list-none ${nav === 'Home' ? 'active' : null} p-4`} onClick={() => setNav('Home')}>Home</li>
          <li className={`list-none ${nav === 'Landlord' ? 'active' : null} p-4`} onClick={() =>  setNav('Landlord')}>Landlord</li>
          <li className={`list-none ${nav === 'Tenants' ? 'active' : null} p-4`} onClick={() =>  setNav('Tenants')}>Tenants</li>
          <li className={`list-none ${nav === 'Contact Us' ? 'active' : null} p-4`} onClick={() =>  setNav('Contact Us')}>Contant Us</li>
        </nav>
        <div className='hidden lg:block' />
        <div className={`${toggleMenu ? 'menu' : 'hidden'} md:hidden origin-top animate-menu-animate`}>
          <div className='fixed top-8 right-5' onClick={() => setToggleMenu(prev => !prev)}>
            <RiCloseFill size={38} />
          </div>
          <nav className='w-full h-full'>
            <ul className='w-full h-full flex flex-col items-center mt-32 gap-12'>
              <li>Home</li>
              <li>Landlord</li>
              <li>Tenants</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div> 
    </section>
  )
}

export default Navbar