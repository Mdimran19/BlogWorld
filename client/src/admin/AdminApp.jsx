import React, { useRef } from 'react';
import { Router, Routes, Route, Link } from 'react-router-dom';

import SideBar from './components/SideBar';

import AddBlog from './pages/AddBlog';
import BlogList from './pages/BlogList';

import UpdateBlog from './pages/UpdateBlog';
import TotalBlog from './pages/TotalBlog';
import Users from './pages/Users';
import SubsCribe from './pages/SubsCribe';

function AdminApp() {
  const sideMenuRef = useRef()
  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translatex(-16rem)'
  }
  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translatex(16rem)'
  }
  return (
    <div>
      <div className='flex'>
        <SideBar />
        <div className='flex flex-col w-full'>
          <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black '>
         
            <h3 className='font-medium cursor-pointer hidden md:flex lg:flex' >Admin panel</h3>    <img onClick={openMenu}  className='custom-range:flex sm:flex md:hidden lg:hidden cursor-pointer' src="/Images/fmenu.png" alt="" height={20} width={20} /> <img  src="/Images/imran.jpg" width={40} height={40} className='rounded-full' alt="" />
            
          </div>
        
          {/* mobile menu */}
          <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
    top-0 buttom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute right-6 top-6 cursor-pointer' onClick={closeMenu}>
              <img src='/Images/Cross.png' alt='' width={25} height={25} />
            </div>
            <li>
    <Link to="/" onClick={closeMenu}>Home</Link>
  </li>
  <li>
    <Link to="/admin/addblog" onClick={closeMenu}>Add Blog</Link>
  </li>
  <li>
    <Link to="/admin" onClick={closeMenu}>Blog List</Link>
  </li>
  <li>
    <Link to="/admin/subs" onClick={closeMenu}>Subscribe List</Link>
  </li>
  <li>
    <Link to="/admin/totalblog" onClick={closeMenu}>Information</Link>
  </li>
  <li>
    <Link to="/admin/users" onClick={closeMenu}>Users</Link>
  </li>
          </ul>

          <Routes>
            <Route path='/' element={<BlogList />} />
            <Route path='/addblog' element={<AddBlog />} />
            <Route path='/subs' element={<SubsCribe />} />
            <Route path='/edit/:id' element={<UpdateBlog />} />
            <Route path='/totalblog' element={<TotalBlog />} />
            <Route path='/users' element={<Users/>} />
          </Routes>
        </div>


      </div>




    </div>
  );
}

export default AdminApp;