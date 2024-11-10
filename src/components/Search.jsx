import { gitAxiosConig } from '@/lib/axiosConfig';
import { useGitContext } from '@/lib/gitContext';
import { debounce } from '@/lib/utils';
import { Search } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Input } from './ui/input';

export default function SearchInput() {
  const { state, dispatch } = useGitContext();
  const inputRef = useRef();

  useEffect(() => {
    console.log({ inputRef });
    if (inputRef?.current) {
      inputRef.current.focus();
      inputRef.current.value = 'mittalsam98';
    }
  }, [inputRef]);

  const fetchByUserName = (username = '') => {
    dispatch({
      type: 'SET_USERS_DATA_FETCHING',
      payload: true
    });

    const url = `search/users?q=${username}`;

    gitAxiosConig(url)
      .then((res) => {
        dispatch({
          type: 'SET_USERS_DATA',
          payload: res?.data?.items
        });
        dispatch({
          type: 'SET_USERS_DATA_TOTAL_COUNT',
          payload: res?.data?.total_count
        });
      })
      .catch((err) => {
        dispatch({
          type: 'SET_USERS_DATA',
          payload: []
        });
      })
      .finally(() => {
        dispatch({ type: 'SET_SEARCH_QUERY', payload: username });
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
        <Search className='absolute left-2 top-2.5 h-4 w-4' />
        <Input
          ref={inputRef}
          type='search'
          placeholder='Search by username.....'
          onChange={handleChange}
          className='w-full pl-8 border border-gray-500	rounded-2xl'
        />
      </div>
    </div>
  );
}
