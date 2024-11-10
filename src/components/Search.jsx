import { debounce } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { Input } from './ui/input';
import { useGitContext } from '@/lib/gitContext';
import { gitAxiosConig } from '@/lib/axiosConfig';
import { Search } from 'lucide-react';
import NotFound from './NotFound';
import { toast } from 'sonner';

export default function SearchInput() {
  const { dispatch } = useGitContext();
  const inputRef = useRef();

  useEffect(() => {
    console.log({ inputRef });
    if (inputRef?.current) {
      inputRef.current.focus();
      inputRef.current.value = 'mittalsam98';
      fetchByUserName('mittalsam98');
    }
  }, [inputRef]);

  const fetchByUserName = (username = '') => {
    dispatch({
      type: 'SET_USERS_DATA_FETCHING',
      payload: true
    });

    // When no username query is present API endpoint will be /users which finds random users
    const url = username ? `search/users?q=${username}` : '/users';

    gitAxiosConig(url)
      .then((res) => {
        // For search query endpoint API response includes items and total_count key as per doc
        dispatch({
          type: 'SET_USERS_DATA',
          payload: username ? res?.data?.items : res?.data
        });
        if (username) {
          dispatch({
            type: 'SET_USERS_DATA_TOTAL_COUNT',
            payload: res?.data?.total_count
          });
        }
        dispatch({ type: 'SET_SEARCH_QUERY', payload: username });
      })
      .catch((err) => {
        toast('Seomthing went wrong');
        dispatch({
          type: 'SET_USERS_DATA',
          payload: []
        });
      })
      .finally(() => {
        dispatch({
          type: 'SET_USERS_DATA_FETCHING',
          payload: false
        });
      });
  };

  const handleChange = debounce((e) => {
    fetchByUserName(e.target.value);
  }, 600);

  return (
    <div className='flex h-16 justify-center items-center px-6 w-full'>
      <div className='relative w-[500px]'>
        <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
        <Input
          ref={inputRef}
          type='search'
          placeholder='Search by username.....'
          onChange={handleChange}
          className='w-full pl-8'
        />
      </div>
    </div>
  );
}
