import React from 'react'
import {motion}from 'framer-motion'

const SmallBtn = ( {children}) => {
  return (
    <React.Fragment>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative h-5 w-5 rounded-md bg-sky-300 flex items-center justify-center"
      >
        {children}
      </motion.div>
    </React.Fragment>
  );
}

export default SmallBtn
