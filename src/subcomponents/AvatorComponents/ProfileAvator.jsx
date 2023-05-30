import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import useNetwork from '../../Hooks/useNetwork'
import Profile from '../../images/camera.jpg'
import FloatingBadge from './FloatingBadge'
import ProfileDropDown from './ProfileDropDown'

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

const ProfileAvator = () => {
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

    const handleClose = () => {
      setIsOpen((prev) => !prev)
    }

  const networkState = useNetwork()
  const {
    online,
    since,
    downLink,
    downLinkMax,
    effectiveType,
    rtt,
    saveData,
    type
  } = networkState;
  return (
    <React.Fragment>
        <motion.div
        initial={false}
        className='flex items-center justify-center gap-2 mx-2 mr-2'>
            <motion.button
            ref={buttonRef}
            onClick={handleClose}
            className='flex items-center justify-center flex-shrink-0'>
                <FloatingBadge online={online}/>
                <img src={Profile} alt="" className={`h-12 w-12 rounded-full border-4 ${online ? 'border-green-600' : 'border-gray-400'} `}/>
            </motion.button>
        </motion.div>
        <div className='absolute top-24 right-5'>
          <ProfileDropDown isOpen={isOpen} ItemVarients={varients}/>
        </div>
    </React.Fragment>
  )
}

export default ProfileAvator
