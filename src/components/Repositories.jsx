import { useGitContext } from '@/lib/gitContext';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Repositories() {
  const { state } = useGitContext();
  console.log({ state });
  return (
    <div className='flex flex-col gap-4 items-center mt-10'>
      <UserCard
        val={{
          avatar_url: 'https://avatars.githubusercontent.com/u/42431274?v=4',
          login: 'mittalsam'
        }}
      />
      <UserCard
        val={{
          avatar_url: 'https://avatars.githubusercontent.com/u/42431274?v=4',
          login: 'mittalsam'
        }}
      />
      {/* {state?.usersData?.items?.map((val) => {
        <UserCard val={val} />;
      })} */}
    </div>
  );
}

const UserCard = (props) => {
  const navigate = useNavigate();
  const { avatar_url, login } = props.val;
  const handleNaviagate = () => {
    navigate(`/${login}`);
  };
  return (
    <div
      onClick={handleNaviagate}
      className='border flex items-center justify-between w-1/2 gap-2 rounded-lg p-3 transition-all hover:bg-muted cursor-pointer'
    >
      <div className='flex items-center gap-4'>
        <img src={avatar_url} alt='Github Profile pic' className='w-16 h-16 rounded-[50%]' />
        <p className='text-lg font-medium text-gray-900 truncate dark:text-white'>{login}</p>
      </div>
      <ChevronRight className='hover:scale-125 transition-transform' />
    </div>
  );
};
