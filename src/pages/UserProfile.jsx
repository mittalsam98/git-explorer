import NotFound from '@/components/NotFound';
import RightSection from '@/components/user-profile/RightSection';
import SideBar from '@/components/user-profile/SideBar';
import { gitAxiosConig } from '@/lib/axiosConfig';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function UserProfile() {
  const { username } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  const fetchByUserName = () => {
    setLoading(true);
    setError(false);
    const url = `users/${username}`;

    gitAxiosConig(url)
      .then((res) => {
        setUserData(res?.data);
      })
      .catch((err) => {
        setError(err?.message ?? 'Something went wrong');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchByUserName();
  }, [username]);

  if (error) {
    return (
      <div className='flex flex-col items-center justify-center w-full py-6 lg:pt-8 bg-slate-50'>
        <div
          className='flex mb-5 self-start pl-6 lg:pl-24 pb-6'
          onClick={() => {
            navigate('/');
          }}
        >
          <ArrowLeft /> Go Back
        </div>
        <NotFound errorSubHeading={error} />
      </div>
    );
  }
  return (
    <div className='flex flex-col items-center justify-center w-full py-6 lg:pt-8 bg-slate-50'>
      <div
        className='flex mb-5 self-start pl-6 lg:pl-24 pb-6'
        onClick={() => {
          navigate('/');
        }}
      >
        <ArrowLeft /> Go Back
      </div>
      {userData && (
        <div className='flex flex-col lg:w-3/5 lg:flex-row gap-5'>
          <SideBar user={userData} />
          <RightSection />
        </div>
      )}
    </div>
  );
}
