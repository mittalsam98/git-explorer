import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Repositories from './components/Repositories';

function AppLayout() {
  return (
    <div className='w-full'>
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
