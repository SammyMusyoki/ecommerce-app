import React from 'react'

const FloatingBadge = ( {children, online}) => {
  return (
    <React.Fragment>
      <div className={`relative h-4 w-4 rounded-full ${online ? 'bg-green-500' : 'bg-gray-300'}   border-2 left-12 -top-4`}>{children}</div>
    </React.Fragment>
  );
}

export default FloatingBadge
