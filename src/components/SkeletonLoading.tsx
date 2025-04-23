import React from 'react'

const SkeletonLoading = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
        {
            Array.from({ length : 12 }).map((_, index) => (
                <div key={index} className='w-full bg-gray-200 rounded-lg overflow-hidden shadow-lg animate-pulse'>
                    <div className='h-96 bg-gray-300'></div>
                    <div className="p-4">
                        <div className="h-4 bg-gray-300 w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-300 w-1/2 mb-2"></div>
                        <div className="h-3 bg-gray-300 w-1/2"></div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default SkeletonLoading