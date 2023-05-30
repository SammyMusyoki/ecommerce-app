import React, { useEffect, useRef, useState } from 'react'
import { ShoppingBagOutlined } from '@mui/icons-material'
import { AnimatePresence, motion } from 'framer-motion'
import CartItemList from './CartItemList'

  const varients = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 },
    },
  };


const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence>
        <motion.div 
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className='flex items-center justify-center'>
          <span className='md:hidden flex text-sm items-center justify-center h-5 w-5 relative bottom-4 left-14 bg-blue-600 rounded-full text-gray-50 flex-shrink-0'>4</span>
          <motion.button
          ref={buttonRef}
          onClick={() => setIsOpen(prev => !prev)}
          whileTap={{ scale: 0.97}}
          whileHover={{scale: 1.05}}
          type='button' className='gap-4 p-3 lg:px-6 shadow-md rounded-full md:rounded-xl bg-sky-200 flex items-center justify-center'>
              <span className='text-md font-semibold hidden md:flex flex-shrink-0'>My Cart</span>
              <span className='h-6 w-6 hidden md:flex items-center justify-center bg-blue-600 rounded-full text-gray-50 flex-shrink-0'>4</span>
              <span className='md:hidden'><ShoppingBagOutlined className='h-8 w-8'/></span>
          </motion.button>

          <div>
            <CartItemList isOpen={isOpen} ItemVariants={varients}/>
          </div>
        </motion.div>
      </AnimatePresence>
    </React.Fragment>
  )
}

export default CartButton
