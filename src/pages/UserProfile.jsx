import NotFound from '@/components/NotFound';
import RightSection from '@/components/user-profile/RightSection';
import SideBar from '@/components/user-profile/SideBar';
import { useGitContext } from '@/lib/gitContext';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const { username } = useParams();
  const { state, dispatch } = useGitContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [userData, setUserData] = useState({});

  console.log({ state });

  const fetchByUserName = () => {
    setLoading(true);
    setError(false);
    const url = `https://adpi.github.com/users/${username}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchByUserName();
  }, [username]);
  // if (error) {
  //   return <NotFound />;
  // }
  return (
    <div className='flex flex-col items-center justify-center lg:flex-row w-full lg:w-3/5'>
      <SideBar user={user} />
      <RightSection user={user} />
    </div>
  );
}

const user = {
  login: 'mittalsam98',
  id: 42431274,
  node_id: 'MDQ6VXNlcjQyNDMxMjc0',
  avatar_url: 'https://avatars.githubusercontent.com/u/42431274?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/mittalsam98',
  html_url: 'https://github.com/mittalsam98',
  followers_url: 'https://api.github.com/users/mittalsam98/followers',
  following_url: 'https://api.github.com/users/mittalsam98/following{/other_user}',
  gists_url: 'https://api.github.com/users/mittalsam98/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/mittalsam98/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/mittalsam98/subscriptions',
  organizations_url: 'https://api.github.com/users/mittalsam98/orgs',
  repos_url: 'https://api.github.com/users/mittalsam98/repos',
  events_url: 'https://api.github.com/users/mittalsam98/events{/privacy}',
  received_events_url: 'https://api.github.com/users/mittalsam98/received_events',
  type: 'User',
  user_view_type: 'public',
  site_admin: false,
  name: 'Sachin Mittal',
  company: null,
  blog: 'https://myself.vercel.app/',
  location: 'Panipat',
  email: null,
  hireable: null,
  bio: 'Designer by Day & Developer by Night ',
  twitter_username: 'Sachin_Mittal98',
  public_repos: 65,
  public_gists: 0,
  followers: 94,
  following: 15,
  created_at: '2018-08-16T06:33:34Z',
  updated_at: '2024-11-04T02:43:45Z'
};
