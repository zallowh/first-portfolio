import React from 'react';

const AdminPanel = () => {
  return (
    <div className='flex'>
      <aside className='min-h-full shadow-md w-full max-w-60'>
        <div className='h-fit flex justify-center items-center flex-col'>
          <h1 className='text-center text-lg font-sans font-semibold'>
            CONTACT US
          </h1>
          <hr className='w-full my-4 border-t border-gray-300' />
        </div>
      </aside>
      <main>
        {/* Main content here */}
      </main>
    </div>
  );
}

export default AdminPanel;
