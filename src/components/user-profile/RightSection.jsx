import RepoesTab from './RepoesTab';

export default function RightSection(props) {
  return (
    <div className='flex-1 border  rounded-xl'>
      <div className='font-semibold text-2xl px-8 py-4'> All Public Repoes</div>
      <RepoesTab />
    </div>
  );
}
