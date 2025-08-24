import React,{useState} from 'react'
import Logo from '../assets/Logo.png'
import lock from '../assets/lock.svg'
import Hamburger from '../assets/hamburgerMenu.svg'
import Close from '../assets/close.svg'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)

    const [modalOpen, setModalOpen] = useState(false)
    const [modalType, setModalType] = useState('login') 

    const handleToggle = () =>{
        setToggle(!toggle)
    }

    const openModal = (type) => {
        setModalType(type)
        setModalOpen(true)
    }

    const closeModal = () => setModalOpen(false)

  return (
    <div className='w-full h-[96px] bg-white shadow-sm'>
        <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
            <img src={Logo} alt="logo" className='h-[40px] cursor-pointer'/>
            <h1 className='text-green-700 text-bold font-bold'>Dream-International</h1>
            <div className="flex items-center">
                <ul className='hidden md:flex gap-4 '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platform</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='md:flex hidden'>
                <button
                    className='flex justify-between items-center bg-transparent px-6 gap-2'
                    onClick={() => openModal('login')}
                >
                    <img src={lock} alt='lock'/>
                    Login
                </button>
                <button
                    className='px-8 py-3 bg-[#208446]'
                    onClick={() => openModal('signup')}
                >
                    Sign up for free
                </button>
            </div>
            <motion.div whileTap={{ scale:0.6 }} className="md:hidden cursor-pointer" onClick={handleToggle}>
                <img src={toggle ? Close : Hamburger} alt="hamburger" />
            </motion.div>
        </div>
        <div>
            <motion.ul
                initial={{ opacity:0,x:200 }}
                animate={{ opacity:1,x:0 }}
                exit={{ opacity:0,x:200 }}
             className={toggle ? 'absolute z-10 p-4 bg-white w-full px-8 md:hidden': 'hidden'}>
                <li className='p-4 hover:bg-gray-50'>Home</li>
                <li className='p-4 hover:bg-gray-50'>About</li>
                <li className='p-4 hover:bg-gray-50'>Support</li>
                <li className='p-4 hover:bg-gray-50'>Platform</li>
                <li className='p-4 hover:bg-gray-50'>Pricing</li> 
                <div className='flex flex-col my-4 gap-4'>
                    <button 
                        className='flex border border-[240136] justify-center items-center bg-transparent px-6 gap-2 py-4'
                        onClick={() => openModal('login')}
                    >
                        <img src={lock} alt='lock'/>
                        Login
                    </button>
                    <button 
                        className='px-8 py-5 bg-[#208446]'
                        onClick={() => openModal('signup')}
                    >
                        Sign up for free
                    </button>
                </div>
            </motion.ul>
        </div>

        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className='fixed inset-0 z-20 flex items-center justify-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                onClick={closeModal}
              />

              <motion.div
                className='relative z-30 w-[92%] max-w-md rounded-2xl bg-white shadow-2xl'
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              >
                <div className='flex items-center justify-between px-6 py-4 border-b'>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {modalType === 'login' ? 'Welcome back to Dream-international' : 'Create your account'}
                  </h3>
                  <button
                    onClick={closeModal}
                    className='p-2 rounded-full hover:bg-gray-100 transition'
                    aria-label='Close modal'
                  >
                  </button>
                </div>

                <div className='px-6 py-6'>
                  <p className='text-gray-700 text-center'>
                    {modalType === 'login' ? 'Login' : 'Sign up'}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
    </div>
  )
}

export default Navbar