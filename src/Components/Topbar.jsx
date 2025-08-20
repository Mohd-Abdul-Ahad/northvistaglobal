import React from 'react';

const Topbar = () => {
  return (
    <div className='bg-gray-100 border-b border-gray-200'>
      <div className='container mx-auto flex justify-end'>
        <ul className='flex gap-6 px-6 py-3 items-center'>
          <li className='text-sm font-medium text-gray-600 hover:text-primary cursor-pointer transition-colors flex items-center'>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.5 4.49a1 1 0 01-.5 1.21l-2.26 1.13a11.04 11.04 0 005.52 5.52l1.13-2.26a1 1 0 011.21-.5l4.49 1.5a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.72 21 3 14.28 3 6V5z" />
            </svg>
            Request Callback
          </li>
          <li className='text-sm font-medium text-gray-600 hover:text-primary cursor-pointer transition-colors flex items-center'>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.66 16.66L13.41 20.9a2 2 0 01-2.83 0l-4.24-4.24a8 8 0 1111.32 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Global Offices
          </li>
          <li className='text-sm font-medium text-gray-600 hover:text-primary cursor-pointer transition-colors flex items-center'>
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
            </svg>
            Mon-Fri 9:00–17:00
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
