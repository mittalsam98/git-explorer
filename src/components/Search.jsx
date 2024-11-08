import { debounce } from '@/lib/utils';
import React from 'react';
import { Input } from './ui/input';
import { useGitContext } from '@/lib/gitContext';

export default function Search() {
  const { state, dispatch } = useGitContext();

  const fetchByUserName = (username = '') => {
    const url = `https://api.github.com/search/users?q=${username}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'SET_USERS_DATA',
          payload: data
        });
      });
  };
  const handleChange = debounce((e) => {
    fetchByUserName(e.target.value);
  }, 600);

  return (
    <div className='flex h-16 items-center px-6'>
      <div className='ml-auto flex items-center space-x-4'>
        <Input
          type='search'
          placeholder='Search...'
          onChange={handleChange}
          className='xs:w-[100px] lg:w-[300px]'
        />
      </div>
    </div>
  );
}
