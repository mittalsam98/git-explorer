import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookCopy } from 'lucide-react';
import { gitAxiosConig } from '@/lib/axiosConfig';
import { Skeleton } from '@/components/ui/skeleton';

export default function RepoesTab() {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [repoesData, setRepoesData] = useState([]);

  const fetchRepoesUserName = () => {
    setLoading(true);
    setError(false);
    const url = `users/${username}/repos`;

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
    <div className='flex flex-col gap-3 items-center mt-5'>
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
            return <RepoNameCard id={val?.id} val={val} />;
          })}
    </div>
  );
}

const RepoNameCard = ({ val }) => {
  return (
    <div
      className='border  items-center justify-between gap-2 rounded-lg p-3 transition-all hover:bg-muted cursor-pointer w-[300px] sm:w-[400px] lg:w-[500px]'
      onClick={(e) => {
        window.open(val.html_url, '_blank');
        e.stopPropagation();
      }}
    >
      <div className='flex gap-1 items-center'>
        <BookCopy className='h-4 w-4' />{' '}
        <span className='text-md font-semibold'>{val.name} (Public)</span>
      </div>

      {val.fork && (
        <div className='mt-1'>
          <span className='text-xs '>
            Forked from{' '}
            <a
              href={val.forks_url}
              className='underline italic'
              onClick={(e) => e.stopPropagation()}
            >
              {val.name}
            </a>
          </span>
        </div>
      )}
      <div className='mt-1'>
        <span className='text-sm'>{val.description}</span>
      </div>
    </div>
  );
};
