import homepage from '@/assets/homepage.svg';
import NotFound from '@/components/NotFound';
import { Skeleton } from '@/components/ui/skeleton';
import { gitAxiosConig } from '@/lib/axiosConfig';
import { useGitContext } from '@/lib/gitContext';
import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';

export default function Repositories() {
  const { state, dispatch } = useGitContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    setTotalCount(state.usersDataTotlCount ?? 1);
  }, [state.usersDataTotlCount]);

  const fetchByPage = (page) => {
    const url = `search/users?q=${state.searchQuery}&page=${page}&per_page=${perPage}`;
    dispatch({ type: 'SET_USERS_DATA_FETCHING', payload: true });

    gitAxiosConig(url)
      .then((res) => {
        dispatch({ type: 'SET_USERS_DATA', payload: res?.data?.items });
      })
      .catch((err) => {
        console.error(err);
        dispatch({ type: 'SET_USERS_DATA', payload: [] });
      })
      .finally(() => {
        dispatch({ type: 'SET_USERS_DATA_FETCHING', payload: false });
      });
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    fetchByPage(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalCount / perPage);

  if (state.userDataFetching) {
    return (
      <div className='flex flex-col gap-4 items-center mt-10 w-[300px] md:w-[400px] lg:w-[600px]'>
        {Array.from({ length: 4 }).map((val) => {
          return (
            <div className='flex items-center border p-3 gap-2 rounded-lg w-full h-full'>
              <Skeleton className='w-16 h-16 rounded-[50%]' />
              <Skeleton className='h-4 w-full  rounded-xl' />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 items-center mt-10 w-[300px] md:w-[400px] lg:w-[600px]'>
      {state?.usersData.length > 0 ? (
        state?.usersData?.map((val) => {
          return <UserCard val={val} />;
        })
      ) : state?.searchQuery ? (
        <NotFound
          errorHeading=''
          errorDescription={`Sorry, we can't find the user. Check the username you are trying to find.`}
        />
      ) : (
        <img src={homepage} />
      )}

      {state?.usersData.length > 0 ? (
        <div className='flex justify-between w-full mt-4'>
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400'
          >
            Previous
          </button>
          <span className='text-gray-600'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className='px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400'
          >
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
