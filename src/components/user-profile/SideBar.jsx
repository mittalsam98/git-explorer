import { Link, MapPin, Twitter } from 'lucide-react';
import React from 'react';

export default function SideBar(props) {
  let { user } = props;

  let { avatar_url, name, location, twitter_username, login, blog, bio } = user;
  return (
    <div className='p-12 flex flex-col'>
      <img src={avatar_url} alt='Github Profile pic' className='w-48 h-48 rounded-[50%]' />
      <div className='text-2xl font-semibold mt-2'>{name}</div>
      <div className='text-md tracking-wide'>{login}</div>
      <div className='text-sm tracking-wide font-medium mt-3 max-w-42'>{bio}</div>
      {location && (
        <div className='flex items-center gap-1 text-sm mt-2'>
          <MapPin className='h-4 w-4' />
          <div>{location}</div>
        </div>
      )}
      {blog && (
        <div className='flex items-center gap-1 text-sm mt-2'>
          <Link className='h-4 w-4' />
          <a className='cursor-pointer' target='_blank' href={blog}>
            {blog}
          </a>
        </div>
      )}
      {twitter_username && (
        <div className='flex items-center gap-1 text-sm mt-2'>
          <Twitter className='h-4 w-4' />
          <a
            className='cursor-pointer'
            target='_blank'
            href={`https://twitter.com/${twitter_username}`}
          >
            {twitter_username}
          </a>
        </div>
      )}
    </div>
  );
}
