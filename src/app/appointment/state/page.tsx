// app/appointment/state/page.tsx
// import { useRouter } from 'next/navigation';
import MultipleSelect from '../components/menu';
import { redirect } from 'next/navigation';

const StatePage = () => {

  const handleSelectState = (state: string) => {
    redirect(`/appointment/city?state=${state}`);
  };

  return (
    <div className='flex flex-col justify-center'>
      <MultipleSelect/>
    </div>
  );
};

export default StatePage;
