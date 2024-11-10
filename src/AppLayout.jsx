import { Outlet } from 'react-router-dom';
import SearchInput from './components/Search';

function AppLayout() {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='my-8 text-center mx-auto'>
        <h1 className='font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl '>
          Search and Explore {' '}
          <span className='bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>
            GitHub
          </span>
          <div className='lg:mb-3' />
          Profiles
        </h1>
      </div>
      <SearchInput />
      <Outlet />
      <div className=' w-[300px] h-[300px] lg:w-[800px] lg:h-[800px] rounded-[999px] absolute top-0 left-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100'></div>
      <div className='w-[300px] h-[300px] lg:w-[1000px] lg:h-[1000px] rounded-[999px] absolute bottom-0 right-0 -z-10 blur-3xl bg-opacity-60 bg-gradient-to-r from-red-100 via-gray-100 to-blue-100'></div>
    </div>
  );
}

export default AppLayout;
