import SearchInput from './SearchInput';
import FilterInput from './FilterInput';

export default function Inputs() {
  return (
    <div className='flex flex-col md:items-start gap-11 md:flex-row md:gap-0 md:justify-between max-w-full'>
      <SearchInput />
      <FilterInput />
    </div>
  );
}
