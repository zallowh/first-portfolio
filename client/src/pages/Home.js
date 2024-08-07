import React from 'react';
import AdminPanel from './AdminPanel';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='flex'>
      <aside className='min-h-[calc(100vh-200px)] shadow-md w-full max-w-60'>
        <AdminPanel />
      </aside>
      <main className='p-2'>
        <div>
          <div className=''>
            <p>Home</p>
          </div>

          <div>
            <p className=''>See our on-progress e-commerce store</p>
            <a href='https://github.com/zallowh/E-com-VC.git'>MERN store</a>
          </div>

          <div className=''>
            <p>Stay updated with latest technology</p>
            <Link to='/sign-up' className='block my-5 hover:underline'>
              Subscribe
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
