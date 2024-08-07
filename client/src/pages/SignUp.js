import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const SignUp = () => {
  const [data, setData] = useState({
    fullNames: "",
    email: "",
    cellPhone: "",
    source: ""
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', data); // Log form data to ensure it's being captured
    try {
      const dataResponse = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const dataApi = await dataResponse.json();
      console.log('API Response:', dataApi); // Log API response to debug

      if (dataApi.success) {
        toast.success(dataApi.message);
        navigate("/");
      } else {
        toast.error(dataApi.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className='container mx-auto mt-8 w-1/2'>
      <section id='sign-up' className="shadow-md p-8 rounded-lg">
        <h1 className='text-center text-4xl font-semibold mb-4'>Let Us Keep In Touch</h1>
        <p className='text-center mb-4'>Your details are always confidential with us</p>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-2'>Full Names</label>
            <input
              type='text'
              placeholder='Type your full names here'
              name='fullNames'
              value={data.fullNames}
              onChange={handleOnChange}
              required
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-2'>Email</label>
            <input
              type='email'
              placeholder='Type your email here'
              name='email'
              value={data.email}
              onChange={handleOnChange}
              required
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>

          <div className='mb-4'>
            <label className='block text-lg font-semibold mb-2'>Contact Number</label>
            <input
              type='tel'
              placeholder='Your cellphone number. Please use country code'
              name='cellPhone'
              value={data.cellPhone}
              onChange={handleOnChange}
              required
              className='w-full p-2 border border-gray-300 rounded'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="source" className='block text-lg font-semibold mb-2'>Where did you hear about us?</label>
            <select
              id="source"
              name="source"
              value={data.source}
              onChange={handleOnChange}
              required
              className='w-full p-2 border border-gray-300 rounded'
            >
              <option value="" disabled>Select an option</option>
              <option value="social_media">Social Media</option>
              <option value="friend">A Friend</option>
              <option value="search_engine">Search Engine</option>
              <option value="advertisement">Advertisement</option>
            </select>
          </div>

          <button type='submit' className='bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-all w-full'>
            Sign Up
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
