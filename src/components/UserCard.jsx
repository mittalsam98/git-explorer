import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function UserCard(props) {
  const navigate = useNavigate();
  const { avatar_url, login } = props.val;
  const handleNaviagate = () => {
    navigate(`/${login}`);
  };
  return (
    <div
      onClick={handleNaviagate}
      className='border flex items-center justify-between w-full gap-2 rounded-lg p-3 transition-all hover:bg-muted cursor-pointer'
    >
      <div className='flex items-center gap-4'>
        <img src={avatar_url} alt='Github Profile pic' className='w-16 h-16 rounded-[50%]' />
        <p className='text-lg font-medium text-gray-900 truncate dark:text-white'>{login}</p>
      </div>
      <ChevronRight className='hover:scale-125 transition-transform' />
    </div>
  );
}
