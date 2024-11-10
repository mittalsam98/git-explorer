import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookCopy, ExternalLink } from 'lucide-react';
import { gitAxiosConig } from '@/lib/axiosConfig';
import { Skeleton } from '@/components/ui/skeleton';
import UserCard from '@/components/UserCard';

export default function Followers({ type }) {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [repoesData, setRepoesData] = useState([]);
  console.log({ username });

  const fetchRepoesUserName = () => {
    setLoading(true);
    setError(false);
    const url = `users/${username}/${type}`;

    gitAxiosConig(url)
      .then((res) => {
        setRepoesData(res?.data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRepoesUserName();
  }, [username]);

  return (
    <div className='flex flex-col gap-3 items-center mt-5 overflow-y-scroll h-[500px]'>
      {loading
        ? Array.from({ length: 5 }).map((val) => {
            return (
              <div className='border p-3 gap-2 rounded-lg w-[300px] sm:w-[400px] lg:w-[500px]'>
                <Skeleton className='h-3 w-3/4 mt-2 rounded-xl' />
                <Skeleton className='h-3 w-2/4 mt-2 rounded-xl' />
                <Skeleton className='h-3 w-full mt-2 rounded-xl' />
              </div>
            );
          })
        : repoesData?.map((val) => {
            return (
              <div className='flex items-center gap-4'>
                <img
                  src={val.avatar_url}
                  alt='Github Profile pic'
                  className='w-16 h-16 rounded-[50%]'
                />
                <p className='text-lg font-medium text-gray-900 truncate dark:text-white'>
                  {val.login}
                </p>
                <ExternalLink
                  className='h-4 w-4'
                  onClick={() => {
                    window.open(val.html_url, '_blank');
                  }}
                />
              </div>
            );
          })}
    </div>
  );
}
