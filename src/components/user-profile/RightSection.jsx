import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RepoesTab from './RepoesTab';
import FollowersTab from './Followers';
export default function RightSection(props) {
  let { user } = props;
  let { followers, following, public_repos } = user;

  return (
    <div className='flex-1 border  rounded-xl'>
      <div className='font-semibold text-2xl px-8 py-4'> All Public Repoes</div>
      <RepoesTab />
    </div>
  );
}
