import { Link, MapPin, Twitter, UserRoundCheck } from 'lucide-react';
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import Followers from './Followers';

export default function SideBar(props) {
  let { user } = props;

  let { avatar_url, name, location, twitter_username, login, blog, bio, followers, following } =
    user;
  return (
    <div className='px-6 lg:p-0 flex flex-col w-full lg:max-w-96'>
      <img
        src={avatar_url}
        alt='Github Profile pic'
        className='w-24 h-24 lg:w-32 lg:h-32  xl:w-48 xl:h-48 rounded-[50%]'
      />
      <div className='text-2xl font-semibold mt-2'>{name}</div>
      <div className='text-sm tracking-wide italic'>@{login}</div>
      <div className='text-md tracking-wide font-medium mt-3 max-w-42'>{bio}</div>
      {location && (
        <div className='flex items-center gap-1 text-sm mt-2'>
          <MapPin className='h-4 w-4' />
          <div>{location}</div>
        </div>
      )}
      <div className='flex items-center gap-1 text-sm mt-2'>
        <UserRoundCheck className='h-4 w-4' />
        <Dialog>
          <DialogTrigger>{followers} Followers</DialogTrigger>
          <DialogContent>
            <Followers type={'followers'} />
          </DialogContent>
        </Dialog>

        {following && (
          <>
            <div className='w-[1px] h-3 bg-gray-400'></div>
            <Dialog>
              <DialogTrigger>{following} Following</DialogTrigger>
              <DialogContent>
                <Followers type={'following'} />
              </DialogContent>
            </Dialog>
          </>
        )}
      </div>
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
