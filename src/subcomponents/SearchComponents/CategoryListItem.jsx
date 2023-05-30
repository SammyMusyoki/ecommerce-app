import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const CategoryListItem = ( {CategoryItem, isOpen,  handleToggle} ) => {
  return (
    <React.Fragment>
      <motion.div 
      initial = {{ opacity:0, scale: 0.5}}
      animate = {{ opacity: 1, scale: 1}}
      transition={{ 
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
      className={`absolute flex top-24 w-64 ${ isOpen ? '' : 'hidden'} translate-y-full`}>
        <div className='h-4 w-4 bg-sky-200 relative z-40 rotate-45 bottom-2 left-32'/>
        <ul className='py-4 bg-sky-200 rounded-xl absolute'>
          {
            CategoryItem.map( (category) => {
              return (
                <li key={category.id} className='hover:bg-sky-100 hover:z-40 border-b-2 border-sky-300  mb-1 p-2 px-6 text-lg font-semibold'>
                  <Link to={category.path} onClick={handleToggle}>
                    {category.name} 
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </motion.div>


    </React.Fragment>
  )
}

export default CategoryListItem