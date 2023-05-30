import React from 'react'
import {motion} from 'framer-motion'

const CheckOutBtn = ({children}) => {
  return (
    <React.Fragment>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative p-2 shadow-lg rounded-md bg-sky-300 flex items-center justify-center"
      >
        {children}
      </motion.button>
    </React.Fragment>
  );
}

export default CheckOutBtn
