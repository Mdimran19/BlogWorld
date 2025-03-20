
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import axios from 'axios';

import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [menu, setMenu] = useState('All');  
  const apiUrl = import.meta.env.VITE_BackendUrl
  useEffect(() => {
    const fetchBlogs = async () => {
      try {

        const response = await axios.get(`${apiUrl}/blog/blog-get`);
        if (response && response.data) {
          setBlogs(response.data); 
        } else {
          console.error('No data found in response');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        toast.error("Error fetching blogs, please try again.");
      }
    };

    fetchBlogs();
  }, []); 

  return (
    <div>
      <ToastContainer />
      
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu('All')}
          className={menu === 'All' ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'py-1 px-4 rounded-sm cursor-pointer'}
        >
          All
        </button>
        <button
          onClick={() => setMenu('Travel')}
          className={menu === 'Travel' ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'py-1 px-4 rounded-sm cursor-pointer'}
        >
          Travel
        </button>
        <button
          onClick={() => setMenu('Health')}
          className={menu === 'Health' ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'py-1 px-4 rounded-sm cursor-pointer'}
        >
          Health
        </button>
        <button
          onClick={() => setMenu('Story')}
          className={menu === 'Story' ? 'bg-black text-white py-1 px-4 rounded-sm cursor-pointer' : 'py-1 px-4 rounded-sm cursor-pointer'}
        >
          Story
        </button>
      </div>

      
      <div className="flex flex-wrap justify-around gap-8 mb-16 xl:mx-24">
        {blogs?.filter((blog) => menu === 'All' || blog.category === menu) 
          .map((blog, index) => (
           
             <div key={index} className="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Link to={`/details/${blog._id}`}>
                  <img
                    class="h-48 w-full object-cover md:h-full md:w-48"
                    src={blog.fileAvatar.url}
                    alt={blog.title}
                  />
                  </Link>
                </div>
                <div class="p-8">
                  <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase"> {blog.title}</div>
                  <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                    {blog.category}
                  </a>
                  <p class="mt-2 text-gray-500">
                    {blog.author}
                  </p><br />
                  <p className='mt-2 text-gray-500'>{blog.brief}</p>
                </div>
              </div>
     
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogList;




