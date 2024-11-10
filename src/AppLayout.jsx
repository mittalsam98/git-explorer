import { Outlet } from 'react-router-dom';
import SearchInput from './components/Search';

function AppLayout() {
  return (
    <div className='w-full flex flex-col items-center'>
      <SearchInput />
      <Outlet />
    </div>
  );
}

export default AppLayout;
